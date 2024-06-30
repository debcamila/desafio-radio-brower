"use client";
import React, { Dispatch, SetStateAction } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

type SearchProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const Search = (props: SearchProps) => {
  const { query, setQuery } = props;

  return (
    <div className="relative flex items-center">
      <SearchIcon className="absolute left-4 size-5" />
      <Input
        placeholder="Search here"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        className="pl-12"
      />
    </div>
  );
};
