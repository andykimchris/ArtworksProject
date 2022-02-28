import React, { FC, createContext, useState, useEffect } from "react";
import {
  ArtContextTypes,
  artWorkInterface,
  checkBoxInterface,
} from "../utilities/globalInterfaces";
import { filterByCategoryCheckBoxes, filterByPriceCheckboxes } from "../config/checkboxes";
import { ARTWORKS_PER_PAGE } from "../utilities/constants";
import axios from "axios";
import { sortArtWorks } from "../utilities/sortArtworks";

const ArtContextDefaultValues: ArtContextTypes = {
  currPage: 1,
  totalPages: 0,
  windowWidth: 1000,
  isModalOpen: false,
  isLoading: true,
  sortOption: "",
  sortAscOrDesc: "",
  artWorks: [],
  checkedItems: [],
  filterPriceRange: 0,
  totalItems: filterByCategoryCheckBoxes,
  priceRangeItem: filterByPriceCheckboxes,
  handleFilteredPages: () => null,
  handleFilteredPriceRange: () => null,
  handlePriceRangeItem: () => null,
  handleModalStatus: () => false,
  handleModalOpen: () => true,
  handleCurrPage: () => null,
  handleSortAscOrDesc: () => null,
  handleSortByNameOrPrice: () => null,
  updatedCheckBoxItem: () => [],
  filteredItems: () => [],
  clearAllCheckedItems: () => [],
};

export const ArtContext = createContext<ArtContextTypes>(
  ArtContextDefaultValues
);

type ArtProviderProps = {
  children: React.ReactElement;
};

export const ArtProvider: FC<ArtProviderProps> = ({ children }) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [windowWidth, setCheckWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<checkBoxInterface[]>([]);
  const [totalItems, setTotalItems] = useState(filterByCategoryCheckBoxes);
  const [priceRangeItem, setPriceRangeItem] = useState(filterByPriceCheckboxes);
  const [sortOption, setSortOption] = useState<string>("name");
  const [filterPriceRange, setFilterPriceRange] = useState<number>(0);
  const [sortAscOrDesc, setSortAscOrDesc] = useState<string>("asc");
  const [artWorks, setArtWorks] = useState<artWorkInterface[]>([]);

  const key = "artworks";

  useEffect(() => {
    const fetchArtWorks = async () => {
      const artWorkData = localStorage.getItem(key)!;
      if (artWorkData === null) {
        await axios.get("/api/get-artworks").then((response) => {
          setArtWorks(response.data.artworks);
          localStorage.setItem(key, JSON.stringify(response.data.artworks));
          setisLoading(false);
        });
      }
      const parsedData = JSON.parse(artWorkData);
      if (parsedData !== null) {
        setArtWorks(parsedData);
        setisLoading(false);
      }
    };
    fetchArtWorks();
  }, [key]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTotalPages(Math.ceil(artWorks.length / ARTWORKS_PER_PAGE));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleResizeEvent = () => setCheckWindowWidth(window.innerWidth);
  const handleCurrPage = (num: number) => setCurrPage(num);
  const handleModalOpen = () => handleModalStatus(true);

  const handleSorting = (_sortOption: string, _sortAscOrDesc: string) => {
    const sortedArtWorks = sortArtWorks(_sortOption, _sortAscOrDesc, artWorks);
    setArtWorks(sortedArtWorks);
  };

  const handleFilteredPages = (totalFilteredPages: number) =>
    setTotalPages(totalFilteredPages);

  const handleFilteredPriceRange = (priceRange: number) => {
    setFilterPriceRange(priceRange);
  };

  const handlePriceRangeItem = (id: string, checked: boolean) => {
    setPriceRangeItem((prevPriceRangeItems: checkBoxInterface[]) => {
      let updatedPriceItems = prevPriceRangeItems.map((item) =>
        item.id === id
          ? { ...item, checked: checked }
          : { ...item, checked: false }
      );
      return updatedPriceItems;
    });
  };

  const handleSortByNameOrPrice = () => {
    if (sortOption === "name") {
      handleSorting("price", sortAscOrDesc);
      setSortOption((_) => "price");
    } else {
      handleSorting("name", sortAscOrDesc);
      setSortOption((_) => "name");
    }
  };

  const handleSortAscOrDesc = () => {
    if (sortAscOrDesc === "asc") {
      handleSorting(sortOption, "desc");
      setSortAscOrDesc((_) => "desc");
    } else {
      handleSorting(sortOption, "asc");
      setSortAscOrDesc((_) => "asc");
    }
  };

  const handleModalStatus = (modalStatus: boolean) =>
    setIsModalOpen(modalStatus);

  const updatedCheckBoxItem = (id: string, checked: boolean) => {
    setTotalItems((prevUpdatedItems: checkBoxInterface[]) => {
      let updatedItems = prevUpdatedItems.map((item) =>
        item.id === id ? { ...item, checked: checked } : item
      );
      return updatedItems;
    });
  };

  const filteredItems = (id: string, checked: boolean) => {
    setCheckedItems((prevCheckedItems: checkBoxInterface[]) => {
      let isIncluded = prevCheckedItems.filter((item) => item.id === id);
      let items;
      if (isIncluded.length) {
        items = prevCheckedItems.filter((item) => item.id !== id);
      } else {
        let checkedItem = {
          id: id,
          label: id,
          checked: checked,
        };
        items = [...checkedItems, checkedItem];
      }
      return items;
    });
  };

  const clearAllCheckedItems = () => {
    setCheckedItems([])
    setTotalItems((prevUpdatedItems: checkBoxInterface[]) => {
      let updatedItems = prevUpdatedItems.map(
        (item) => true && { ...item, checked: false }
      );
      return updatedItems;
    });
    setPriceRangeItem((prevPriceRangeItems: checkBoxInterface[]) => {
      let updatedPriceItems = prevPriceRangeItems.map((item) => true && { ...item, checked: false });
      return updatedPriceItems;
    });
    setFilterPriceRange(0);
  };

  return (
    <ArtContext.Provider
      value={{
        currPage,
        totalPages,
        isLoading,
        sortOption,
        sortAscOrDesc,
        windowWidth,
        priceRangeItem,
        filterPriceRange,
        handleFilteredPages,
        handleFilteredPriceRange,
        handlePriceRangeItem,
        handleSortByNameOrPrice,
        handleSortAscOrDesc,
        handleCurrPage,
        checkedItems,
        totalItems,
        isModalOpen,
        artWorks,
        handleModalOpen,
        handleModalStatus,
        updatedCheckBoxItem,
        filteredItems,
        clearAllCheckedItems,
      }}
    >
      {children}
    </ArtContext.Provider>
  );
};
