import { Modal, Button } from "react-bootstrap";
import CloseIcon from "../vectors/CloseIcon";
import { useContext } from "react";

import FilterOptions from "./FilterOptions";
import { ArtContext } from "../contexts/ArtGalleryContext";

interface FilterArtModalProps {}

const FilterArtModal: React.FC<FilterArtModalProps> = () => {
  const { clearAllCheckedItems, isModalOpen, handleModalStatus } =
    useContext(ArtContext);

  const handleModalClose = () => handleModalStatus(false);
  const handleClearCheckedItems = () => {
    clearAllCheckedItems();
    handleModalClose()
  };
  const handleSavedItems = () => handleModalStatus(false);

  return (
    <Modal show={isModalOpen}>
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
        <Button className="save-filter" onClick={handleSavedItems}>
          <span>Save</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterArtModal;
