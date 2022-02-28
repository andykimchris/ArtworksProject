import { Form } from "react-bootstrap";
import { CheckBoxesPropsInterface } from "../utilities/globalInterfaces";

const PriceCheckBox: React.FC<CheckBoxesPropsInterface> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3 checkbox-group" controlId="formBasicCheckbox">
      <Form.Check
        type="checkbox"
        label={label}
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default PriceCheckBox;
