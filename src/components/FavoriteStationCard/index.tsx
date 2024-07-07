import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import EditDialog from "../EditDialog";

type FavoriteStationCardProps = {
  station: RadioRequest;
  isFavorite: boolean;
  deleteFavorite: (e: string) => void;
  editFavorite: (id: string, newName: string) => void;
};

export const FavoriteStationCard = (props: FavoriteStationCardProps) => {
  const { station, deleteFavorite, editFavorite } = props;
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-full gap-2 lg:gap-4 overflow-hidden">
        <button>play</button>
        <div className="truncate flex-1">
          <h2 className="font-medium text-sm lg:text-lg">
            {station.newFavoriteName ? station.newFavoriteName : station.name}
          </h2>
          <p className="hidden lg:block text-sm text-muted-foreground">
            {station.country}
          </p>
        </div>

        <div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setOpenEdit(true);
            }}
          >
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

        <EditDialog
          open={openEdit}
          setOpen={setOpenEdit}
          oldName={
            station?.newFavoriteName ? station?.newFavoriteName : station.name
          }
          originalName={station.name}
          editFavorite={editFavorite}
          id={station.stationuuid}
        />
      </div>
    </div>
  );
};
