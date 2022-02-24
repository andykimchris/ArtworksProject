import { Form } from "react-bootstrap";

interface CheckBoxesProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.FormEvent) => void;
}

const CheckBox: React.FC<CheckBoxesProps> = ({
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
