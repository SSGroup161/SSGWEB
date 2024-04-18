import React, { useState, useEffect } from "react";
import {
    Table,
    Button,
    Label,
    Modal,
    FileInput,
    TextInput,
    Textarea,
    Spinner,
} from "flowbite-react";
import { Toaster, toast } from "sonner";
import {
    getArticle,
    postArticle,
    getArticleId,
    deleteArticle,
    putArticle,
} from "../../store/action/article";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FormArcticle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [openModalId, setOpenModalId] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [image, setImage] = useState(null);
    const [modalType, setModalType] = useState("");
    const [idArticle, setIdArticle] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [inputData, setInputData] = useState({
        title: "",
        day: "",
        date: "",
        place: "",
        caption: "",
        desc: "",
    });
    const token = Cookies.get("token");

    const formatParagraphs = (text) => {
        const sentences = text.split(".  ").filter((sentence) => sentence);
        const paragraphs = sentences.map((sentence, index) => (
            <React.Fragment key={index}>
                {sentence.trim()}.
                {index !== sentences.length - 1 && (
                    <>
                        <br />
                        <br />
                    </>
                )}
            </React.Fragment>
        ));
        return paragraphs;
    };

    const { isError, errorMessage, data, isLoading } = useSelector(
        (state) => state.article
    );
    const { isLoading: isLoadingPost } = useSelector(
        (state) => state.addarticle
    );
    const { isLoading: isLoadingGetId, data: dataId } = useSelector(
        (state) => state.articleid
    );
    const { isLoading: isLoadingDelete } = useSelector(
        (state) => state.deletearticle
    );
    const { isLoading: isLoadingUpdate } = useSelector(
        (state) => state.putArticle
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getArticle());
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + "...";
    };

    const showModal = () => {
        setOpenModal(true);
    };

    const showArticleDetails = (id) => {
        dispatch(getArticleId(id)).then(() => {
            setOpenModalId(true);
        });
    };

    const onCloseModal = () => {
        setOpenModal(false);
        setIsEditMode(false);
        setSelectedArticle(null);
        setImage(null);
        setInputData({
            title: "",
            day: "",
            date: "",
            place: "",
            caption: "",
            desc: "",
        });
    };

    const onCloseModalId = () => {
        setOpenModalId(false);
        setImage(null);
        setInputData({
            title: "",
            day: "",
            date: "",
            place: "",
            caption: "",
            desc: "",
        });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setInputData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleEditClick = async (article) => {
        setSelectedArticle(article);
        const dataid = await dispatch(getArticleId(article.id_title));

        setInputData({
            title: article.title,
            day: dataid && dataid.day,
            date: dataid && dataid.date,
            place: article.place,
            caption: article.caption_img,
            desc: article.description,
        });
        setIsEditMode(true);
        setOpenModal(true);
    };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    function decodeJwt(token) {
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("JWT token yang diberikan tidak valid.");
        }

        const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
        const decodedPayload = atob(payload);

        return JSON.parse(decodedPayload);
    }

    const decodeToken = decodeJwt(token);

    function getFormattedDate() {
        const today = new Date();

        const dayFormatter = new Intl.DateTimeFormat("id-ID", {
            weekday: "long",
        });
        const day = dayFormatter.format(today);

        const dateFormatter = new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        const date = dateFormatter.format(today);

        return { day, date };
    }

    const { day, date } = getFormattedDate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setInputData
        if (
            !inputData.title ||
            !inputData.place ||
            !inputData.caption ||
            !inputData.desc ||
            (!image && !isEditMode)
        ) {
            toast.warning("Please fill in all the fields and select an image.");
            return;
        }

        let bodyFormData = new FormData();
        bodyFormData.append("title", inputData.title);
        bodyFormData.append("creator", decodeToken.username);
        bodyFormData.append("day", isEditMode ? inputData.day || "" : day);
        bodyFormData.append("date", isEditMode ? inputData.date || "" : date);
        bodyFormData.append("caption_img", inputData.caption);
        bodyFormData.append("description", inputData.desc);
        bodyFormData.append("place", inputData.place);
        if (image instanceof File) {
            bodyFormData.append("link_img", image, image.name);
        } else if (!isEditMode) {
            console.warn("Image is not a file.");
            toast.error("Please select a valid image file.");
            return;
        }

        const action = isEditMode ? putArticle : postArticle;
        const actionPayload = isEditMode
            ? [bodyFormData, selectedArticle.id_title]
            : [bodyFormData];

        dispatch(action(...actionPayload))
            .then(() => {
                onCloseModal();
                toast.success(
                    `Article ${isEditMode ? "updated" : "posted"} successfully!`
                );
                dispatch(getArticle());
            })
            .catch((error) => {
                console.error(
                    `${isEditMode ? "Update" : "Post"} article failed:`,
                    error
                );
                const errorMessage = error.response
                    ? error.response.data.message
                    : error.message;
                toast.error(
                    `Failed to ${
                        isEditMode ? "update" : "post"
                    } article: ${errorMessage}`
                );
            });
    };

    const handleDelete = (id) => {
        dispatch(deleteArticle(id))
            .then(() => {
                dispatch(getArticle())
                    .then(() => {
                        setOpenModalDelete(false);
                        toast.success("Article delete successfully!");
                    })
                    .catch((error) => {
                        toast.error("Failed to delete article.");
                    });
            })
            .catch((error) => {
                toast.error("Failed to delete article.");
            });
    };

    const handleDeleteClick = (id) => {
        setIdArticle(id);
        setModalType("delete");
        setOpenModalDelete(true);
    };

    const handleLogout = () => {
        setModalType("logout");
        setOpenModalDelete(true);
    };

    return (
        <>
            <Toaster richColors />
            <section className="h-screen w-screen flex flex-col gap-4 justify-start items-center relative">
                <Modal show={openModal} onClose={onCloseModal}>
                    <Modal.Header>
                        {isEditMode ? "Edit Article" : "Add New Article"}
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="title" value="Title" />
                                    <TextInput
                                        id="title"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.title}
                                        placeholder="Article Title"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="place" value="Place" />
                                    <TextInput
                                        id="place"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.place}
                                        placeholder="Jakarta"
                                    />
                                </div>
                                <div>
                                    <Label
                                        htmlFor="caption"
                                        value="Image Caption"
                                    />
                                    <TextInput
                                        id="caption"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.caption}
                                        placeholder="Caption for the image"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="desc" value="Description" />
                                    <Textarea
                                        id="desc"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.desc}
                                        placeholder="Detailed description..."
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="image" value="Image" />
                                    <FileInput
                                        id="image"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <Button type="submit" color="warning">
                                    {isLoadingPost && !isEditMode ? (
                                        <Spinner aria-label="Saving..." />
                                    ) : isLoadingUpdate && isEditMode ? (
                                        <Spinner aria-label="Updating..." />
                                    ) : isEditMode ? (
                                        "Update Article"
                                    ) : (
                                        "Save Article"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
                {isLoadingGetId ? (
                    <div className="w-screen h-screen bg-black bg-opacity-50 flex justify-center z-10 items-start absolute">
                        <Spinner
                            color="info"
                            aria-label="Info spinner example"
                            className="mt-48"
                        />
                    </div>
                ) : (
                    <Modal show={openModalId} onClose={onCloseModalId}>
                        <Modal.Header>Article Details</Modal.Header>
                        <Modal.Body>
                            <div className="w-full h-auto m-auto">
                                <div className="">
                                    {isLoading ? (
                                        <div className="w-72 h-10 md:w-[30rem] md:h-12 bg-gray-300 animate-pulse rounded-lg"></div>
                                    ) : (
                                        <h1 className="font-roboto text-2xl md:text-4xl text-black font-medium">
                                            {dataId && dataId && dataId.title}
                                        </h1>
                                    )}
                                    {isLoading ? (
                                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                                    ) : (
                                        <h4 className="font-roboto mt-4">
                                            {dataId && dataId && dataId.creator}
                                        </h4>
                                    )}
                                    {isLoading ? (
                                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                                    ) : (
                                        <h5 className="text-gray-400 font-roboto">
                                            {`${
                                                dataId && dataId && dataId.day
                                            }, ${
                                                dataId && dataId && dataId.date
                                            }`}
                                        </h5>
                                    )}
                                </div>
                                {isLoading ? (
                                    <div className="w-72 h-48 md:w-[40rem] md:h-[25rem] lg:w-[60rem] lg:h-[30rem] mt-8 bg-gray-300 animate-pulse rounded-lg"></div>
                                ) : (
                                    <div>
                                        <img
                                            src={
                                                dataId &&
                                                dataId &&
                                                dataId.link_img
                                            }
                                            alt="newsdetail"
                                            width={50}
                                            height={50}
                                            className="w-full mt-16 rounded-lg"
                                        />
                                        <h1 className="font-roboto text-gray-400 text-xs md:text-sm mt-2">
                                            {dataId &&
                                                dataId &&
                                                dataId.caption_img}
                                        </h1>
                                    </div>
                                )}
                                <div className="mt-8">
                                    {isLoading ? (
                                        <div>
                                            <div className="w-72 h-6 md:w-[40rem] md:h-10 lg:w-[60rem] mt-2 bg-gray-300 animate-pulse rounded-md"></div>
                                            <div className="w-72 h-6 md:w-[40rem] md:h-10 lg:w-[60rem] mt-2 bg-gray-300 animate-pulse rounded-md"></div>
                                            <div className="w-72 h-6 md:w-[40rem] md:h-10 lg:w-[60rem] mt-2 bg-gray-300 animate-pulse rounded-md"></div>
                                        </div>
                                    ) : (
                                        <p>
                                            <b>
                                                {dataId &&
                                                    dataId &&
                                                    dataId.place}
                                            </b>{" "}
                                            {` -- `}
                                            {dataId &&
                                                dataId &&
                                                formatParagraphs(
                                                    dataId.description
                                                )}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                )}
                <Modal
                    show={openModalDelete}
                    size="md"
                    onClose={() => setOpenModalDelete(false)}
                    popup
                >
                    <Modal.Header />
                    <Modal.Body>
                        {modalType === "delete" && (
                            <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure you want to delete this
                                    article?
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        color="failure"
                                        onClick={() => handleDelete(idArticle)}
                                    >
                                        {isLoadingDelete ? (
                                            <Spinner aria-label="Deleting..." />
                                        ) : (
                                            "Yes, I'm sure"
                                        )}
                                    </Button>
                                    <Button
                                        color="gray"
                                        onClick={() =>
                                            setOpenModalDelete(false)
                                        }
                                    >
                                        No, cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                        {modalType === "logout" && (
                            <div className="text-center">
                                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure you want to logout?
                                </h3>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        color="failure"
                                        onClick={() => {
                                            Cookies.remove("token");
                                            navigate("/");
                                            setOpenModalDelete(false);
                                        }}
                                    >
                                        Yes, Logout
                                    </Button>
                                    <Button
                                        color="gray"
                                        onClick={() =>
                                            setOpenModalDelete(false)
                                        }
                                    >
                                        No, cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>

                <div className="flex justify-center items-center md:justify-between md:flex-row flex-col w-screen px-4 md:px-20 mt-8">
                    <h1 className="text-2xl font-roboto text-[#D2AC47] font-medium uppercase">
                        List Article SS Group
                    </h1>
                    <div className="flex gap-4">
                        <button
                            className="w-32 h-8 bg-[#D2AC47] text-white hover:bg-yellow-300 rounded-sm flex justify-center items-center"
                            onClick={showModal}
                        >
                            <h1>Add</h1>
                        </button>
                        <button
                            className="w-32 h-8 bg-[#D2AC47] text-white hover:bg-yellow-300 rounded-sm flex justify-center items-center"
                            onClick={handleLogout}
                        >
                            <h1>Logout</h1>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto mt-6">
                    <Table hoverable>
                        <Table.Head className="">
                            <Table.HeadCell>ID</Table.HeadCell>
                            <Table.HeadCell>Image</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Author</Table.HeadCell>
                            <Table.HeadCell>Place</Table.HeadCell>
                            <Table.HeadCell>Desc</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        {data &&
                            data.map((article, index) => (
                                <Table.Body
                                    className="divide-y hover:cursor-pointer"
                                    key={index}
                                    onClick={() =>
                                        showArticleDetails(article.id_title)
                                    }
                                >
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {truncateText(article.id, 10)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img
                                                src={article.link_img}
                                                alt="Imagekakshell"
                                                width={50}
                                                height={30}
                                                className="mb-4 rounded-sm"
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            {truncateText(article.title, 10)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {truncateText(article.creator, 10)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {truncateText(article.place, 10)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {truncateText(
                                                article.description,
                                                10
                                            )}
                                        </Table.Cell>
                                        <Table.Cell className="flex gap-2 mt-3">
                                            <a
                                                href="#"
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleEditClick(article);
                                                }}
                                            >
                                                Edit
                                            </a>
                                            |
                                            <a
                                                href="#"
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleDeleteClick(
                                                        article.id
                                                    );
                                                }}
                                            >
                                                Delete
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            ))}
                    </Table>
                </div>
            </section>
        </>
    );
};

export default FormArcticle;
