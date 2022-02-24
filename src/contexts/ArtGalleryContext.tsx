import React, { FC, createContext, useState } from "react";
import { checkBoxInterface } from "../utilities/modelInterfaces";
import checkboxes from "../config/checkboxes";

type ArtContextTypes = {
  checkedItems: checkBoxInterface[];
  totalItems: checkBoxInterface[];
  updatedCheckBoxItem: Function;
  filteredItems: Function;
  clearAllCheckedItems: Function;
};

const ArtContextDefaultValues: ArtContextTypes = {
  checkedItems: [],
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
  const [checkedItems, setCheckedItems] = useState<checkBoxInterface[]>([]);
  const [totalItems, setTotalItems] = useState(checkboxes);

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
        updatedCheckBoxItem,
        filteredItems,
        clearAllCheckedItems,
      }}
    >
      {children}
    </ArtContext.Provider>
  );
};
