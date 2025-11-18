export default function Footer() {
    return (
        <footer className="w-full bg-black bg-opacity-80 text-white py-6 mt-auto">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; 2025 Ваш проект. Всі права захищені.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-yellow-400 text-sm">Політика конфіденційності</a>
                    <a href="#" className="hover:text-yellow-400 text-sm">Контакти</a>
                </div>
            </div>
        </footer>
    );
}