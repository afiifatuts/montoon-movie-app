import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import ReactPlayer from "react-player";

export default function Show({movie}) {
    return (
        <>
            <Head title="Show Movie"/>
            <section
                className="mx-auto w-screen h-screen  watching-page font-poppins bg-form-bg"
                id="stream"
            >
               <div className="pt-[100px]">
               <ReactPlayer
                url="https://www.youtube.com/watch?v=mqqft2x_Aa4&pp=ygUSdGhlIGJhdG1hbiB0cmFpbGVy"
                // url={movie.vidio_url}
                controls
                width={"100%"}
                height={"850px"}
                />
               </div>
                {/* <video-js
                    id="stream-video"
                    className="overflow-hidden h-screen w-screen"
                >
                    <source
                        src="https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4"
                        type="video/mp4"
                    />
                    <p className="vjs-no-js text-twmdark">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a
                            href="https://videojs.com/html5-video-support/"
                            target="_blank"
                        >
                            supports HTML5 video
                        </a>
                    </p>
                </video-js> */}

                <div className="absolute top-5 left-5 z-20">
                    <Link href={route('dashboard')}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        {movie.name}
                    </span>
                </div>
            </section>
        </>
    );
}
