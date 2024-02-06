import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { Card, Dropdown } from "flowbite-react";
import { getBrand } from "../../store/action/brand";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Brand = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isError, errorMessage, data, isLoading } = useSelector(
        (state) => state.brand
    );

    useEffect(() => {
        getBrand(dispatch, id);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="h-screen relative flex-col">
                <div className="absolute w-full h-screen flex items-center justify-start">
                    <div className="content-container flex-1 z-10 w-72 md:w-[35rem] px-8 text-center md:text-start items-center justify-center md:items-start md:justify-start md:ms-10 lg:ms-20 xl:ms-44 flex flex-col gap-2 md:gap-4">
                        {isLoading ? (
                            <div className="w-32 h-32 bg-gray-400 rounded-lg animate-pulse"></div>
                        ) : (
                            <img
                                src={data && data[0] && data[0].logo_img}
                                alt="Logo"
                                width={50}
                                height={50}
                                className="w-28 lg:w-32"
                            />
                        )}
                        {isLoading ? (
                            <div className="w-72 md:w-96 h-12 bg-gray-400 rounded-lg animate-pulse"></div>
                        ) : (
                            <p className="font-roboto text-white text-xs md:text-base">
                                {data && data[0] && data[0].description}
                            </p>
                        )}
                        <div className="lg:flex gap-4 items-center">
                            {isLoading ? (
                                <div className="w-48 h-8 md:h-14 bg-gray-400 rounded-lg animate-pulse"></div>
                            ) : (
                                <a
                                    href={data && data[0] && data[0].link_web}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-48 h-8 md:h-14 border-white border-2 flex justify-center items-center text-white font-roboto text-xs md:text-base rounded-md md:rounded-md cursor-pointer hover:text-[#D2AC47] hover:bg-white">
                                        <h1>Go to Website</h1>
                                    </div>
                                </a>
                            )}
                            <div className="flex mt-6 justify-between items-center lg:mt-0 lg:gap-4">
                                {isLoading ? (
                                    <div className="w-14 h-14 bg-gray-400 rounded-lg animate-pulse"></div>
                                ) : (
                                    <a
                                        href={
                                            data && data[0] && data[0].link_ig
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer hover:scale-110"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                        >
                                            <path
                                                d="M25.2875 7.96258C24.9413 7.96258 24.603 8.06522 24.3152 8.25751C24.0274 8.4498 23.8031 8.72311 23.6707 9.04289C23.5382 9.36266 23.5036 9.71452 23.5711 10.054C23.6386 10.3935 23.8053 10.7053 24.05 10.95C24.2948 11.1948 24.6066 11.3614 24.9461 11.429C25.2855 11.4965 25.6374 11.4618 25.9572 11.3294C26.2769 11.1969 26.5502 10.9726 26.7425 10.6848C26.9348 10.397 27.0375 10.0587 27.0375 9.71258C27.0375 9.24845 26.8531 8.80333 26.5249 8.47514C26.1967 8.14696 25.7516 7.96258 25.2875 7.96258ZM31.9958 11.4917C31.9674 10.2818 31.7408 9.08463 31.325 7.948C30.9541 6.97548 30.377 6.09486 29.6333 5.36675C28.9112 4.61924 28.0285 4.04576 27.052 3.68966C25.9184 3.26115 24.7199 3.02935 23.5083 3.00425C21.9625 2.91675 21.4666 2.91675 17.5 2.91675C13.5333 2.91675 13.0375 2.91675 11.4916 3.00425C10.28 3.02935 9.0815 3.26115 7.94788 3.68966C6.97324 4.04936 6.09132 4.62236 5.36663 5.36675C4.61912 6.08888 4.04563 6.97156 3.68954 7.948C3.26103 9.08162 3.02922 10.2801 3.00413 11.4917C2.91663 13.0376 2.91663 13.5334 2.91663 17.5001C2.91663 21.4667 2.91663 21.9626 3.00413 23.5084C3.02922 24.7201 3.26103 25.9185 3.68954 27.0522C4.04563 28.0286 4.61912 28.9113 5.36663 29.6334C6.09132 30.3778 6.97324 30.9508 7.94788 31.3105C9.0815 31.739 10.28 31.9708 11.4916 31.9959C13.0375 32.0834 13.5333 32.0834 17.5 32.0834C21.4666 32.0834 21.9625 32.0834 23.5083 31.9959C24.7199 31.9708 25.9184 31.739 27.052 31.3105C28.0285 30.9544 28.9112 30.3809 29.6333 29.6334C30.3803 28.908 30.9579 28.0266 31.325 27.0522C31.7408 25.9155 31.9674 24.7184 31.9958 23.5084C31.9958 21.9626 32.0833 21.4667 32.0833 17.5001C32.0833 13.5334 32.0833 13.0376 31.9958 11.4917ZM29.3708 23.3334C29.3602 24.2591 29.1925 25.1763 28.875 26.0459C28.6421 26.6806 28.2681 27.254 27.7812 27.723C27.3082 28.205 26.7359 28.5782 26.1041 28.8167C25.2345 29.1343 24.3173 29.302 23.3916 29.3126C21.9333 29.3855 21.3937 29.4001 17.5583 29.4001C13.7229 29.4001 13.1833 29.4001 11.725 29.3126C10.7638 29.3306 9.80666 29.1826 8.89579 28.8751C8.29172 28.6244 7.74569 28.2521 7.29163 27.7813C6.80759 27.3128 6.43827 26.7389 6.21246 26.1042C5.85642 25.2222 5.65894 24.2842 5.62913 23.3334C5.62913 21.8751 5.54163 21.3355 5.54163 17.5001C5.54163 13.6647 5.54163 13.1251 5.62913 11.6667C5.63566 10.7204 5.80843 9.7825 6.13954 8.89591C6.39628 8.28037 6.79035 7.73167 7.29163 7.29175C7.73469 6.79033 8.28225 6.3921 8.89579 6.12508C9.78472 5.80431 10.7216 5.63666 11.6666 5.62925C13.125 5.62925 13.6645 5.54175 17.5 5.54175C21.3354 5.54175 21.875 5.54175 23.3333 5.62925C24.259 5.63987 25.1762 5.80752 26.0458 6.12508C26.7085 6.37103 27.3033 6.7709 27.7812 7.29175C28.2591 7.73972 28.6325 8.2874 28.875 8.89591C29.1991 9.78394 29.3668 10.7214 29.3708 11.6667C29.4437 13.1251 29.4583 13.6647 29.4583 17.5001C29.4583 21.3355 29.4437 21.8751 29.3708 23.3334ZM17.5 10.0188C16.0209 10.0217 14.5759 10.4629 13.3476 11.2867C12.1192 12.1105 11.1626 13.28 10.5986 14.6472C10.0346 16.0145 9.88851 17.5183 10.1788 18.9685C10.4691 20.4188 11.1828 21.7504 12.2297 22.7953C13.2765 23.8401 14.6096 24.5511 16.0604 24.8386C17.5112 25.1261 19.0147 24.9771 20.3809 24.4104C21.747 23.8438 22.9146 22.8849 23.736 21.6549C24.5574 20.425 24.9958 18.9791 24.9958 17.5001C24.9977 16.5159 24.805 15.541 24.4288 14.6315C24.0527 13.722 23.5004 12.8958 22.8037 12.2006C22.1071 11.5053 21.2799 10.9546 20.3697 10.5802C19.4594 10.2058 18.4842 10.015 17.5 10.0188ZM17.5 22.3563C16.5395 22.3563 15.6006 22.0715 14.802 21.5379C14.0034 21.0043 13.3809 20.2459 13.0134 19.3585C12.6458 18.4711 12.5496 17.4947 12.737 16.5527C12.9244 15.6107 13.3869 14.7454 14.0661 14.0662C14.7452 13.387 15.6105 12.9245 16.5526 12.7371C17.4946 12.5498 18.471 12.6459 19.3584 13.0135C20.2457 13.381 21.0042 14.0035 21.5378 14.8021C22.0714 15.6007 22.3562 16.5396 22.3562 17.5001C22.3562 18.1378 22.2306 18.7693 21.9865 19.3585C21.7425 19.9477 21.3848 20.483 20.9338 20.934C20.4829 21.3849 19.9476 21.7426 19.3584 21.9867C18.7692 22.2307 18.1377 22.3563 17.5 22.3563Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                )}
                                {isLoading ? (
                                    <div className="w-14 h-14 bg-gray-400 rounded-lg animate-pulse"></div>
                                ) : (
                                    <a
                                        href={
                                            data &&
                                            data[0] &&
                                            data[0].link_tiktok
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer hover:scale-110"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                        >
                                            <path
                                                d="M26.25 8.4375C24.7586 8.43595 23.3288 7.84282 22.2742 6.78826C21.2197 5.73371 20.6266 4.30387 20.625 2.8125C20.625 2.56386 20.5262 2.3254 20.3504 2.14959C20.1746 1.97377 19.9361 1.875 19.6875 1.875H15C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V18.2812C14.0623 18.7006 13.9496 19.1123 13.7361 19.4733C13.5226 19.8343 13.2161 20.1314 12.8487 20.3336C12.4813 20.5358 12.0663 20.6357 11.6471 20.6228C11.2279 20.61 10.8198 20.4849 10.4654 20.2607C10.111 20.0364 9.82331 19.7211 9.63227 19.3478C9.44124 18.9744 9.35388 18.5566 9.37931 18.138C9.40475 17.7194 9.54205 17.3153 9.77689 16.9678C10.0117 16.6203 10.3355 16.3422 10.7145 16.1625C10.8747 16.0864 11.0102 15.9664 11.105 15.8164C11.1998 15.6665 11.2501 15.4927 11.25 15.3152V10.3125C11.2501 10.1755 11.2201 10.0401 11.1622 9.91587C11.1042 9.79168 11.0198 9.68168 10.9148 9.59364C10.8098 9.50561 10.6867 9.44166 10.5543 9.40632C10.4219 9.37097 10.2834 9.36508 10.1484 9.38906C5.96602 10.1344 2.8125 13.957 2.8125 18.2812C2.8125 20.6433 3.75083 22.9087 5.42108 24.5789C7.09133 26.2492 9.35667 27.1875 11.7188 27.1875C14.0808 27.1875 16.3462 26.2492 18.0164 24.5789C19.6867 22.9087 20.625 20.6433 20.625 18.2812V13.6277C22.3613 14.5336 24.2916 15.0045 26.25 15C26.4986 15 26.7371 14.9012 26.9129 14.7254C27.0887 14.5496 27.1875 14.3111 27.1875 14.0625V9.375C27.1875 9.12636 27.0887 8.8879 26.9129 8.71209C26.7371 8.53627 26.4986 8.4375 26.25 8.4375ZM25.3125 13.0828C23.4804 12.9205 21.7262 12.2666 20.2348 11.1902C20.0946 11.0895 19.9293 11.0293 19.7571 11.0165C19.585 11.0037 19.4126 11.0387 19.259 11.1176C19.1055 11.1965 18.9767 11.3162 18.8869 11.4637C18.7971 11.6111 18.7497 11.7805 18.75 11.9531V18.2812C18.75 20.1461 18.0092 21.9345 16.6906 23.2531C15.372 24.5717 13.5836 25.3125 11.7188 25.3125C9.85395 25.3125 8.06552 24.5717 6.74691 23.2531C5.42829 21.9345 4.6875 20.1461 4.6875 18.2812C4.6875 15.2461 6.6375 12.5238 9.375 11.5313V14.7738C8.76896 15.1788 8.27818 15.7338 7.95047 16.3848C7.62276 17.0359 7.46931 17.7607 7.50508 18.4887C7.54085 19.2167 7.76462 19.923 8.15458 20.5387C8.54453 21.1545 9.08737 21.6587 9.73018 22.0023C10.373 22.3459 11.0939 22.517 11.8225 22.4991C12.5511 22.4812 13.2627 22.2748 13.8879 21.9C14.513 21.5253 15.0304 20.995 15.3896 20.3608C15.7488 19.7266 15.9376 19.0101 15.9375 18.2812V3.75H18.8086C19.0194 5.40127 19.7725 6.93583 20.9496 8.11293C22.1267 9.29003 23.6612 10.0431 25.3125 10.2539V13.0828Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                )}
                                {isLoading ? (
                                    <div className="w-14 h-14 bg-gray-400 rounded-lg animate-pulse"></div>
                                ) : (
                                    <a
                                        href={
                                            data &&
                                            data[0] &&
                                            data[0].link_shopee
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer hover:scale-110"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 50 50"
                                            fill="none"
                                        >
                                            <path
                                                d="M5.72922 13.5416V11.9791C5.51524 11.9791 5.30355 12.023 5.10725 12.1082C4.91096 12.1933 4.73424 12.3179 4.58807 12.4742C4.44189 12.6304 4.32937 12.815 4.25747 13.0166C4.18557 13.2181 4.15584 13.4323 4.1701 13.6458L5.72922 13.5416ZM44.2709 13.5416L45.83 13.6458C45.8443 13.4323 45.8145 13.2181 45.7426 13.0166C45.6707 12.815 45.5582 12.6304 45.412 12.4742C45.2659 12.3179 45.0891 12.1933 44.8928 12.1082C44.6965 12.023 44.4849 11.9791 44.2709 11.9791V13.5416ZM9.11229 40.7981L7.28833 13.4377L4.1701 13.6455L5.99432 41.0059L9.11229 40.7981ZM44.0058 41.0059L45.83 13.6455L42.7118 13.4377L40.8878 40.7981L44.0058 41.0059ZM40.8878 40.7981C40.8439 41.4573 40.551 42.0752 40.0685 42.5266C39.5861 42.978 38.9501 43.2291 38.2894 43.2291V46.3541C41.3055 46.3541 43.8053 44.0155 44.0058 41.0059L40.8878 40.7981ZM5.99432 41.0059C6.19484 44.0155 8.69458 46.3541 11.7105 46.3541V43.2291C11.0498 43.229 10.4139 42.9779 9.93147 42.5265C9.44905 42.0751 9.15622 41.4573 9.11229 40.7981L5.99432 41.0059ZM19.2709 12.4999C19.2709 9.33586 21.836 6.77075 25 6.77075V3.64575C20.1099 3.64575 16.1459 7.60981 16.1459 12.4999H19.2709ZM25 6.77075C28.1641 6.77075 30.7292 9.33586 30.7292 12.4999H33.8542C33.8542 7.60981 29.8902 3.64575 25 3.64575V6.77075ZM5.72922 15.1041H44.2709V11.9791H5.72922V15.1041ZM11.7107 46.3541H38.2891V43.2291H11.7107V46.3541Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M29.6875 21.875H22.9167C20.9032 21.875 19.2709 23.5073 19.2709 25.5208C19.2709 27.5344 20.9032 29.1667 22.9167 29.1667H23.9584M23.4375 29.1667H27.0834C29.0969 29.1667 30.7292 30.799 30.7292 32.8125C30.7292 34.826 29.0969 36.4583 27.0834 36.4583H20.3125"
                                                stroke="white"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </a>
                                )}
                                {isLoading ? (
                                    <div className="w-14 h-14 bg-gray-400 rounded-lg animate-pulse"></div>
                                ) : (
                                    <a
                                        href={
                                            data &&
                                            data[0] &&
                                            data[0].link_whatsapp
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer hover:scale-110"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                        >
                                            <path
                                                d="M27.7813 7.16034C26.4443 5.80982 24.8518 4.73902 23.0966 4.01042C21.3414 3.28181 19.4588 2.90997 17.5584 2.91659C9.59587 2.91659 3.10629 9.40617 3.10629 17.3687C3.10629 19.9208 3.77712 22.3999 5.03129 24.5874L2.98962 32.0833L10.6459 30.0708C12.7605 31.2228 15.1375 31.8353 17.5584 31.8353C25.5209 31.8353 32.0105 25.3458 32.0105 17.3833C32.0105 13.5187 30.5084 9.88742 27.7813 7.16034ZM17.5584 29.3853C15.4 29.3853 13.2855 28.802 11.4334 27.7083L10.9959 27.4458L6.44587 28.6416L7.65629 24.2083L7.36462 23.7562C6.1655 21.8413 5.52879 19.628 5.52712 17.3687C5.52712 10.7478 10.923 5.35201 17.5438 5.35201C20.7521 5.35201 23.7709 6.60617 26.0313 8.88117C27.1505 9.99529 28.0375 11.3205 28.6408 12.7799C29.2441 14.2394 29.5518 15.804 29.5459 17.3833C29.575 24.0041 24.1792 29.3853 17.5584 29.3853ZM24.15 20.402C23.7855 20.227 22.0063 19.352 21.6855 19.2208C21.35 19.1041 21.1167 19.0458 20.8688 19.3958C20.6209 19.7603 19.9355 20.577 19.7313 20.8103C19.5271 21.0583 19.3084 21.0874 18.9438 20.8978C18.5792 20.7228 17.4125 20.3291 16.0417 19.1041C14.9625 18.1416 14.248 16.9603 14.0292 16.5958C13.825 16.2312 14 16.0416 14.1896 15.852C14.35 15.6916 14.5542 15.4291 14.7292 15.2249C14.9042 15.0208 14.9771 14.8603 15.0938 14.627C15.2105 14.3791 15.1521 14.1749 15.0646 13.9999C14.9771 13.8249 14.248 12.0458 13.9563 11.3166C13.6646 10.6166 13.3584 10.7041 13.1396 10.6895H12.4396C12.1917 10.6895 11.8125 10.777 11.4771 11.1416C11.1563 11.5062 10.223 12.3812 10.223 14.1603C10.223 15.9395 11.5209 17.6603 11.6959 17.8937C11.8709 18.1416 14.248 21.7874 17.8646 23.3478C18.725 23.727 19.3959 23.9458 19.9209 24.1062C20.7813 24.3833 21.5688 24.3395 22.1959 24.252C22.8959 24.1499 24.3396 23.377 24.6313 22.5312C24.9375 21.6853 24.9375 20.9708 24.8355 20.8103C24.7334 20.6499 24.5146 20.577 24.15 20.402Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 z-10 justify-center items-center hidden md:flex">
                        {isLoading ? (
                            <div className="w-60 h-96 bg-gray-400 rounded-lg animate-pulse"></div>
                        ) : (
                            <img
                                src={data && data[0] && data[0].asset_img}
                                alt="asset"
                                width={20}
                                height={20}
                                className="w-60 lg:w-80"
                            />
                        )}
                    </div>
                    <div
                        className={`${
                            isLoading
                                ? "bg-gray-200"
                                : "bg-[#D2AC47] opacity-60 "
                        } absolute w-full h-full`}
                    ></div>
                </div>
                {data && data[0] && data[0].video_bg ? (
                    <video
                        src={data && data[0] && data[0].video_bg}
                        width="100%"
                        height="100%"
                        alt="videobg"
                        className="h-screen w-full object-cover z-10"
                        loop
                        autoPlay
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={data && data[0] && data[0].bg_img}
                        alt="wait..."
                        width="full"
                        height="full"
                        className="h-96 md:h-full w-full object-cover z-10"
                    />
                )}
            </section>
            <section className="mt-20 flex-wrap gap-8 justify-center px-10 hidden">
                <Card className="w-64 h-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Beaute
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            SS Shop
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            SS Skin
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Beaute
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className="w-64 h-96">
                    <div className="flex justify-end px-4 pt-4">
                        <Dropdown inline label="">
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Export Data
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Delete
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702286717/SSG/asset_catalog_1_zvrbmr.svg"
                            width="96"
                            className="mb-3 w-36 cursor-pointer hover:scale-110"
                        />
                        <h5 className="mb-1 text-xl font-medium font-roboto text-gray-900 dark:text-white">
                            Acne Serum
                        </h5>
                        <span className="text-sm font-roboto text-gray-500 dark:text-gray-400">
                            Level Up Style
                        </span>
                        <div
                            className="mt-4 flex space-x-3 lg:mt-6"
                            onClick={() => navigate("/product/search/catalog")}
                        >
                            <a
                                href="#"
                                className="inline-flex items-center rounded-lg bg-[#D2AC47] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#A2812B] focus:outline-none focus:ring-4"
                            >
                                See Details Product
                            </a>
                        </div>
                    </div>
                </Card>
            </section>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Brand;
