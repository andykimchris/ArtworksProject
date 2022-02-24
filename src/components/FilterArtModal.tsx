import { Modal, Button } from "react-bootstrap";
import CloseIcon from "../vectors/CloseIcon";
import { useContext } from "react";

import FilterOptions from "../components/FilterOptions";
import { ArtContext } from "../contexts/ArtGalleryContext";

interface FilterArtModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterArtModal: React.FC<FilterArtModalProps> = ({ isOpen, setOpen }) => {
  const { clearAllCheckedItems } = useContext(ArtContext);

  const handleModalClose = () => setOpen(false);
  const handleClearCheckedItems = () => {
    clearAllCheckedItems();
  };

  return (
    <Modal show={isOpen}>
      <Modal.Header>
        <Modal.Title>Filter</Modal.Title>
        <div className="modal-close-icon" onClick={handleModalClose}>
          <CloseIcon />
        </div>
      </Modal.Header>

      <Modal.Body>
        <FilterOptions />
      </Modal.Body>

      <Modal.Footer>
        <Button className="clear-filter" onClick={handleClearCheckedItems}>
          <span>Clear</span>
        </Button>
        <Button className="save-filter">
          <span>Save</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterArtModal;
