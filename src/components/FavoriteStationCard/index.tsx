import { useState } from "react";

type FavoriteStationCardProps = {
  station: RadioRequest;
  isFavorite: boolean;
};

export const FavoriteStationCard = (props: FavoriteStationCardProps) => {
  const [radios, setRadios] = useState<RadioRequest[]>([]);
  const { station } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 lg:gap-4 overflow-hidden">
        <button>play</button>
        <div className="truncate flex-1">
          <h2 className="font-medium text-sm lg:text-lg">{station.name}</h2>
          <p className="hidden lg:block text-sm text-muted-foreground">
            {station.country}
          </p>
        </div>
      </div>
    </div>
  );
};
