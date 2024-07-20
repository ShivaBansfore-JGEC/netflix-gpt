import React from "react";

interface VideoTitleProps {
    title: string;
    overview: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video absolute pt-[20%] px-12 text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/2">{overview}</p>
            <div>
                <button className="bg-white text-black text-xl p-4 px-10 rounded-lg hover:bg-opacity-90">
                    Play
                </button>
                <button className="mx-2 bg-gray-500 text-white text-xl p-4 px-10 rounded-lg bg-opacity-50">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;

