import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAB from "../../components/FAB";
import { Carousel, Card, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { getArticle } from "../../store/action/article";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";

const News = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(1);
    // const onPageChange = (page) => setCurrentPage(page);
    const { isError, errorMessage, data, isLoading } = useSelector(
        (state) => state.article
    );

    const title = "Berita terbaru tentang Shella Saukia Group";
    const description =
        "Selamat datang di halaman berita terbaru dari SS Group (Shella Saukia Group). Di sini, Anda akan menemukan kumpulan berita terbaru dan informasi menarik seputar berbagai merek unggulan kami, termasuk SS Shop, SS Skin, Level Up Beaute, dan Level Up Style. Kami berkomitmen untuk menyajikan berita-berita terkini yang relevan dan informatif mengenai tren terbaru dalam industri kecantikan, fashion, dan perawatan pribadi. Jelajahi ragam artikel yang membahas tips kecantikan, ulasan produk, acara terbaru, dan masih banyak lagi. Dengan berita terbaru dari SS Group, Anda akan tetap up-to-date dengan informasi terkini dan dapat menemukan inspirasi baru untuk meningkatkan gaya hidup Anda.";
    const canonicalUrl = `/news`;

    useEffect(() => {
        document.title = title;

        let metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute("content", description);

        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute("href", canonicalUrl);

        return () => {
            if (metaDescription) {
                metaDescription.remove();
            }
            if (linkCanonical) {
                linkCanonical.remove();
            }
        };
    }, [title, description, canonicalUrl]);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getArticle());
    }, []);

    const handleDetail = (id) => {
        navigate(`/news/detail/${id}`);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.split(" ").slice(0, maxLength).join(" ") + "...";
    };

    const dataSlide = data && data.slice(0, 3);
    const dataSisa = data && data.slice(3);

    return (
        <div className="max-w-screen-3xl m-auto relative">
            <Navbar />
            <FAB />
            {isLoading ? (
                <div className="h-screen">
                    <div className="absolute bg-opacity-40 flex justify-center items-center w-screen h-screen">
                        <Spinner size="xl" color="warning" />
                    </div>
                </div>
            ) : (
                <div>
                    <section
                        className="lg:h-screen lg:mt-0 top-0"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <Carousel pauseOnHover className="carousel-custom">
                            {dataSlide &&
                                dataSlide.map((article, index) => (
                                    <div
                                        className="h-full relative"
                                        key={index}
                                    >
                                        <div className="absolute w-full h-full flex items-center justify-start">
                                            <div className="bg-[#D2AC47] absolute opacity-60 w-full h-full"></div>
                                            <div className="content-container z-10 w-72 md:w-[35rem] lg:w-[40rem] ms-14 items-center justify-center md:items-start md:justify-start md:ms-20 lg:ms-44 mt-10 flex flex-col gap-2 md:gap-4">
                                                <h1 className="font-roboto text-base md:text-4xl text-white font-medium">
                                                    {article.title}
                                                </h1>
                                                <p className="font-roboto text-[#CDCCC8] text-xs md:text-base">
                                                    {truncateText(
                                                        article.description,
                                                        20
                                                    )}
                                                </p>
                                                <div
                                                    className="w-28 md:w-48 h-8 md:h-14 border-white border-2 flex justify-center items-center text-white font-roboto text-xs md:text-base rounded-md md:rounded-md cursor-pointer hover:text-[#D2AC47] hover:bg-white"
                                                    onClick={() =>
                                                        handleDetail(
                                                            article.id_title
                                                        )
                                                    }
                                                >
                                                    <h1>Read more</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            src={article.link_img}
                                            alt="jxb"
                                            width="full"
                                            height="full"
                                            className="h-full w-full object-cover z-10"
                                        />
                                    </div>
                                ))}
                        </Carousel>
                    </section>
                    <section className="mt-12 md:mt-20 px-8 md:px-0">
                        <h1
                            className="text-center text-[#D2AC47] font-roboto font-medium text-3xl md:text-5xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            News & Event
                        </h1>
                        <div className="mt-8 md:mt-20 flex flex-wrap gap-8 justify-center">
                            {dataSisa &&
                                dataSisa.map((article, index) => (
                                    <Card
                                        className="max-w-sm"
                                        imgSrc={article.link_img}
                                        horizontal
                                        data-aos="fade-up"
                                        data-aos-duration="1100"
                                        key={index}
                                    >
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {article.title}
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            {truncateText(
                                                article.description,
                                                20
                                            )}
                                        </p>
                                        <p
                                            onClick={() =>
                                                handleDetail(article.id_title)
                                            }
                                            className="text-end hover:cursor-pointer hover:text-[#D2AC47]"
                                        >
                                            Readmore
                                        </p>
                                    </Card>
                                ))}
                        </div>
                    </section>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default News;
