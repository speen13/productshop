
"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  // Включаем контент после монтирования на клиенте
  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500); // задержка 0.5с
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Фоновая картинка через div, чтобы SSR видел сразу */}
        <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
                showContent ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: "url('/pexels-asphotography-868110.jpg')" }}
        ></div>

        {/* Sidebar */}
        <Sidebar />

        {/* Основной контент */}
        <main className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6">
          <h1
              className={`${poppins.className} text-white text-4xl font-bold mb-4 transition-all duration-[2000ms] ${
                  showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Добро пожаловать!
          </h1>
          <p
              className={`text-white max-w-2xl text-lg transition-all duration-[2000ms] delay-200 ${
                  showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Это пример магазина продуктов. У нас свежие овощи, фрукты, мясо и молочные продукты.
          </p>

          {/* Footer */}
          <div className="mt-auto w-full">
            <Footer />
          </div>
        </main>
      </div>
  );
}