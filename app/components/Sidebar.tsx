
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Гамбургер кнопка */}
            <button
                className="fixed top-4 left-4 z-50 flex flex-col justify-between w-8 h-6 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
        <span
            className={`block h-1 w-full bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
        ></span>
                <span
                    className={`block h-1 w-full bg-white transition-opacity duration-300 ${
                        isOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`block h-1 w-full bg-white transition-transform duration-300 ${
                        isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                ></span>
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-80 text-white p-6 flex flex-col transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
            >
                <div className="pt-16 md:pt-0">
                    <h2 className="text-2xl font-bold mb-4">Меню</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-yellow-400 cursor-pointer">
                                Головна
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-yellow-400 cursor-pointer">
                                Про нас
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-400 cursor-pointer">
                                Контакти
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}