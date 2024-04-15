import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FAB from "../../components/FAB";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Spinner } from "flowbite-react";
import { postContact } from "../../store/action/contact";
import { useDispatch, useSelector } from "react-redux";

const imagekakshell = "/Asset1.webp";
const imagekakshell2 = "/Asset6.png";
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
const imagebeauty = "/Asset3.svg";
const imagefashion = "/Asset4.png";

const Home = () => {
    const navigate = useNavigate();
    const [isloading, setIsloading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const title = "Official Website SS Group";
    const description =
        "SS Group (Shella Saukia Group) merupakan perusahaan yang berperan sebagai payung bagi sejumlah merek terkemuka di Indonesia, termasuk SS Shop, SS Skin, Level Up Beaute, dan Level Up Style. Dengan fokus pada kecantikan, fashion, dan perawatan pribadi, kami menghadirkan rangkaian produk berkualitas tinggi yang menggabungkan inovasi terbaru dengan keahlian tradisional. Dari produk perawatan kulit hingga koleksi pakaian terkini, kami berkomitmen untuk menyediakan pengalaman belanja yang tak tertandingi bagi para pelanggan kami. Temukan kecantikan dan gaya yang sesuai dengan kepribadian Anda, dan jelajahi ragam pilihan kami untuk memenuhi segala kebutuhan fashion dan perawatan Anda dengan kenyamanan dan kepuasan yang tak tertandingi.";

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

        return () => {
            if (metaDescription) {
                metaDescription.remove();
            }
        };
    }, [title, description]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const scrollToDown = () => {
        window.scrollTo({
            top: 890,
            behavior: "smooth",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);

        try {
            const scriptURL =
                "https://script.google.com/macros/s/AKfycbzqiXJdplQTWGbCjI1uigYVkIzvFn4ZZifY58CRSKCY7kuLgtLv9Vd25m2lalEngtZO/exec";
            const formDataObj = new URLSearchParams();
            formDataObj.append("name", formData.name);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataObj,
            });

            const result = dispatch(postContact(formDataObj));
            await result;
            if (response.ok && result) {
                console.log("Berhasil!", response);
                toast.success("Message has been sent!");
                console.log(formDataObj);
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
                setIsloading(false);
            } else {
                console.error("Error!", response.statusText);
                toast.error("Failed to send message, try again");
                setIsloading(false);
            }
        } catch (error) {
            toast.error("Failed to send message, try again");
            console.error("Error!", error);
            setIsloading(false);
            console.log("this is data", result);
        }
    };

    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <FAB />
            <Toaster richColors />
            <section className="flex flex-col md:flex-row relative mt-28">
                <div
                    className="hidden flex-1 md:flex justify-end relative"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <img
                        src={imagekakshell}
                        alt="Imagekakshell"
                        width={550}
                        height={680.8}
                    />
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
                                happens
                            </h1>
                        </div>
                        <div className="mt-8 font-roboto text-[#A18E64] font-light">
                            <h1>
                                SS Group is a company consist of Indonesian
                                brands (SS Shop, SS Skin, Level Up Beaute, and
                                Level Up Style) engaged in beauty, fashion, and
                                personal care products. Find the beauty and
                                fashion you are looking for with us!
                            </h1>
                        </div>
                        <div className="flex mt-8 gap-6 md:gap-10 mb-28">
                            <div
                                className="w-[10rem] lg:w-[12rem] h-14 bg-[#D2AC47] text-white cursor-pointer rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#BA9021]"
                                onClick={() => scrollToDown()}
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
                        height={130}
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
                        height={130}
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
                        height={150}
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
                        height={150}
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
                        height={100}
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
                        height={100}
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
                        height={110}
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
                        height={110}
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
                                height={80}
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
                                height={80}
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
                                height={90}
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
                                height={90}
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
                <div className="" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="text-[#D2AC47] font-roboto text-3xl">
                        About Us
                    </h1>
                    <div className="w-80 md:w-[26rem] lg:w-[30rem]">
                        <p className="font-roboto font-light text-[#A18E64] md:mt-10 mt-6">
                            SS Group is a company consisting of Indonesian
                            brands (SS Shop, SS Skin, Level Up Beaute, and Level
                            Up Style) engaged in beauty, fashion, and personal
                            care products. Our company was established in 2019,
                            and two of our most sensational successes were in
                            2023, when we received two recognitions from Tiktok
                            Shop for Gross Merchandise Value: $1,000,000+
                            Achievement and Record-breaking Brand Collaboration
                            for Best Selling Spotless Whitening Package
                            Achievement across all FMCG.
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
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <img
                        src={imagekakshell2}
                        alt="imagekakshell2"
                        width={270}
                        height={270}
                        className="rounded-full"
                    />
                    <h1 className="font-roboto text-[#D2AC47] mt-4">
                        Shella Saukia
                    </h1>
                    <h1 className="font-roboto text-[#D2AC47] font-light">
                        Owner SS Group
                    </h1>
                </div>
            </section>
            <section className="flex flex-col-reverse md:flex-row justify-between items-center mt-40 md:px-10 lg:px-56">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <img src={imagebeauty} alt="imagebeauty" width={400} />
                </div>
                <div
                    className="w-80 md:w-[24rem] lg:w-[30rem]"
                    data-aos="fade-up"
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
            <section className="flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-32 md:px-10 lg:px-56 gap-10">
                <div
                    className="hidden lg:block"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <img src={imagefashion} alt="imagebeauty" width={300} />
                </div>
                <div
                    className="lg:hidden"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <img src={imagefashion} alt="imagebeauty" width={300} />
                </div>
                <div
                    className="w-80 md:w-[26rem] lg:w-[30rem]"
                    data-aos="fade-up"
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
                className="contactHome flex flex-col md:flex-row justify-between gap-6 md:gap-16 items-center mt-28 py-12 md:py-32 px-8 md:px-10 lg:px-56 bg-[#D2AC47]"
                id="contact"
            >
                <div
                    className="flex flex-col gap-2 mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            <h1 className="font-roboto text-white text-base font-light">
                                Get In Touch
                            </h1>
                            <div className="w-14 h-0.5 bg-white ms-16"></div>
                        </div>
                        <h1 className="text-white text-4xl font-medium mt-2">
                            Have Question ?
                        </h1>
                        <h1 className="text-white text-4xl font-medium">
                            Contact Us
                        </h1>
                        <h1 className="font-roboto text-white text-base font-light mt-2">
                            Thank you, we will contact you soon!
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <path
                                d="M13.7917 22.4792C16.7917 28.375 21.625 33.2083 27.5208 36.2083L32.1042 31.625C32.6875 31.0417 33.5 30.875 34.2292 31.1042C36.5625 31.875 39.0625 32.2917 41.6667 32.2917C42.2192 32.2917 42.7491 32.5112 43.1398 32.9019C43.5305 33.2926 43.75 33.8225 43.75 34.375V41.6667C43.75 42.2192 43.5305 42.7491 43.1398 43.1398C42.7491 43.5305 42.2192 43.75 41.6667 43.75C32.2736 43.75 23.2652 40.0186 16.6233 33.3767C9.98139 26.7348 6.25 17.7264 6.25 8.33333C6.25 7.7808 6.46949 7.25089 6.86019 6.86019C7.25089 6.46949 7.7808 6.25 8.33333 6.25H15.625C16.1775 6.25 16.7074 6.46949 17.0981 6.86019C17.4888 7.25089 17.7083 7.7808 17.7083 8.33333C17.7083 10.9375 18.125 13.4375 18.8958 15.7708C19.125 16.5 18.9583 17.3125 18.375 17.8958L13.7917 22.4792Z"
                                fill="white"
                            />
                        </svg>
                        <h1 className="font-roboto text-white text-base font-light">
                            +62-851-5600-5881
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <path
                                d="M9.67461 10H42.7996C45.9246 10 47.4996 11.475 47.4996 14.475V35.525C47.4996 38.5 45.9246 40 42.7996 40H9.67461C6.54961 40 4.97461 38.5 4.97461 35.525V14.475C4.97461 11.475 6.54961 10 9.67461 10ZM26.2246 31.5L43.0746 17.675C43.6746 17.175 44.1496 16.025 43.3996 15C42.6746 13.975 41.3496 13.95 40.4746 14.575L26.2246 24.225L11.9996 14.575C11.1246 13.95 9.79961 13.975 9.07461 15C8.32461 16.025 8.79961 17.175 9.39961 17.675L26.2246 31.5Z"
                                fill="white"
                            />
                        </svg>
                        <h1 className="font-roboto text-white text-base font-light">
                            info@ssgroup.id
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17.5"
                                height="20"
                                viewBox="0 0 44 50"
                                fill="none"
                            >
                                <path
                                    d="M41.9531 8.99422C42.4317 7.83211 42.1582 6.49422 41.2696 5.60555C40.3809 4.71688 39.043 4.44344 37.8809 4.92195L3.50588 18.9845C2.11916 19.5509 1.33791 21.0157 1.62112 22.4805C1.90432 23.9454 3.19338 25.0001 4.68752 25.0001H21.875V42.1876C21.875 43.6817 22.9297 44.961 24.3946 45.254C25.8594 45.547 27.3242 44.7559 27.8906 43.3692L41.9531 8.99422Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h1 className="font-roboto text-white text-base font-light W-full md:w-80 lg:w-96">
                            Jl. K.H. Wahid Hasyim No.161, RT.1/RW.5, Kb. Kacang,
                            Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah
                            Khusus Ibukota Jakarta 10240
                        </h1>
                    </div>
                </div>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="h-auto flex justify-center w-full items-center flex-col relative overflow-hidden font-roboto"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="border-b-2 border-b-white w-full">
                                <label
                                    htmlFor="name"
                                    className="font-light text-white"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border-none focus:border-none outline-none focus:outline-none w-full bg-transparent mb-2 font-light text-white placeholder:text-white placeholder:font-light px-2"
                                    required
                                />
                            </div>
                            <div className="border-b-2 border-b-white w-full">
                                <label
                                    htmlFor="email"
                                    className="font-light text-white"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border-none focus:border-none outline-none focus:outline-none w-full bg-transparent mb-2 font-light text-white placeholder:text-white placeholder:font-light px-2"
                                    required
                                />
                            </div>
                        </div>
                        <div className="border-b-2 border-b-white w-full mt-8">
                            <label
                                htmlFor="multilineInput"
                                className="font-light text-white"
                            >
                                Message
                            </label>
                            <textarea
                                id="multilineInput"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="border-none focus:border-none outline-none focus:outline-none w-full bg-transparent mb-2 font-light text-white placeholder:text-white placeholder:font-light"
                                required="required"
                            ></textarea>
                        </div>
                        {isloading ? (
                            <button
                                type="submit"
                                className={`w-full md:w-40 bg-white h-10 mt-8 rounded-md hover:border-2 ${
                                    isloading
                                        ? "bg-gray-300 hover:border-gray-300 hover:cursor-wait hover:bg-gray-300 hover:text-white text-white"
                                        : "hover:border-white hover:bg-transparent hover:text-white text-[#D2AC47]"
                                }`}
                                disabled={true}
                            >
                                <Spinner
                                    aria-label="Spinner button example"
                                    size="sm"
                                />
                                <span className="pl-3 text-[#D2AC47]">
                                    Sending...
                                </span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className={`w-full md:w-40 bg-white h-10 mt-8 rounded-md hover:border-2 ${
                                    isloading
                                        ? "bg-gray-300 hover:border-gray-300 hover:bg-gray-300 hover:text-white text-white"
                                        : "hover:border-white hover:bg-transparent hover:text-white text-[#D2AC47]"
                                }`}
                            >
                                Send
                            </button>
                        )}
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
