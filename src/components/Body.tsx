"use client";

import { useState } from "react";
import Image from "next/image";

interface AnimeProps {
  items: {
    id: number;
    title: string;
    year: number;
    description: string;
    image: string;
  }[];
  loading: boolean;
}

interface CharacterProps {
  items: {
    id: number;
    name: string;
    age: number;
    description: string;
    image: string;
  }[];
  loading: boolean;
}

const AnimeBodyElement: React.FC<AnimeProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          onClick={() => alert(`Clicked on ${item.title}`)}
        >
          <div className="relative w-full h-40">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Year: {item.year}
            </p>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CharacterBodyElement: React.FC<CharacterProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          onClick={() => alert(`Clicked on ${item.name}`)}
        >
          <div className="relative w-full h-40">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Age: {item.age}
            </p>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Body({ items, loading }: AnimeProps | CharacterProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }
  if (items.length === 0) {
    return <div className="text-center text-lg">No items found.</div>;
  }
  return (
    <main className="p-4">
      {}
      <AnimeBodyPart items={items} />
      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}
