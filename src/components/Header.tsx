"use client";
import Link from "next/dist/client/link";
import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link href="/">
        <div className="text-2xl font-bold">AniWiki</div>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/animes">
          <div className="hover:underline">Animes</div>
        </Link>
        <Link href="/mangas">
          <div className="hover:underline">Mangas</div>
        </Link>
        <Link href="/characters">
          <div className="hover:underline">Characters</div>
        </Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
