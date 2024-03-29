import React, { useState, useEffect } from "react";
import {
    InfoCircleOutlined,
    UserOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    LockOutlined,
} from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { Spinner } from "flowbite-react";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/action/auth";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.auth);
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (isError) {
            toast.error(isError);
        }
    }, [isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(inputData, navigate));
    };

    const onChange = (e) => {
        setInputData((prevInputData) => ({
            ...prevInputData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Toaster richColors />
            <section className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col  gap-4 justify-center items-center -mt-20">
                    <svg
                        width="40"
                        height="50"
                        viewBox="0 0 142 231"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.5993 217.099C27.0103 217.099 34.6393 209.47 34.6393 200.059C34.6393 190.648 27.0103 183.019 17.5993 183.019C8.18839 183.019 0.559326 190.648 0.559326 200.059C0.559326 209.47 8.18839 217.099 17.5993 217.099Z"
                            fill="#D2AC47"
                        />
                        <path
                            d="M66.0993 118.299C54.6693 111.299 45.9293 106.319 39.7293 101.379C4.81933 73.5891 18.4193 39.3992 18.4193 39.3992C0.569332 52.7792 -4.48067 79.3392 4.02933 99.1092C12.6693 119.169 34.8193 131.339 52.2993 142.659C62.2293 149.089 75.6393 155.539 83.8093 164.399C95.6493 177.239 98.8393 195.399 89.9493 210.139C79.4093 227.589 58.7393 232.089 39.7693 223.919C39.7693 223.919 70.3293 239.359 97.5193 222.739C97.5193 222.739 116.269 211.249 117.429 183.969C118.579 156.679 100.089 139.109 66.0993 118.299Z"
                            fill="#D2AC47"
                        />
                        <path
                            d="M89.0093 87.6491C76.2593 79.8391 61.8693 72.6491 51.9993 60.9291C41.8093 48.8091 39.5893 30.7491 49.7793 17.7991C56.3793 9.41911 66.9093 5.2191 77.4493 5.5691C98.4893 6.2591 122.069 20.8291 123.229 58.9791H129.719V2.32911C129.719 2.32911 124.729 2.32911 124.689 2.32911C124.689 2.32911 123.799 6.1891 123.719 6.5091C123.259 8.4991 122.739 10.9891 121.219 12.4591C119.499 14.1191 116.879 14.2291 114.679 13.6591C105.889 11.3491 95.7193 -6.22089 58.4993 2.32911C28.9393 9.11911 18.2693 42.5891 27.9293 68.9891C39.4493 100.459 75.8793 108.039 98.9593 128.339C135.259 158.599 124.209 190.889 124.209 190.899C127.819 187.919 130.739 184.079 133.319 180.199C136.829 174.909 139.959 168.969 141.089 162.689C147.539 126.859 115.609 103.929 89.0093 87.6491Z"
                            fill="#D2AC47"
                        />
                    </svg>
                    <h1 className="font-roboto text-lg">Login</h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-64 md:w-96 justify-center items-center"
                    >
                        <Input
                            name="email"
                            value={inputData.email}
                            onChange={onChange}
                            placeholder="Enter your Email"
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            suffix={
                                <Tooltip title="For Employee">
                                    <InfoCircleOutlined
                                        style={{
                                            color: "rgba(0,0,0,.45)",
                                        }}
                                    />
                                </Tooltip>
                            }
                            required={true}
                        />
                        <Input.Password
                            name="password"
                            value={inputData.password}
                            onChange={onChange}
                            placeholder=" Input password"
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            required={true}
                        />
                        <button
                            type="submit"
                            className={`w-32 h-8 rounded-md bg-[#D2AC47] font-roboto text-white text-sm hover:bg-white hover:text-[#D2AC47] border-2 border-[#D2AC47] active:bg-[#BA9021] active:text-white active:border-[#BA9021]`}
                        >
                            {isLoading ? <Spinner size="sm" /> : "Log in"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
