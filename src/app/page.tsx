"use client";
import { ListStations } from "@/components/ListStations";
import SideBar from "@/components/SideBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

export default function Home() {
  const [favorites, setFavorites] = useState<RadioRequest[]>(() => {
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved || "[]");
    return initialValue || [];
  });

  function deleteFavorite(stationuuid: string) {
    let newFavorites = [...favorites];
    newFavorites = newFavorites.filter(
      (item) => item.stationuuid != stationuuid
    );
    setFavorites(newFavorites);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="min-h-full relative">
      <div className="flex">
        <div className="hidden lg:block w-1/5">
          <ScrollArea className="h-screen">
            <SideBar favorites={favorites} setFavorites={setFavorites} />
          </ScrollArea>
        </div>

        <main className="m-8 space-y-8 flex-1">
          <div className="flex">
            <h1 className="font-semibold text-2xl tracking-tight">
              Radio Browser Challenge
            </h1>
          </div>

          <ListStations
            radios={favorites}
            isFavorite={true}
            deleteFavorite={deleteFavorite}
          />
        </main>
      </div>
    </div>
  );
}
