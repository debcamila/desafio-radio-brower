"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { fetchRadios } from "@/lib/api";
import { Search } from "../Search";
import { SearchStationCard } from "../SearchStationCard";

type SideBarProps = {
  favorites: RadioRequest[];
  setFavorites: Dispatch<SetStateAction<RadioRequest[]>>;
};

function SideBar(props: SideBarProps) {
  const [radios, setRadios] = useState<RadioRequest[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const { favorites, setFavorites } = props;

  const addToFavorite = (favorite: RadioRequest) => {
    let newFavorites = [...favorites];
    newFavorites.push(favorite);
    setFavorites(newFavorites);
  };

  const removeFromFavorite = (favorite: RadioRequest) => {
    let newFavorites = [...favorites];
    newFavorites = newFavorites.filter(
      (radio) => radio.stationuuid !== favorite.stationuuid
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    async function getRadios() {
      const newRadios = await fetchRadios(query, page);
      setRadios(newRadios);
    }
    getRadios();
  }, [query, page]);

  return (
    <div className="m-2">
      <div className="my-4">
        <Search query={query} setQuery={setQuery} />
      </div>
      <div>
        {radios.map((radio, index) => (
          <div className="my-2" key={index}>
            <SearchStationCard
              radio={radio}
              isFavorite={favorites.some(
                (favorite) => favorite.stationuuid === radio.stationuuid
              )}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
