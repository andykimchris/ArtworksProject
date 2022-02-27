import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ArtContext } from "../contexts/ArtGalleryContext";
import { ARTWORKS_PER_PAGE } from "../utilities/constants";

const PaginateArt = () => {
  const { currPage, artWorks } = useContext(ArtContext);
  const startIndex = (currPage - 1) * ARTWORKS_PER_PAGE;
  const selectedArtWorks = artWorks.slice(
    startIndex,
    startIndex + ARTWORKS_PER_PAGE
  );

  return (
    <Row className="filter-art-collection-col-2-row">
      {selectedArtWorks.map((artwork) => (
        <Col className="art-collection" key={artwork._id}>
          <div className="art-collection-img">
            {artwork.bestseller && (
              <div className="best-seller">Best seller</div>
            )}
            <img src={artwork.image.src} alt={artwork.image.alt} />
            <div className="add-collection-item-button">
              <button className="add-to-cart-button">
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>

          <p>{artwork.category}</p>
          <h2>{artwork.name}</h2>
          <p>${artwork.price}</p>
        </Col>
      ))}
    </Row>
  );
};

export default PaginateArt;
