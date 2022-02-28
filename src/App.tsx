import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import FilterArtModal from "./components/FilterArtModal";
import FilterOptions from "./components/FilterOptions";
import PaginateArt from "./components/PaginateArt";
import PaginateBar from "./components/PaginateBar";
import { ArtContext } from "./contexts/ArtGalleryContext";
import "./css/app.scss";
import { artWorkInterface } from "./utilities/globalInterfaces";
import ArrowDown from "./vectors/ArrowDown";
import ArrowUp from "./vectors/ArrowUp";
import BejamasLogo from "./vectors/BejamasLogo";
import FilterIcon from "./vectors/FilterIcon";
import SortArrows from "./vectors/SortArrows";

const App = () => {
  const {
    isLoading,
    sortOption,
    handleSortByNameOrPrice,
    handleSortAscOrDesc,
    sortAscOrDesc,
    windowWidth,
    isModalOpen,
    handleModalOpen,
    artWorks,
  } = useContext(ArtContext);

  let displayIcon = windowWidth < 1320;
  let featured: artWorkInterface | null = null!;
  if (artWorks !== null) {
    featured = artWorks.find((item) => item.featured)!;
  }

  const handleModalDisplay = () => handleModalOpen(true);
  const handleSortAscDesc = () => handleSortAscOrDesc();
  const handleSortNameOrPrice = () => handleSortByNameOrPrice();
  const canShowPagination = artWorks === null || artWorks.length > 6;

  return (
    <div className="App">
      {isModalOpen ? (
        <FilterArtModal />
      ) : isLoading ? (
        <div className="content-exists-section">Loading ArtWorks...</div>
      ) : (
        <Container className="main">
          <Row className="title-shopping-cart">
            <div className="title">
              <BejamasLogo windowWidth={windowWidth} />
            </div>
            <div className="shopping-cart">
              <AiOutlineShoppingCart />
            </div>
          </Row>

          <Row className="main-item-name">
            <div className="item-name">
              <h2>{featured.name}</h2>
            </div>

            <div className="item-image">
              <img src={featured.image.src} alt={featured.image.alt} />
              <div className="item-of-the-day">Photo of the day</div>
            </div>

            <div className="add-item-button">
              <button>
                <span>ADD TO CART</span>
              </button>
            </div>
          </Row>

          <Row className="item-description-row">
            <Col className="item-description-col">
              <div className="item-description">
                <h3>About the {featured.name} </h3>
                <h4 className="item-category">{featured.category}</h4>
                <p>{featured.details.description}</p>
              </div>
            </Col>

            <Col className="other-items-col">
              <Row>
                <h3>People also buy</h3>
                <div className="also-buy-items">
                  {featured.details.recommendations.map((recommendation) => (
                    <Col key={recommendation.src} className="other-items-img">
                      <img src={recommendation.src} alt={recommendation.alt} />
                    </Col>
                  ))}
                </div>
              </Row>
              <Row className="item-details">
                <h3>Details</h3>
                <p>
                  {featured.details.dimentions.width} x{" "}
                  {featured.details.dimentions.height} pixels
                </p>
                <p>Size: {featured.details.size / 1000} mbs</p>
              </Row>
            </Col>
          </Row>

          <Row>
            <div className="sorting-options">
              <div className="filters">
                <h5 className="me-auto">
                  Photography / <span>Premium Photos</span>
                </h5>
              </div>
              <div className="sorting">
                {displayIcon ? (
                  <div className="filter-icon" onClick={handleModalDisplay}>
                    <FilterIcon />
                  </div>
                ) : (
                  <h5 className="me-auto">
                    <span className="sort-name-or-price">
                      <span className="sort-arrows" onClick={handleSortAscDesc}>
                        <SortArrows />
                      </span>
                      Sort By /{" "}
                    </span>

                    <span className="sort-asc-or-desc">
                      <span
                        className="sort-option"
                        onClick={handleSortNameOrPrice}
                      >
                        {sortOption}
                      </span>
                      {sortAscOrDesc === "asc" ? <ArrowUp /> : <ArrowDown />}
                    </span>
                  </h5>
                )}
              </div>
            </div>
          </Row>

          <Row className="filter-art-collection-row">
            <Col className="filter-art-collection-col-1">
              <h2>Category</h2>
              <FilterOptions />
            </Col>

            <Col className="filter-art-collection-col-2">
              <PaginateArt />

              {canShowPagination && (
                <Row className="pagination-section">
                  <PaginateBar />
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default App;
