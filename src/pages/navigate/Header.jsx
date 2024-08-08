import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="font-serif md:h-40 2xl:h-72 w-full">
                <div className="flex flex-col md:flex-row justify-between items-center xl:px-20 md:px-10 h-1/3 w-full bg-teal-500">
                    <div className="flex items-center gap-1 align-middle">
                        <img
                           className="w-3 h-3 sm:w-4 sm:h-4 md:w-8 md:h-6 2xl:w-10 2xl:h-10"
                            src="/image/home.png"
                            alt="flag"
                        />
                        <Link to="/home">
                            <p className="2xl:text-3xl lg:text-sm md:text-[10px] text-white">
                                Home
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end items-center text-sm text-white">
                        <div className="flex gap-2 mb-2 md:mb-0">
                            <img
                                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-10 2xl:h-10"
                                src="/image/call.png"
                                alt="phone"
                            />
                            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibold">
                                Call us 042 4455 1122
                            </p>
                        </div>
                        <div className="flex gap-2 mb-2 md:mb-0">
                            <img
                                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-10 2xl:h-10"
                                src="/image/location.png"
                                alt="mail"
                            />
                            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibold">
                                Email us: Healthhub@gmail.com
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <img
                                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-12 2xl:h-12"
                                src="/image/clock.png"
                                alt="clock"
                            />
                            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibold">
                                Working hours: 24/7 Hours
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center 2xl:px-12 xl:px-20 md:px-10 md:h-2/3 2xl:h-[75%] border-b bg-white">
                    <div className="2xl:w-60 md:w-32 w-24 mb-4 md:mb-0 md:mt-0 mt-3">
                        <Link to="/home">
                            <img
                                src="/image/apex.png"
                                alt="Apex"
                                className="w-full h-full object-contain "
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center h-full w-full justify-center md:justify-end gap-4 md:gap-6">
                        <Link to="/services">
                            <p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md font-bold underline text-sm lg:text-base 2xl:text-3xl">
                                Services
                            </p>
                        </Link>
                        <Link to="/about">
                            <p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md font-bold underline text-sm lg:text-base 2xl:text-3xl">
                                Location
                            </p>
                        </Link>
                        <Link to="/service">
                            <p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md font-bold underline text-sm lg:text-base 2xl:text-3xl">
                                Insurance
                            </p>
                        </Link>
                        <Link to="/about">
                            <p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md font-bold underline text-sm lg:text-base 2xl:text-3xl">
                                About
                            </p>
                        </Link>
                        <Link to="/pricing">
                            <p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md font-bold underline text-sm lg:text-base 2xl:text-3xl">
                                Contact
                            </p>
                        </Link>
                        <Link to="/appointment">
                            <button className="py-2 md:py-3 xl:py-5 w-full md:w-auto xl:w-52 lg:w-44 md:w-36 text-center xl:text-sm md:text-xs rounded-lg font-semibold text-white bg-teal-600 hover:bg-black">
                                Book an Appointment
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
