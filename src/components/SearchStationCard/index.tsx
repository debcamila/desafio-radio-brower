"use client";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

type SearchStationCardProps = {
  radio: RadioRequest;
  isFavorite: boolean;
  addToFavorite: (f: RadioRequest) => void;
  removeFromFavorite: (f: RadioRequest) => void;
  favoriteInfo: RadioRequest;
};

export const SearchStationCard = (props: SearchStationCardProps) => {
  const { radio, isFavorite, addToFavorite, removeFromFavorite, favoriteInfo } =
    props;

  return (
    <div className="bg-muted/40 rounded-lg p-2 flex items-center gap-4">
      <div className="text-sm line-clamp-2 font-medium">
        {favoriteInfo?.newFavoriteName
          ? favoriteInfo?.newFavoriteName
          : radio.name}
      </div>
      <div className="ml-auto">
        {isFavorite ? (
          <Button size="icon" onClick={() => removeFromFavorite(radio)}>
            <Heart className="size-4 fill-red-600 stroke-red-600" />
          </Button>
        ) : (
          <Button size="icon" onClick={() => addToFavorite(radio)}>
            <Heart className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
