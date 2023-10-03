'use client';

import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container py-24 mx-auto text-white">
                <div className="mb-10 md:flex md:justify-between">
                    <div>
                        <h2 className="mb-10 text-4xl font-bold uppercase">Site Logo</h2>
                        <p className="max-w-xs mb-6 text-lg font-thin">
                            Some footer text about the Agency. Just a little description to help people understand you
                            better
                        </p>
                        <div className="flex gap-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand">
                                {' '}
                                <FaFacebookF />{' '}
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand">
                                {' '}
                                <FaXTwitter />{' '}
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand">
                                {' '}
                                <FaLinkedinIn />{' '}
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand">
                                {' '}
                                <FaInstagram />{' '}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-xl font-semibold">Quick Links</p>
                        <ul className="flex flex-col gap-3">
                            <li className="text-lg font-thin">Services</li>
                            <li className="text-lg font-thin">Portfolio</li>
                            <li className="text-lg font-thin">About Us </li>
                            <li className="text-lg font-thin">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-xl font-semibold">Address</p>
                        <p className="max-w-xs text-lg font-thin">
                            Design Agency Head Office. Airport Road United Arab Emirate
                        </p>
                    </div>
                </div>
                <div className="text-lg">© Copyright Design Agency 2022</div>
            </div>
        </footer>
    );
};
export default Footer;
