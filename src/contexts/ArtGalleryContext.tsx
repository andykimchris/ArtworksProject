import React, { FC, createContext, useState, useEffect } from "react";
import {
  ArtContextTypes,
  artWorkInterface,
  checkBoxInterface,
} from "../utilities/globalInterfaces";
import checkboxes from "../config/checkboxes";
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
  totalItems: checkboxes,
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<checkBoxInterface[]>([]);
  const [totalItems, setTotalItems] = useState(checkboxes);

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
      let isInCluded = prevCheckedItems.filter((item) => item.id === id);
      let items;
      if (isInCluded.length) {
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
    setTotalItems((prevUpdatedItems: checkBoxInterface[]) => {
      let updatedItems = prevUpdatedItems.map(
        (item) => true && { ...item, checked: false }
      );
      return updatedItems;
    });
  };

  return (
    <ArtContext.Provider
      value={{
        checkedItems,
        totalItems,
        isModalOpen,
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
