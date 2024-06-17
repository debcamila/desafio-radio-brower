"use client";
import { useEffect, useState } from "react";
import { fetchRadios } from "@/lib/api";

function SideBar() {
  const [radios, setRadios] = useState<RadioRequest[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getRadios() {
      const newRadios = await fetchRadios(query, 1);
      setRadios(newRadios);
    }
    getRadios();
  }, [query]);

  return (
    <div>
      <ul>
        {radios.map((radio) => (
          <li key={radio.name}>{radio.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
