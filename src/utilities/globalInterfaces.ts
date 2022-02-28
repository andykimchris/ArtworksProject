export interface checkBoxInterface {
  id: string;
  label: string;
  checked: boolean;
}

export interface CheckBoxesPropsInterface {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.FormEvent) => void;
}

export interface artWorkInterface {
  _id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: {
    dimentions: {
      width: number;
      height: number;
    };
    size: number;
    description: string;
    recommendations: [
      {
        src: string;
        alt: string;
      },
      {
        src: string;
        alt: string;
      },
      {
        src: string;
        alt: string;
      }
    ];
  };
}

export type ArtContextTypes = {
  currPage: number;
  totalPages: number;
  isModalOpen: boolean;
  isLoading: boolean;
  windowWidth: number;
  sortOption: string;
  sortAscOrDesc: string;
  filterPriceRange: number;

  artWorks: artWorkInterface[];
  checkedItems: checkBoxInterface[];
  totalItems: checkBoxInterface[];
  priceRangeItem: checkBoxInterface[];

  handleFilteredPriceRange: Function;
  handleFilteredPages: Function;
  handlePriceRangeItem: Function;
  handleModalOpen: Function;
  handleModalStatus: Function;
  handleCurrPage: Function;
  handleSortByNameOrPrice: Function;
  handleSortAscOrDesc: Function;
  updatedCheckBoxItem: Function;
  filteredItems: Function;
  clearAllCheckedItems: Function;
};
