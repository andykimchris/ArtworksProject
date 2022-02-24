import { useContext } from "react";
import { Form } from "react-bootstrap";
import CheckBox from "./Checkbox";
import { ArtContext } from "../contexts/ArtGalleryContext";

const FilterOptions = () => {
  const { totalItems, updatedCheckBoxItem, filteredItems } =
    useContext(ArtContext);

  const handleCheckChange = (e: React.ChangeEvent<any>) => {
    let { id, checked } = e.target;

    updatedCheckBoxItem(id, checked);
    filteredItems(id, checked);
  };

  const handleChange = () => console.log("");
  return (
    <Form>
      {totalItems.map((item) => (
        <CheckBox
          label={item.label}
          key={item.id}
          id={item.id}
          checked={item.checked}
          onChange={handleCheckChange}
        />
      ))}

      <hr />

      <h2>Price Range</h2>

      <Form.Group className="mb-3 checkbox-group" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Lower than $20"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 checkbox-group" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="$20 - $100"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 checkbox-group" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="$100 - $200"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 checkbox-group" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="More than $200"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default FilterOptions;
