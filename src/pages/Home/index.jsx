import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Campaign from "../../components/Campaign";
import Footer from "../../components/Footer";

const imagekakshell =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700116316/SSG/FotoKakShell_1_qzbrwx.png";
const imagekakshell2 =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700195072/SSG/kakshell2_jdgaik.png";
const imagessskin =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSKIN_nnzc1p.svg";
const imagessshop =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSHOP_w8okrk.svg";
const imagelevelup =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136420/SSG/LEVELUP_ymv49h.svg";
const imagessskingold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSKINGOLD_kseonm.png";
const imagessshopgold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSHOPGOLD_zuncts.png";
const imagelevelupblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137656/SSG/LEVELUPBLACK_qmwklj.svg";
const imagebeauty =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700207915/SSG/Acne_series_1_lwltcw.png";
const imagefashion =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700209264/SSG/kakshell3_dfmlx3.png";

const Home = () => {
    return (
        <>
            <Campaign />
            <Navbar />
            <div className="flex flex-col md:flex-row relative">
                <div className="hidden flex-1 md:flex justify-end">
                    <img src={imagekakshell} alt="Imagekakshell" width={600} />
                </div>
                <div className="flex-1 flex md:hidden flex-col items-center relative">
                    <img
                        src={imagekakshell}
                        alt="Imagekakshell"
                        width={300}
                        className="mb-4"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 393 170"
                        fill="none"
                        className="absolute bottom-0 w-full md:hidden"
                    >
                        <path
                            d="M60.5275 96.5104C16.685 76.7261 20.0367 23.9682 -1.5 4.18402L-2.5 231.995L-5 235H60.5275H192.824H324.352H393V25.6377C379.432 -8.12552 355.311 -0.472804 324.352 4.18402C280.509 10.7788 236.667 63.5367 192.824 89.9156C148.982 116.295 105.139 116.295 60.5275 96.5104Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="flex-1 flex justify-center items-center z-10">
                    <div className="lg:px-24 px-10">
                        <div className="">
                            <h1 className="font-aref uppercase text-[#D2AC47] text-xl lg:text-3xl">
                                the only place where
                            </h1>
                            <h1 className="font-aref uppercase text-[#D2AC47] text-3xl lg:text-5xl mt-4">
                                the magic of beauty
                            </h1>
                            <h1 className="font-aref uppercase text-[#D2AC47] text-xl lg:text-3xl mt-4">
                                happened
                            </h1>
                        </div>
                        <div className="mt-8 font-roboto text-[#A18E64] font-light">
                            <p>
                                SS Group, a company owned by well-known
                                influencer Shella Saukia, is a company operating
                                in the Health and Beauty industry. Find the
                                beauty and health you are looking for with us!
                            </p>
                        </div>
                        <div className="flex mt-8 gap-6 md:gap-10 mb-28">
                            <div className="w-[10rem] lg:w-[12rem] h-14 bg-[#D2AC47] text-white cursor-pointer rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#d2ad47b0]">
                                <h1 className="font-roboto">Get Started</h1>
                            </div>
                            <div className="w-[10rem] lg:w-[12rem] h-14 bg-white border-2 border-[#D2AC47] text-[#D2AC47] cursor-pointer rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#fff8ea]">
                                <h1 className="font-roboto">More</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 237"
                    fill="none"
                    className="absolute bottom-0 hidden md:block"
                    style={{ width: "100%", height: "auto" }}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0L34.8 19.75C68.4 39.5 136.8 79 205.2 98.75C274.8 118.5 343.2 118.5 411.6 92.1667C480 65.8333 548.4 13.1667 616.8 6.58333C685.2 0 754.8 39.5 823.2 65.8333C891.6 92.1667 960 105.333 1028.4 125.083C1096.8 144.833 1165.2 171.167 1234.8 171.167C1303.2 171.167 1371.6 144.833 1405.2 131.667L1440 118.5V237H1405.2C1371.6 237 1303.2 237 1234.8 237C1165.2 237 1096.8 237 1028.4 237C960 237 891.6 237 823.2 237C754.8 237 685.2 237 616.8 237C548.4 237 480 237 411.6 237C343.2 237 274.8 237 205.2 237C136.8 237 68.4 237 34.8 237H0V0Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#D2AC47] font-roboto text-2xl md:text-3xl mb-8 md:mb-14">
                    Our Brand
                </h1>
                <div className="flex items-center gap-10 md:gap-32 lg:gap-44">
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={150}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={100}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={100}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={110}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={70}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                    />
                    <img
                        src={imagessshop}
                        alt="imagesskin"
                        width={70}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessshopgold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessshop)}
                    />
                    <img
                        src={imagelevelup}
                        alt="imagesskin"
                        width={80}
                        className="cursor-pointer block md:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupblack)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagelevelup)}
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-48 lg:px-56 gap-10 md:px-12">
                <div className="">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        About Us
                    </h1>
                    <div className="w-80 md:w-[26rem] lg:w-[30rem]">
                        <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                            SS Group stands for Shella Saukia Group is an
                            Indonesia company engaged in beauty, fashion, and
                            personal care products. SS Group is established in
                            2019 and already have massive success in products-
                            selling at various platforms through the act of
                            their well-known social media influencer owner,
                            Shella Saukia. One of their most sensational success
                            is gaining 16 billion IDR from one time live
                            streaming selling in September 2023.
                        </p>
                    </div>
                    <div className="bg-[#D2AC47] w-48 flex justify-center items-center h-12 rounded-md mt-8 hover:bg-[#d2ad47b0] cursor-pointer">
                        <h1 className="font-roboto font-light text-white">
                            More About SS Group
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={imagekakshell2}
                        alt="imagekakshell2"
                        width={270}
                        className=""
                    />
                    <h1 className="font-roboto text-[#D2AC47] mt-4">
                        Shella Saukia
                    </h1>
                    <h1 className="font-roboto text-[#D2AC47] font-light">
                        Owner SS Group
                    </h1>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-48 md:px-10 lg:px-56">
                <div>
                    <img src={imagebeauty} alt="imagebeauty" width={400} />
                </div>
                <div className="w-80 md:w-[24rem] lg:w-[30rem]">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Key For Your Beauty
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-48 md:px-10 lg:px-56 gap-10">
                <div className="hidden lg:block">
                    <img src={imagefashion} alt="imagebeauty" width={350} />
                </div>
                <div className="lg:hidden">
                    <img src={imagefashion} alt="imagebeauty" width={300} />
                </div>
                <div className="w-80 md:w-[26rem] lg:w-[30rem]">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Fashion
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] mt-6 md:mt-10">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-48 lg:px-56">
                <div className="bg-[#D2AC47] w-[21rem] md:w-[40rem] lg:w-[50rem] h-auto rounded-2xl md:rounded-3xl flex justify-center items-center flex-col pb-12 relative overflow-hidden">
                    <h1 className="text-white font-roboto font-light text-3xl my-8">
                        Contact Us
                    </h1>
                    <div className="flex flex-col items-center">
                        <input
                            className="w-64 md:w-[27rem] h-10 rounded-md px-4 active:border-[#D2AC47]"
                            placeholder="Email"
                        />
                        <textarea
                            name="desc"
                            id="desc"
                            cols="30"
                            rows="8"
                            className="rounded-md p-4 active:border-[#D2AC47] mt-4 w-64 md:w-[27rem] z-10"
                            placeholder="Message"
                        ></textarea>
                        <div className="border-white bg-[#D2AC47] z-10 border-2 w-48 rounded-md h-10 mt-4 flex justify-center items-center cursor-pointer hover:bg-white text-white hover:text-[#D2AC47]">
                            <h1 className="font-roboto">Send</h1>
                        </div>
                    </div>
                    <svg
                        width="800"
                        height="800"
                        viewBox="0 0 314 653"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer absolute -left-[28rem] md:-left-96 -bottom-64 opacity-50"
                    >
                        <path
                            d="M35.4601 427.49C53.9671 427.49 68.9701 412.487 68.9701 393.98C68.9701 375.473 53.9671 360.47 35.4601 360.47C16.953 360.47 1.95007 375.473 1.95007 393.98C1.95007 412.487 16.953 427.49 35.4601 427.49Z"
                            fill="#FFF8EA"
                        />
                        <path
                            d="M130.82 233.21C108.34 219.45 91.16 209.65 78.96 199.95C10.32 145.31 37.05 78.08 37.05 78.08C1.95003 104.38 -7.97995 156.61 8.76005 195.48C25.7401 234.92 69.3 258.86 103.68 281.11C123.21 293.75 149.57 306.44 165.64 323.85C188.93 349.1 195.2 384.8 177.71 413.78C156.99 448.1 116.34 456.94 79.05 440.88C79.05 440.88 139.13 471.23 192.6 438.56C192.6 438.56 229.48 415.97 231.75 362.32C234.02 308.68 197.65 274.13 130.82 233.21Z"
                            fill="#FFF8EA"
                        />
                        <path
                            d="M175.86 172.93C150.78 157.58 122.49 143.44 103.09 120.39C83.05 96.57 78.68 61.04 98.72 35.59C111.7 19.11 132.41 10.85 153.13 11.54C194.5 12.9 240.88 41.55 243.15 116.56H255.9V5.16999C255.9 5.16999 246.08 5.16999 246 5.16999C246 5.16999 244.25 12.75 244.1 13.4C243.19 17.3 242.17 22.22 239.19 25.1C235.81 28.37 230.65 28.59 226.33 27.45C209.05 22.9 189.05 -11.65 115.85 5.16999C57.72 18.53 36.75 84.34 55.74 136.25C78.39 198.13 150.03 213.05 195.41 252.95C266.79 312.46 245.06 375.95 245.05 375.97C252.15 370.11 257.89 362.56 262.96 354.93C269.87 344.53 276.02 332.84 278.25 320.49C290.96 250.04 228.17 204.95 175.86 172.93Z"
                            fill="#FFF8EA"
                        />
                        <path
                            d="M59.2517 587.986C57.8233 584.7 55.633 582.129 52.6809 580.272C49.7763 578.368 46.348 577.415 42.396 577.415C38.682 577.415 35.349 578.272 32.3968 579.987C29.4447 581.701 27.1116 584.153 25.3974 587.343C23.6833 590.486 22.8262 594.152 22.8262 598.342C22.8262 602.532 23.6833 606.222 25.3974 609.413C27.1116 612.603 29.4447 615.055 32.3968 616.769C35.349 618.483 38.682 619.34 42.396 619.34C45.8719 619.34 48.9907 618.602 51.7524 617.126C54.5617 615.603 56.7996 613.46 58.4661 610.698C60.1802 607.889 61.1563 604.627 61.3944 600.913H40.3962V596.842H66.6797V600.485C66.4416 604.865 65.2512 608.841 63.1086 612.412C60.9659 615.936 58.0852 618.721 54.4664 620.769C50.8953 622.816 46.8718 623.84 42.396 623.84C37.7773 623.84 33.5872 622.769 29.8256 620.626C26.064 618.436 23.0881 615.412 20.8978 611.555C18.7551 607.651 17.6838 603.247 17.6838 598.342C17.6838 593.438 18.7551 589.057 20.8978 585.2C23.0881 581.296 26.064 578.272 29.8256 576.13C33.5872 573.939 37.7773 572.844 42.396 572.844C47.7289 572.844 52.3952 574.178 56.3948 576.844C60.3945 579.51 63.299 583.224 65.1084 587.986H59.2517ZM102.407 623.34L90.0511 602.485H80.8375V623.34H75.838V573.416H90.8367C96.4077 573.416 100.622 574.749 103.479 577.415C106.383 580.082 107.835 583.582 107.835 587.914C107.835 591.533 106.788 594.628 104.693 597.199C102.645 599.723 99.5979 601.366 95.5506 602.128L108.407 623.34H102.407ZM80.8375 598.414H90.9081C94.8126 598.414 97.7409 597.461 99.6931 595.557C101.693 593.652 102.693 591.105 102.693 587.914C102.693 584.629 101.741 582.105 99.836 580.344C97.9313 578.534 94.9316 577.63 90.8367 577.63H80.8375V598.414ZM140.184 623.84C135.565 623.84 131.375 622.769 127.613 620.626C123.852 618.436 120.876 615.412 118.685 611.555C116.543 607.651 115.471 603.247 115.471 598.342C115.471 593.438 116.543 589.057 118.685 585.2C120.876 581.296 123.852 578.272 127.613 576.13C131.375 573.939 135.565 572.844 140.184 572.844C144.85 572.844 149.064 573.939 152.825 576.13C156.587 578.272 159.539 581.296 161.682 585.2C163.824 589.057 164.896 593.438 164.896 598.342C164.896 603.247 163.824 607.651 161.682 611.555C159.539 615.412 156.587 618.436 152.825 620.626C149.064 622.769 144.85 623.84 140.184 623.84ZM140.184 619.483C143.898 619.483 147.231 618.626 150.183 616.912C153.135 615.198 155.468 612.746 157.182 609.556C158.896 606.318 159.753 602.58 159.753 598.342C159.753 594.104 158.896 590.39 157.182 587.2C155.468 584.01 153.135 581.558 150.183 579.844C147.231 578.13 143.898 577.273 140.184 577.273C136.47 577.273 133.137 578.13 130.184 579.844C127.232 581.558 124.899 584.01 123.185 587.2C121.471 590.39 120.614 594.104 120.614 598.342C120.614 602.58 121.471 606.318 123.185 609.556C124.899 612.746 127.232 615.198 130.184 616.912C133.137 618.626 136.47 619.483 140.184 619.483ZM178.829 573.416V604.842C178.829 609.794 179.996 613.46 182.329 615.841C184.71 618.221 187.948 619.412 192.043 619.412C196.137 619.412 199.328 618.245 201.613 615.912C203.946 613.531 205.113 609.841 205.113 604.842V573.416H210.112V604.77C210.112 611.103 208.422 615.865 205.041 619.055C201.708 622.245 197.352 623.84 191.971 623.84C186.591 623.84 182.21 622.245 178.829 619.055C175.496 615.865 173.83 611.103 173.83 604.77V573.416H178.829ZM253.19 587.772C253.19 592.057 251.785 595.509 248.976 598.128C246.167 600.747 241.953 602.056 236.334 602.056H226.263V623.34H221.264V573.416H236.334C241.905 573.416 246.095 574.725 248.904 577.344C251.761 579.963 253.19 583.439 253.19 587.772ZM236.334 597.771C244.143 597.771 248.047 594.438 248.047 587.772C248.047 584.439 247.119 581.915 245.262 580.201C243.405 578.487 240.429 577.63 236.334 577.63H226.263V597.771H236.334Z"
                            fill="#FFF8EA"
                        />
                        <path
                            d="M305.68 619.02C309.789 619.02 313.12 615.689 313.12 611.58C313.12 607.471 309.789 604.14 305.68 604.14C301.571 604.14 298.24 607.471 298.24 611.58C298.24 615.689 301.571 619.02 305.68 619.02Z"
                            fill="#FFF8EA"
                        />
                    </svg>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
