import React from "react";

export interface GameItem {
  metacritic: number | null;
  name: string;
  platforms?: GamePlatform[];
  background_image: string | null;
  released?: string;
  genres?: GameGenre[];
  description?: string;
  id?: number;
}

export interface RawgResponse<T> {
  results: T[];
}

export interface GamesData extends RawgResponse<GameItem> {}

export interface GameGenre {
  name: string;
}

export interface ReactChildren {
  children: React.ReactNode;
}

export interface SetLoadingAndData {
  setGamesData: (gamesData: GamesData) => void;
  setLoadingData: (isLoading: boolean) => void;
}

export interface GamePlatform {
  platform: {
    name: string;
  };
}