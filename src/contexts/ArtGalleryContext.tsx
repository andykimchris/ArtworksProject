import React, { FC, createContext, useState } from "react";
import {
  ArtContextTypes,
  checkBoxInterface,
} from "../utilities/globalInterfaces";
import checkboxes from "../config/checkboxes";

const ArtContextDefaultValues: ArtContextTypes = {
  isModalOpen: false,
  checkedItems: [],
  handleModalStatus: () => false,
  totalItems: checkboxes,
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
