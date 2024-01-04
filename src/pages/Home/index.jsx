import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const imagekakshell = "/Asset1.png";
const imagekakshell2 =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700195072/SSG/kakshell2_jdgaik.png";
const imagessskin =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSKIN_nnzc1p.svg";
const imagessshop =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700136421/SSG/SSSHOP_w8okrk.svg";
const imagelevelup =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703038769/SSG/LEVELUPstyle_qthn1c.svg";
const imagessskingold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSKINGOLD_kseonm.png";
const imagessshopgold =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700137959/SSG/SSSHOPGOLD_zuncts.png";
const imagelevelupblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703038889/SSG/LEVELUPstyleblack_y8xvvt.svg";
const imagelevelupbeaute =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703040124/SSG/LEVELUPbeaute_dtcal7.svg";
const imagelevelupbeauteblack =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1703040140/SSG/LEVELUPbeauteblack_txkvty.svg";
const imagebeauty =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700207915/SSG/Acne_series_1_lwltcw.png";
const imagefashion =
    "https://res.cloudinary.com/dixxtnquz/image/upload/v1700209264/SSG/kakshell3_dfmlx3.png";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="flex flex-col md:flex-row relative mt-28">
                <div
                    className="hidden flex-1 md:flex justify-end relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <img src={imagekakshell} alt="Imagekakshell" width={600} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="150"
                        zoomAndPan="magnify"
                        viewBox="0 0 810 809.999993"
                        height="150"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                        className="md:block absolute lg:me-12 md:me-2 -z-10"
                    >
                        <path
                            fill="#fff8eb"
                            d="M 368.402344 2.464844 C 431.296875 3.609375 489.621094 57.355469 495.339844 119.109375 C 502.199219 177.429688 470.179688 243.757812 504.488281 291.785156 C 527.359375 322.664062 569.671875 331.8125 607.40625 332.957031 C 646.289062 334.097656 685.171875 330.667969 720.621094 345.535156 C 758.359375 361.542969 785.804688 398.136719 794.953125 439.308594 C 804.101562 479.332031 794.953125 522.789062 776.65625 559.382812 C 746.921875 616.558594 692.03125 658.871094 629.136719 673.738281 C 566.238281 688.605469 497.625 673.738281 446.164062 636 C 408.425781 608.554688 378.695312 568.53125 335.238281 552.519531 C 286.066406 534.222656 232.316406 550.234375 179.714844 557.09375 C 127.109375 563.957031 65.355469 554.808594 40.199219 509.066406 C 12.753906 457.605469 51.632812 394.707031 96.234375 356.96875 C 173.996094 290.644531 215.164062 257.480469 223.167969 152.269531 C 230.03125 75.652344 284.921875 0.175781 368.402344 2.464844 Z M 657.726562 233.464844 C 712.617188 214.023438 685.171875 131.6875 629.136719 149.984375 C 571.957031 168.28125 601.691406 252.90625 657.726562 233.464844 Z M 125.964844 790.382812 C 180.855469 770.941406 153.410156 688.605469 97.375 706.902344 C 41.339844 725.199219 69.929688 809.824219 125.964844 790.382812 Z M 125.964844 790.382812 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                        <path
                            fill="#d2ac47"
                            d="M 416.433594 744.640625 C 329.519531 744.640625 250.613281 687.460938 230.03125 610.84375 C 226.601562 595.976562 224.3125 579.964844 222.023438 565.101562 C 217.449219 529.648438 214.019531 496.484375 188.863281 475.902344 C 168.277344 458.746094 141.976562 456.460938 113.386719 454.171875 C 103.09375 453.03125 92.800781 451.886719 82.511719 450.742188 C 53.921875 446.167969 27.617188 429.015625 15.039062 408.429688 C 7.035156 395.851562 5.890625 382.128906 11.609375 368.40625 C 12.753906 364.976562 16.183594 363.832031 18.46875 364.976562 C 21.902344 366.117188 23.042969 369.550781 21.902344 371.835938 C 18.46875 382.128906 19.613281 392.421875 25.332031 401.570312 C 35.625 419.867188 59.636719 434.734375 83.652344 438.164062 C 93.945312 439.308594 104.238281 440.449219 113.386719 441.59375 C 143.121094 443.882812 172.851562 447.3125 195.722656 465.609375 C 223.167969 489.625 227.742188 526.21875 232.316406 561.667969 C 234.605469 576.535156 235.75 592.546875 239.179688 606.269531 C 257.476562 679.457031 335.238281 733.203125 417.574219 730.917969 C 490.765625 729.773438 566.238281 687.460938 618.84375 619.992188 C 655.4375 573.105469 677.164062 501.058594 640.570312 456.460938 C 616.554688 426.726562 577.675781 419.867188 536.507812 411.863281 C 496.480469 403.855469 454.167969 395.851562 426.722656 364.976562 C 398.136719 332.957031 395.847656 289.5 393.5625 247.1875 C 391.273438 209.449219 390.128906 170.570312 368.402344 141.980469 C 332.953125 91.664062 255.1875 91.664062 204.871094 123.683594 C 151.125 157.988281 120.246094 218.597656 97.375 273.488281 C 96.234375 276.921875 92.800781 278.0625 89.371094 276.921875 C 85.941406 275.777344 84.796875 272.347656 85.941406 268.914062 C 108.8125 212.878906 140.832031 149.984375 196.867188 113.390625 C 251.757812 79.082031 336.382812 79.082031 376.40625 133.972656 C 399.277344 165.996094 401.566406 206.019531 402.710938 246.042969 C 404.996094 288.355469 407.285156 328.382812 432.441406 356.96875 C 457.601562 384.414062 495.339844 392.421875 535.363281 400.425781 C 576.53125 408.429688 618.84375 416.4375 646.289062 449.597656 C 687.457031 499.917969 665.730469 575.390625 624.5625 627.996094 C 569.671875 698.898438 491.90625 742.351562 414.144531 743.496094 C 418.71875 744.640625 417.574219 744.640625 416.433594 744.640625 Z M 703.46875 239.183594 C 734.34375 228.890625 742.347656 199.15625 734.34375 176.285156 C 727.484375 153.414062 704.609375 133.972656 672.589844 144.265625 C 654.292969 149.984375 641.714844 162.5625 638.285156 180.859375 C 634.855469 199.15625 641.714844 218.597656 655.4375 231.175781 C 664.585938 239.183594 674.878906 242.613281 686.3125 242.613281 C 692.03125 241.46875 697.75 241.46875 703.46875 239.183594 Z M 724.050781 178.574219 C 729.769531 195.726562 725.195312 218.597656 700.035156 227.746094 C 686.3125 232.320312 672.589844 230.035156 662.300781 222.027344 C 652.007812 212.878906 646.289062 196.871094 648.578125 183.148438 C 650.863281 170.570312 661.15625 160.277344 674.878906 155.703125 C 679.453125 154.558594 684.027344 153.414062 688.601562 153.414062 C 706.898438 153.414062 719.476562 164.851562 724.050781 178.574219 Z M 172.851562 796.101562 C 203.726562 785.808594 211.734375 756.074219 203.726562 733.203125 C 195.722656 711.476562 173.996094 692.035156 140.832031 702.328125 C 122.535156 708.046875 109.957031 720.625 106.523438 738.921875 C 103.09375 757.21875 109.957031 776.660156 123.679688 789.238281 C 132.828125 797.242188 143.121094 800.675781 154.554688 800.675781 C 160.273438 798.386719 165.992188 797.242188 172.851562 796.101562 Z M 192.292969 735.492188 C 198.011719 752.644531 193.4375 775.515625 168.277344 784.664062 C 154.554688 789.238281 140.832031 786.953125 130.539062 778.945312 C 120.246094 769.796875 114.53125 753.789062 116.816406 740.066406 C 119.105469 727.488281 129.394531 717.195312 143.121094 712.621094 C 147.695312 711.476562 152.269531 710.332031 156.84375 710.332031 C 176.28125 709.1875 187.71875 721.769531 192.292969 735.492188 Z M 192.292969 735.492188 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </svg>
                </div>
                <div
                    className="flex-1 flex md:hidden flex-col items-center relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100"
                        zoomAndPan="magnify"
                        viewBox="0 0 810 809.999993"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.0"
                        className="md:block absolute right-0 me-12 -z-10"
                    >
                        <path
                            fill="#fff8eb"
                            d="M 368.402344 2.464844 C 431.296875 3.609375 489.621094 57.355469 495.339844 119.109375 C 502.199219 177.429688 470.179688 243.757812 504.488281 291.785156 C 527.359375 322.664062 569.671875 331.8125 607.40625 332.957031 C 646.289062 334.097656 685.171875 330.667969 720.621094 345.535156 C 758.359375 361.542969 785.804688 398.136719 794.953125 439.308594 C 804.101562 479.332031 794.953125 522.789062 776.65625 559.382812 C 746.921875 616.558594 692.03125 658.871094 629.136719 673.738281 C 566.238281 688.605469 497.625 673.738281 446.164062 636 C 408.425781 608.554688 378.695312 568.53125 335.238281 552.519531 C 286.066406 534.222656 232.316406 550.234375 179.714844 557.09375 C 127.109375 563.957031 65.355469 554.808594 40.199219 509.066406 C 12.753906 457.605469 51.632812 394.707031 96.234375 356.96875 C 173.996094 290.644531 215.164062 257.480469 223.167969 152.269531 C 230.03125 75.652344 284.921875 0.175781 368.402344 2.464844 Z M 657.726562 233.464844 C 712.617188 214.023438 685.171875 131.6875 629.136719 149.984375 C 571.957031 168.28125 601.691406 252.90625 657.726562 233.464844 Z M 125.964844 790.382812 C 180.855469 770.941406 153.410156 688.605469 97.375 706.902344 C 41.339844 725.199219 69.929688 809.824219 125.964844 790.382812 Z M 125.964844 790.382812 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                        <path
                            fill="#d2ac47"
                            d="M 416.433594 744.640625 C 329.519531 744.640625 250.613281 687.460938 230.03125 610.84375 C 226.601562 595.976562 224.3125 579.964844 222.023438 565.101562 C 217.449219 529.648438 214.019531 496.484375 188.863281 475.902344 C 168.277344 458.746094 141.976562 456.460938 113.386719 454.171875 C 103.09375 453.03125 92.800781 451.886719 82.511719 450.742188 C 53.921875 446.167969 27.617188 429.015625 15.039062 408.429688 C 7.035156 395.851562 5.890625 382.128906 11.609375 368.40625 C 12.753906 364.976562 16.183594 363.832031 18.46875 364.976562 C 21.902344 366.117188 23.042969 369.550781 21.902344 371.835938 C 18.46875 382.128906 19.613281 392.421875 25.332031 401.570312 C 35.625 419.867188 59.636719 434.734375 83.652344 438.164062 C 93.945312 439.308594 104.238281 440.449219 113.386719 441.59375 C 143.121094 443.882812 172.851562 447.3125 195.722656 465.609375 C 223.167969 489.625 227.742188 526.21875 232.316406 561.667969 C 234.605469 576.535156 235.75 592.546875 239.179688 606.269531 C 257.476562 679.457031 335.238281 733.203125 417.574219 730.917969 C 490.765625 729.773438 566.238281 687.460938 618.84375 619.992188 C 655.4375 573.105469 677.164062 501.058594 640.570312 456.460938 C 616.554688 426.726562 577.675781 419.867188 536.507812 411.863281 C 496.480469 403.855469 454.167969 395.851562 426.722656 364.976562 C 398.136719 332.957031 395.847656 289.5 393.5625 247.1875 C 391.273438 209.449219 390.128906 170.570312 368.402344 141.980469 C 332.953125 91.664062 255.1875 91.664062 204.871094 123.683594 C 151.125 157.988281 120.246094 218.597656 97.375 273.488281 C 96.234375 276.921875 92.800781 278.0625 89.371094 276.921875 C 85.941406 275.777344 84.796875 272.347656 85.941406 268.914062 C 108.8125 212.878906 140.832031 149.984375 196.867188 113.390625 C 251.757812 79.082031 336.382812 79.082031 376.40625 133.972656 C 399.277344 165.996094 401.566406 206.019531 402.710938 246.042969 C 404.996094 288.355469 407.285156 328.382812 432.441406 356.96875 C 457.601562 384.414062 495.339844 392.421875 535.363281 400.425781 C 576.53125 408.429688 618.84375 416.4375 646.289062 449.597656 C 687.457031 499.917969 665.730469 575.390625 624.5625 627.996094 C 569.671875 698.898438 491.90625 742.351562 414.144531 743.496094 C 418.71875 744.640625 417.574219 744.640625 416.433594 744.640625 Z M 703.46875 239.183594 C 734.34375 228.890625 742.347656 199.15625 734.34375 176.285156 C 727.484375 153.414062 704.609375 133.972656 672.589844 144.265625 C 654.292969 149.984375 641.714844 162.5625 638.285156 180.859375 C 634.855469 199.15625 641.714844 218.597656 655.4375 231.175781 C 664.585938 239.183594 674.878906 242.613281 686.3125 242.613281 C 692.03125 241.46875 697.75 241.46875 703.46875 239.183594 Z M 724.050781 178.574219 C 729.769531 195.726562 725.195312 218.597656 700.035156 227.746094 C 686.3125 232.320312 672.589844 230.035156 662.300781 222.027344 C 652.007812 212.878906 646.289062 196.871094 648.578125 183.148438 C 650.863281 170.570312 661.15625 160.277344 674.878906 155.703125 C 679.453125 154.558594 684.027344 153.414062 688.601562 153.414062 C 706.898438 153.414062 719.476562 164.851562 724.050781 178.574219 Z M 172.851562 796.101562 C 203.726562 785.808594 211.734375 756.074219 203.726562 733.203125 C 195.722656 711.476562 173.996094 692.035156 140.832031 702.328125 C 122.535156 708.046875 109.957031 720.625 106.523438 738.921875 C 103.09375 757.21875 109.957031 776.660156 123.679688 789.238281 C 132.828125 797.242188 143.121094 800.675781 154.554688 800.675781 C 160.273438 798.386719 165.992188 797.242188 172.851562 796.101562 Z M 192.292969 735.492188 C 198.011719 752.644531 193.4375 775.515625 168.277344 784.664062 C 154.554688 789.238281 140.832031 786.953125 130.539062 778.945312 C 120.246094 769.796875 114.53125 753.789062 116.816406 740.066406 C 119.105469 727.488281 129.394531 717.195312 143.121094 712.621094 C 147.695312 711.476562 152.269531 710.332031 156.84375 710.332031 C 176.28125 709.1875 187.71875 721.769531 192.292969 735.492188 Z M 192.292969 735.492188 "
                            fillOpacity="1"
                            fillRule="nonzero"
                        />
                    </svg>
                </div>
                <div
                    className="flex-1 flex justify-center items-center z-10 relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
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
                            <div
                                className="w-[10rem] lg:w-[12rem] h-14 bg-[#D2AC47] text-white cursor-pointer rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#d2ad47b0]"
                                onClick={() => navigate("/product")}
                            >
                                <h1 className="font-roboto">Get Started</h1>
                            </div>
                            <div
                                className="w-[10rem] lg:w-[12rem] h-14 bg-white border-2 border-[#D2AC47] text-[#D2AC47] cursor-pointer rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#fff8ea]"
                                onClick={() => navigate("/about")}
                            >
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
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0L34.8 19.75C68.4 39.5 136.8 79 205.2 98.75C274.8 118.5 343.2 118.5 411.6 92.1667C480 65.8333 548.4 13.1667 616.8 6.58333C685.2 0 754.8 39.5 823.2 65.8333C891.6 92.1667 960 105.333 1028.4 125.083C1096.8 144.833 1165.2 171.167 1234.8 171.167C1303.2 171.167 1371.6 144.833 1405.2 131.667L1440 118.5V237H1405.2C1371.6 237 1303.2 237 1234.8 237C1165.2 237 1096.8 237 1028.4 237C960 237 891.6 237 823.2 237C754.8 237 685.2 237 616.8 237C548.4 237 480 237 411.6 237C343.2 237 274.8 237 205.2 237C136.8 237 68.4 237 34.8 237H0V0Z"
                        fill="white"
                    />
                </svg>
            </section>
            <section className="flex flex-col justify-center items-center">
                <h1
                    className="text-[#D2AC47] font-roboto mt-28 text-2xl md:text-3xl mb-8 md:mb-14"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Our Brand
                </h1>
                <div className="flex items-center gap-4 md:gap-24 lg:gap-36">
                    <img
                        src={imagessskin}
                        alt="imagesskin"
                        width={130}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagessskingold)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = imagessskin)}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        onClick={() =>
                            navigate(
                                "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        onClick={() =>
                            navigate(
                                "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        onClick={() =>
                            navigate(
                                "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                            )
                        }
                    />
                    <img
                        src={imagelevelupbeaute}
                        alt="imagelevelup"
                        width={150}
                        className="cursor-pointer hidden lg:block"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupbeauteblack)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src = imagelevelupbeaute)
                        }
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        onClick={() =>
                            navigate(
                                "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="800"
                        onClick={() =>
                            navigate(
                                "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        onClick={() =>
                            navigate(
                                "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                            )
                        }
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
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        onClick={() =>
                            navigate(
                                "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                            )
                        }
                    />
                    <img
                        src={imagelevelupbeaute}
                        alt="imagesskin"
                        width={110}
                        className="cursor-pointer hidden md:block lg:hidden"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = imagelevelupbeauteblack)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src = imagelevelupbeaute)
                        }
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        onClick={() =>
                            navigate(
                                "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                            )
                        }
                    />
                    <div className="md:hidden flex flex-col gap-20">
                        <div className="flex gap-20">
                            <img
                                src={imagessskin}
                                alt="imagesskin"
                                width={80}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagessskingold)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagessskin)
                                }
                                data-aos="fade-up"
                                data-aos-duration="800"
                                onClick={() =>
                                    navigate(
                                        "/brand/764958cf-f49a-469a-b0f1-a23cfbd37867"
                                    )
                                }
                            />
                            <img
                                src={imagessshop}
                                alt="imagesskin"
                                width={80}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagessshopgold)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagessshop)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                onClick={() =>
                                    navigate(
                                        "/brand/79d0067b-cc98-4c6a-a17b-9d1baabc0793"
                                    )
                                }
                            />
                        </div>
                        <div className="flex gap-16">
                            <img
                                src={imagelevelup}
                                alt="imagesskin"
                                width={90}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src = imagelevelupblack)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagelevelup)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                onClick={() =>
                                    navigate(
                                        "/brand/9754fe2a-99cc-4fe1-8480-e698e0b46bb1"
                                    )
                                }
                            />
                            <img
                                src={imagelevelupbeaute}
                                alt="imagesskin"
                                width={90}
                                className="cursor-pointer block md:hidden"
                                onMouseOver={(e) =>
                                    (e.currentTarget.src =
                                        imagelevelupbeauteblack)
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.src = imagelevelupbeaute)
                                }
                                data-aos="fade-up"
                                data-aos-duration="1400"
                                onClick={() =>
                                    navigate(
                                        "/brand/0071599e-e419-4577-a466-b7e7c777c4a5"
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col-reverse md:flex-row justify-between items-center mt-48 lg:px-56 gap-10 md:px-12">
                <div
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
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
                    <div
                        className="bg-[#D2AC47] w-48 flex justify-center items-center h-12 rounded-md mt-8 hover:bg-[#d2ad47b0] cursor-pointer"
                        onClick={() => navigate("/about")}
                    >
                        <h1 className="font-roboto font-light text-white">
                            More About SS Group
                        </h1>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
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
            </section>
            <section className="flex flex-col-reverse md:flex-row justify-between items-center mt-48 md:px-10 lg:px-56">
                <div data-aos="fade-right" data-aos-duration="1500">
                    <img src={imagebeauty} alt="imagebeauty" width={400} />
                </div>
                <div
                    className="w-80 md:w-[24rem] lg:w-[30rem]"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
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
            </section>
            <section className="flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-48 md:px-10 lg:px-56 gap-10">
                <div
                    className="hidden lg:block"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <img src={imagefashion} alt="imagebeauty" width={350} />
                </div>
                <div
                    className="lg:hidden"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <img src={imagefashion} alt="imagebeauty" width={300} />
                </div>
                <div
                    className="w-80 md:w-[26rem] lg:w-[30rem]"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        Trendy Fashion
                    </h1>
                    <p className="font-roboto font-light text-[#A18E64] mt-6 md:mt-10">
                        SS Group is a company that not only operates in the
                        cosmetics and beauty industry but also expands its reach
                        into the contemporary and trendy world of fashion. With
                        the same innovative spirit, SS Group creates a
                        harmonious blend of beauty and style in its products.
                    </p>
                </div>
            </section>
            <section
                className="contactHome flex justify-center items-center mt-48"
                id="contact"
            >
                <form className="w-full h-auto flex justify-center items-center flex-col pb-12 relative overflow-hidden px-20">
                    <h1
                        className="text-[#D2AC47] font-roboto text-3xl my-16"
                        data-aos="flip-up"
                        data-aos-duration="1500"
                    >
                        Get In Touch
                    </h1>
                    <div className="flex flex-col items-center">
                        <input
                            className="w-64 md:w-[30rem] lg:w-[50rem] bg-[#FFF8EB] h-10 focus:border-2 focus:border-[#D2AC47] focus:shadow-md rounded-md px-4 border-none"
                            placeholder="Email"
                            required
                            data-aos="flip-up"
                            data-aos-duration="2000"
                        />
                        <textarea
                            name="desc"
                            id="desc"
                            cols="30"
                            rows="8"
                            className="rounded-md p-4 border-none bg-[#FFF8EB] focus:outline-none focus:shadow-lg focus:border-2 mt-4 w-64 md:w-[30rem] lg:w-[50rem] z-10"
                            placeholder="Message"
                            required="required"
                            data-aos="flip-up"
                            data-aos-duration="2400"
                        ></textarea>
                        <button
                            type="submit"
                            className="border-white bg-[#D2AC47] z-10 border-2 w-64 md:w-[30rem] lg:w-[50rem] rounded-md h-10 mt-4 flex justify-center items-center cursor-pointer hover:bg-white text-white hover:border-2 hover:border-[#D2AC47] hover:text-[#D2AC47]"
                            data-aos="flip-up"
                            data-aos-duration="2800"
                        >
                            <h1 className="font-roboto">Send</h1>
                        </button>
                    </div>
                </form>
                <div></div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
