import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-evenly items-center pt-20">
            <img
                src="/image/Logo.png"
                alt="logo"
                className="h-[30rem] object-contain"
            />
            <div className="flex flex-col justify-center items-center animate-pulse">
                <p className="uppercase">scroll down</p>
                <BsChevronDoubleDown className="text-2xl lg:text-6xl  text-white " />
            </div>
        </div>
    );
};

export default Home;
