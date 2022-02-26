import { Form } from "react-bootstrap";
import { CheckBoxesPropsInterface } from "../utilities/globalInterfaces";

const CheckBox: React.FC<CheckBoxesPropsInterface> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <Form.Group
      className="mb-3 checkbox-group"
      controlId="formBasicCheckbox"
      key={id}
    >
      <Form.Check
        type="checkbox"
        label={label}
        id={id}
        key={id}
        checked={checked}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default CheckBox;
