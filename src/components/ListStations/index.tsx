import React, { useState } from "react";
import { Search } from "../Search";
import { FavoriteStationCard } from "../FavoriteStationCard";

type ListStationsProps = {
  radios: RadioRequest[];
  isFavorite: boolean;
  deleteFavorite: (e: string) => void;
  editFavorite: (id: string, newName: string) => void;
};

export const ListStations = (props: ListStationsProps) => {
  const { radios, isFavorite, deleteFavorite, editFavorite } = props;
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center	justify-between">
        <h2>Favorite Radios</h2>

        <div className="relative flex items-center">
          <Search query={query} setQuery={setQuery} />
        </div>
      </div>

      <div className="space-y-6 border rounded-lg p-4 lg:p-6">
        <div className="border-b pb-4 text-sm">
          <h2>Tocando agora: </h2>
        </div>

        {radios.map((radio, index) => (
          <FavoriteStationCard
            key={index}
            station={radio}
            isFavorite={true}
            deleteFavorite={deleteFavorite}
            editFavorite={editFavorite}
          />
        ))}
      </div>
    </div>
  );
};
