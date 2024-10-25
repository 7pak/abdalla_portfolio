import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="w-full bg-transparent text-gray-200 shadow-lg p-5 z-[9999]">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                {/* Contact Section */}
                <div className="w-full flex flex-row items-start justify-center gap-10 flex-wrap mb-5 z-[9999]">

                    {/* Social Links */}
                    <div className="min-w-[200px] flex flex-col gap-3 items-center z-[9999]">
                        <h3 className="font-bold text-lg">Contact Me</h3>
                        <a href="mailto:abdella.tawfig@gmail.com">abdella.tawfig@gmail.com</a>
                        <div className="flex gap-4 text-2xl">
                            <a href="https://github.com/your-profile" className="hover:text-gray-400"><RxGithubLogo /></a>
                            <a href="https://instagram.com/your-profile" className="hover:text-pink-500"><RxInstagramLogo /></a>
                            <a href="https://twitter.com/your-profile" className="hover:text-blue-400"><RxTwitterLogo /></a>
                            <a href="https://youtube.com/your-channel" className="hover:text-red-500"><FaYoutube /></a>
                            <a href="https://discord.com/invite/your-invite" className="hover:text-purple-500"><RxDiscordLogo /></a>
                            <a href="https://discord.com/invite/your-invite" className="hover:text-emerald-400"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-5 text-center text-sm">
                    &copy; Abdalla Portfolio {currentYear} Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
