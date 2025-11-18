
"use client";

import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function About() {
    const [showContent, setShowContent] = useState(false);

    // Запускаем появление после монтирования на клиенте
    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500); // задержка 0.5с
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen flex flex-col">
            {/* Фоновая картинка через div для SSR */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
                    showContent ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: "url('/pexels-enginakyurt-1435904.jpg')" }}
            ></div>

            {/* Sidebar */}
            <Sidebar />

            {/* Основной контент */}
            <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 text-center">
                <h1
                    className={`${poppins.className} text-white text-4xl font-bold mb-6 transition-all duration-[2000ms] ${
                        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "0.5s" }}
                >
                    Про нас
                </h1>

                <p
                    className={`text-white max-w-2xl text-lg mb-4 transition-all duration-[2000ms] ${
                        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "0.7s" }}
                >
                    Ласкаво просимо до нашого магазину! Ми пропонуємо широкий асортимент свіжих та якісних продуктів для вашого щоденного життя. У нас ви знайдете свіжі овочі та фрукти, м'ясні та молочні продукти, бакалію та напої від надійних постачальників.
                </p>

                <p
                    className={`text-white max-w-2xl text-lg mb-4 transition-all duration-[2000ms] ${
                        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "0.9s" }}
                >
                    Ми дбаємо про наших клієнтів, тому завжди гарантуємо високу якість продукції та приємні ціни. Наша команда працює для того, щоб ваші покупки були швидкими, зручними та приємними.
                </p>

                <p
                    className={`text-white max-w-2xl text-lg transition-all duration-[2000ms] ${
                        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: "1.1s" }}
                >
                    Ми цінуємо довіру наших клієнтів і завжди відкриті до ваших побажань та відгуків. Завітайте до нас і переконайтеся, що покупки можуть бути комфортними та приємними!
                </p>

                {/* Footer */}
                <div className="mt-auto w-full">
                    <Footer />
                </div>
            </main>
        </div>
    );
}