"use client";

import Body from "@/components/Body";

export default function MangasPage() {
  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Manga Title ${i + 1}`,
    year: 2015 + i,
    description: "This is a short description of the manga.",
    image: "/placeholder.jpg",
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Body items={items} />
    </div>
  );
}
