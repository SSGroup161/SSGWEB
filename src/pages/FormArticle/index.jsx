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
} from "../../store/action/article";
import { useDispatch, useSelector } from "react-redux";

const FormArcticle = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [openModalId, setOpenModalId] = useState(false);
    const [image, setImage] = useState(null);
    const [inputData, setInputData] = useState({
        title: "",
        creator: "",
        day: "",
        date: "",
        place: "",
        caption: "",
        desc: "",
    });

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
        setImage(null);
        setInputData({
            title: "",
            creator: "",
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
            creator: "",
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

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !inputData.title ||
            !inputData.creator ||
            !inputData.day ||
            !inputData.date ||
            !inputData.place ||
            !inputData.caption ||
            !inputData.desc ||
            !image
        ) {
            toast.warn("Please fill in all the fields and select an image.");
            return;
        }

        let bodyFormData = new FormData();
        bodyFormData.append("title", inputData.title);
        bodyFormData.append("creator", inputData.creator);
        bodyFormData.append("day", inputData.day);
        bodyFormData.append("date", inputData.date);
        bodyFormData.append("caption_img", inputData.caption);
        bodyFormData.append("description", inputData.desc);
        bodyFormData.append("place", inputData.place);
        bodyFormData.append("link_img", image);

        dispatch(postArticle(bodyFormData))
            .then(() => {
                onCloseModal();
                toast.success("Article posted successfully!");
                dispatch(getArticle());
            })
            .catch((error) => {
                console.error("Post article failed:", error);
                toast.error("Failed to post article.");
            });
    };

    return (
        <>
            <Toaster richColors />
            <section className="h-screen w-screen flex flex-col gap-4 justify-start items-center relative">
                <Modal show={openModal} onClose={onCloseModal}>
                    <Modal.Header>Add New Article</Modal.Header>
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
                                    <Label htmlFor="creator" value="Creator" />
                                    <TextInput
                                        id="creator"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.creator}
                                        placeholder="Article Creator"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <Label htmlFor="day" value="Day" />
                                        <TextInput
                                            id="day"
                                            required
                                            onChange={handleInputChange}
                                            value={inputData.day}
                                            placeholder="Day"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="date" value="Date" />
                                        <TextInput
                                            id="date"
                                            required
                                            onChange={handleInputChange}
                                            value={inputData.date}
                                            placeholder="Date"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="place" value="Place" />
                                    <TextInput
                                        id="place"
                                        required
                                        onChange={handleInputChange}
                                        value={inputData.place}
                                        placeholder="Location"
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
                                        required
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <Button type="submit" color="warning">
                                    {isLoadingPost ? (
                                        <div>
                                            <Spinner
                                                color="info"
                                                aria-label="Info spinner example"
                                            />
                                            {` Saving...`}
                                        </div>
                                    ) : (
                                        "Save Article"
                                    )}{" "}
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
                                            {dataId &&
                                                dataId[0] &&
                                                dataId[0].title}
                                        </h1>
                                    )}
                                    {isLoading ? (
                                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                                    ) : (
                                        <h4 className="font-roboto mt-4">
                                            {dataId &&
                                                dataId[0] &&
                                                dataId[0].creator}
                                        </h4>
                                    )}
                                    {isLoading ? (
                                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                                    ) : (
                                        <h5 className="text-gray-400 font-roboto">
                                            {`${
                                                dataId &&
                                                dataId[0] &&
                                                dataId[0].day
                                            }, ${
                                                dataId &&
                                                dataId[0] &&
                                                dataId[0].date
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
                                                dataId[0] &&
                                                dataId[0].link_img
                                            }
                                            alt="newsdetail"
                                            width={50}
                                            height={50}
                                            className="w-full mt-16 rounded-lg"
                                        />
                                        <h1 className="font-roboto text-gray-400 text-xs md:text-sm mt-2">
                                            {dataId &&
                                                dataId[0] &&
                                                dataId[0].caption_img}
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
                                                    dataId[0] &&
                                                    dataId[0].place}
                                            </b>{" "}
                                            {` -- `}
                                            {dataId &&
                                                dataId[0] &&
                                                formatParagraphs(
                                                    dataId[0].description
                                                )}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                )}
                <div className="flex justify-center items-center md:justify-between md:flex-row flex-col w-screen px-4 md:px-20 mt-8">
                    <h1 className="text-2xl font-roboto text-[#D2AC47] font-medium uppercase">
                        List Article SS Group
                    </h1>
                    <button
                        className="w-32 h-8 bg-slate-200 rounded-sm flex justify-center items-center"
                        onClick={showModal}
                    >
                        <h1>Add</h1>
                    </button>
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
                                        showArticleDetails(article.id)
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
                                            >
                                                Edit
                                            </a>
                                            |
                                            <a
                                                href="#"
                                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
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
