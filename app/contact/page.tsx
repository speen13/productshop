
"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Contacts() {
    const [imageLoaded, setImageLoaded] = useState(false);

    // имитация загрузки фона (для плавного появления)
    useEffect(() => {
        const timer = setTimeout(() => setImageLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
            {/* Фоновая картинка через div для корректного деплоя */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: "url('/pexels-gravitycut-11631581.jpg')" }}
            />

            {/* Sidebar */}
            <Sidebar />

            {/* Основной контент */}
            <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 text-center">
                <h1
                    className={`${poppins.className} text-white text-4xl font-bold mb-6 transition-all duration-[2000ms] delay-[500ms] ${
                        imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                >
                    Контакти
                </h1>

                <p
                    className={`text-white max-w-2xl text-lg mb-4 transition-all duration-[2000ms] delay-[700ms] ${
                        imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Зв'яжіться з нами! Ми завжди готові відповісти на ваші запитання та надати
                    необхідну інформацію. Ви можете написати нам електронною поштою або зателефонувати.
                </p>

                <p
                    className={`text-white max-w-2xl text-lg transition-all duration-[2000ms] delay-[900ms] ${
                        imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                    Email: info@example.com <br />
                    Телефон: +38 050 123 45 67 <br />
                    Адреса: Україна, Київ
                </p>

                {/* Footer */}
                <div className="mt-auto w-full">
                    <Footer />
                </div>
            </main>
        </div>
    );
}