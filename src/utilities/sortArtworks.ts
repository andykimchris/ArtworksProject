import { artWorkInterface } from "./globalInterfaces";

export const sortArtWorks = (
  nameOrPrice: string,
  ascOrDesc: string,
  artworks: artWorkInterface[]
) => {
  let sortedArtWorks = null;
  if (nameOrPrice === "name") {
    sortedArtWorks = artworks.sort((a, b) =>
      ascOrDesc === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  } else {
    sortedArtWorks = artworks.sort((a, b) =>
      ascOrDesc === "asc" ? a.price - b.price : b.price - a.price
    );
  }
  return sortedArtWorks;
};
