import { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ArtContext } from "../contexts/ArtGalleryContext";
import { ARTWORKS_PER_PAGE } from "../utilities/constants";
import { artWorkInterface } from "../utilities/globalInterfaces";

const PaginateArt = () => {
  const {
    currPage,
    artWorks,
    checkedItems,
    filterPriceRange,
    handleFilteredPages,
  } = useContext(ArtContext);

  useEffect(() => {
    let filteredPageCount = filteredArtWorkByPrice!.length / ARTWORKS_PER_PAGE;
    let totalFilteredPages = Math.ceil(filteredPageCount);
    handleFilteredPages(totalFilteredPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterPriceRange]);

  let selectedArtWorks: artWorkInterface[] | null = null;
  if (checkedItems.length) {
    let categories = checkedItems.map((cat) => cat.label);
    selectedArtWorks = artWorks.filter((item) =>
      categories.includes(item.category)
    );
  } else {
    selectedArtWorks = artWorks;
  }

  let filteredArtWorkByPrice: artWorkInterface[] | null = null!;

  switch (filterPriceRange) {
    case 0:
      filteredArtWorkByPrice = selectedArtWorks;
      break;
    case 19.99:
      filteredArtWorkByPrice = selectedArtWorks.filter(
        (item) => item.price < 20
      );
      break;
    case 99.99:
      filteredArtWorkByPrice = selectedArtWorks.filter(
        (item) => 20 <= item.price && item.price <= 99.99
      );
      break;
    case 199.99:
      filteredArtWorkByPrice = selectedArtWorks.filter(
        (item) => 100 <= item.price && item.price <= 199.99
      );
      break;
    case 200:
      filteredArtWorkByPrice = selectedArtWorks.filter(
        (item) => item.price >= 200
      );
      break;
  }

  const startIndex = (currPage - 1) * ARTWORKS_PER_PAGE;
  const filteredArtWorks = filteredArtWorkByPrice?.slice(
    startIndex,
    startIndex + ARTWORKS_PER_PAGE
  );

  return (
    <Row className="filter-art-collection-col-2-row">
      {filteredArtWorkByPrice === null ||
      filteredArtWorkByPrice.length === 0 ? (
        <div className="content-exists-section">
          There are no artworks to display.
        </div>
      ) : (
        filteredArtWorks.map((artwork) => (
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
        ))
      )}
    </Row>
  );
};

export default PaginateArt;
