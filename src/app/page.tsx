"use client";
import { ListStations } from "@/components/ListStations";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {
  const [favorites, setFavorites] = useState<RadioRequest[]>([]);

  return (
    <div className="min-h-full relative">
      <div>
        <div className="hidden lg:block">
          <SideBar favorites={favorites} setFavorites={setFavorites} />
        </div>

        <main className="py-8 px-6 lg:py-14 lg:px-8 lg:ml-80 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl tracking-tight">
              Radio Browser Challenge
            </h1>
          </div>

          <ListStations radios={favorites} isFavorite={true} />
        </main>
      </div>
    </div>
  );
}
