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
  isModalOpen: boolean;
  handleModalStatus: Function;
  checkedItems: checkBoxInterface[];
  totalItems: checkBoxInterface[];
  updatedCheckBoxItem: Function;
  filteredItems: Function;
  clearAllCheckedItems: Function;
};
