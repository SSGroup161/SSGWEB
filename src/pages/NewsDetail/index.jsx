import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleId } from "../../store/action/article";
import { useDispatch, useSelector } from "react-redux";

const NewsDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isError, errorMessage, data, isLoading } = useSelector(
        (state) => state.articleid
    );
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getArticleId(id));
    }, [id, dispatch]);

    console.log(data);

    const title = data && data && data.title;
    const description = data && data && data.description;
    const canonicalUrl = `/news/detail/${id}`;

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

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="w-80 md:w-[40rem] lg:w-[60rem] h-auto m-auto mt-20">
                <div className="mt-16 md:mt-32">
                    {isLoading ? (
                        <div className="w-72 h-10 md:w-[30rem] md:h-12 bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <h1 className="font-roboto text-2xl md:text-4xl text-black font-medium">
                            {data && data && data.title}
                        </h1>
                    )}
                    {isLoading ? (
                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <h4 className="font-roboto mt-4">
                            {data && data && data.creator}
                        </h4>
                    )}
                    {isLoading ? (
                        <div className="w-36 h-6 md:w-80 md:h-8 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
                    ) : (
                        <h5 className="text-gray-400 font-roboto">
                            {`${data && data && data.day}, ${
                                data && data && data.date
                            }`}
                        </h5>
                    )}
                </div>
                {isLoading ? (
                    <div className="w-72 h-48 md:w-[40rem] md:h-[25rem] lg:w-[60rem] lg:h-[30rem] mt-8 bg-gray-300 animate-pulse rounded-lg"></div>
                ) : (
                    <div>
                        <img
                            src={data && data && data.link_img}
                            alt="newsdetail"
                            width={50}
                            height={50}
                            className="w-full mt-16 rounded-lg"
                        />
                        <h1 className="font-roboto text-gray-400 text-xs md:text-sm mt-2">
                            {data && data && data.caption_img}
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
                            <b>{data && data && data.place}</b> {` -- `}
                            {data && data && formatParagraphs(data.description)}
                        </p>
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewsDetail;
