"use client";

import { useState, useEffect } from "react";
import Body from "@/components/Body";

export default function CharactersPage() {
  const [loading, setLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/characters/");
        if (!response.ok) {
          throw new Error("Failed to fetch character data");
        }
        const data = await response.json();
        setCharacterList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, []);

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Character Name ${i + 1}`,
    year: 2000 + i,
    description: "This is a short description of the character.",
    image: "/placeholder.jpg",
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Body items={items} loading={loading} />
    </div>
  );
}
