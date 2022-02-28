import { useContext } from "react";
import { Form } from "react-bootstrap";
import CategoryCheckBox from "./CategoryCheckbox";
import { ArtContext } from "../contexts/ArtGalleryContext";
import PriceCheckBox from "./PriceCheckBox";

const FilterOptions = () => {
  const {
    totalItems,
    updatedCheckBoxItem,
    filteredItems,
    handleFilteredPriceRange,
    priceRangeItem,
    handlePriceRangeItem,
  } = useContext(ArtContext);

  const handleCheckChange = (e: React.ChangeEvent<any>) => {
    let { id, checked } = e.target;

    updatedCheckBoxItem(id, checked);
    filteredItems(id, checked);
  };

  const handleFilterPriceChange = (
    e: React.ChangeEvent<any>,
    priceRange: string
  ) => {
    let { id, checked } = e.target;
    handlePriceRangeItem(id, checked);

    if (!checked) {
      handleFilteredPriceRange(0);
    } else {
      switch (priceRange) {
        case "Lower than $20":
          handleFilteredPriceRange(19.99);
          break;
        case "$20 - $100":
          handleFilteredPriceRange(99.99);
          break;
        case "$100 - $200":
          handleFilteredPriceRange(199.99);
          break;
        case "More than $200":
          handleFilteredPriceRange(200);
          break;
      }
    }
  };

  return (
    <Form>
      {totalItems.map((filter) => (
        <CategoryCheckBox
          label={filter.label}
          key={filter.id}
          id={filter.id}
          checked={filter.checked}
          onChange={handleCheckChange}
        />
      ))}

      <hr />

      <h2>Price Range</h2>
      {priceRangeItem.map((filter) => (
        <PriceCheckBox
          label={filter.label}
          key={filter.id}
          id={filter.id}
          checked={filter.checked}
          onChange={(e) => handleFilterPriceChange(e, filter.label)}
        />
      ))}
    </Form>
  );
};

export default FilterOptions;
