import React from "react";

export default function Hero() {
    return (
        <div className="flex justify-center items-center w-screen mt-2.5 pt-25">
            <div className="grid mt-10 grid-cols-3 grid-rows-3 gap-4">
                <div className="grid mt-5 grid-cols-2 grid-row-2 gap-4">
                    <div className="text-white">box1</div>
                    <div className="text-white">box2</div>
                    <div className="text-white">box3</div>
                    <div className="text-white">box4</div>
                </div>
            </div>
        </div>
    )
}