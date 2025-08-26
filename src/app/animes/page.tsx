"use client";

import Body from "@/components/Body";
import { useState, useEffect } from "react";

export default function AnimesPage() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch anime data from an API or other source
    const fetchAnimeData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/anime/");
        if (!response.ok) {
          throw new Error("Failed to fetch anime data");
        }
        const data = await response.json();
        setAnimeList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  // Placeholder data for the list
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Anime Title ${i + 1}`,
    year: 2020 + i,
    description: "This is a short description of the anime.",
    image: "/placeholder.jpg",
  }));

  return <Body items={items} loading={loading} />;
}
