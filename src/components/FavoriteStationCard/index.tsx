import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";

type FavoriteStationCardProps = {
  station: RadioRequest;
  isFavorite: boolean;
  deleteFavorite: (e: string) => void;
};

export const FavoriteStationCard = (props: FavoriteStationCardProps) => {
  const { station, deleteFavorite } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full gap-2 lg:gap-4 overflow-hidden">
        <button>play</button>
        <div className="truncate flex-1">
          <h2 className="font-medium text-sm lg:text-lg">{station.name}</h2>
          <p className="hidden lg:block text-sm text-muted-foreground">
            {station.country}
          </p>
        </div>

        <div>
          <Button size="icon" variant="outline" onClick={() => {}}>
            <Pencil className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              deleteFavorite(station.stationuuid);
            }}
          >
            <Trash className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
