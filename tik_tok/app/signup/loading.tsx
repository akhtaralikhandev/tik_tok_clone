"use client";
import { Rings } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Rings
                height="80"
                width="80"
                color="#4fa94d"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    );
};
export default Loading;
