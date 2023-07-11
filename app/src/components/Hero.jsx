import React from "react";

export default function Hero() {
    return (
        <div className="flex justify-center items-center w-screen h-screen mt-2.5">
            <div className="bg-gray-200 border border-gray-950 w-11/12 h-4/6 md:w-9/12 md:h-5/6 overflow-y-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-2 font-anton text-shadow-md-red text-9xl ml-16 mt-10">Just another Software Dev</div>
                    <div className="col-span-1"></div>
                </div>
            </div>
        </div>
    )
}