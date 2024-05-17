import { Row, Col } from "react-bootstrap";
import "./order-status-card.css";
import product from "../../../../../logos/tomato.jpg";
import cancel from "../../../../../logos/cancel.svg";
import OrderStatusStaticComp from "../../../../cards-comp/order-status-static-comp";
import OrderStatusDropdownComp from "../../../../cards-comp/order-status-dropdown-comp";
import StatusCancelOrderButton from "../../../../cards-comp/order-status-cancel-order-button";
import StatusStoreButton from "../../../../cards-comp/order-status-store-button";
import StatusSaveButton from "../../../../cards-comp/order-status-save-button";

export default function OrderStatusSellingCard() {
  return (
    <Row className="status-card-exterior vertically-align-flex">
      <Col className="col ">
        <Row className="status-toprow">
          <p className="status-product">Tomatoes</p>
        </Row>
        <Row className="status-bottomrow vertically-align-flex">
          <Col className="col-6 status-bottom-division-1">
            <Row className="status-divided-row vertically-align-flex">
              <Col className="col-6 status-division-col-1 widthings margerine ">
                <Row className="status-infotag-row">
                  <p className="status-infotag">Quantity:</p>
                </Row>
                <Row className="status-info-row">
                  <p className="status-info">3Kg</p>
                </Row>
              </Col>
              <Col className="col-6 status-division-col-2 widthings margerine ">
                <Row className="status-infotag-row">
                  <p className="status-infotag">Total:</p>
                </Row>
                <Row className="status-info-row">
                  <p className="status-info">10€</p>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* <OrderStatusStaticComp /> */}
          <OrderStatusDropdownComp />
        </Row>
      </Col>
      <Col className="col-4 secondo widthings no-margerine">
        <Row className="widthings no-margerine">
          <Col className="col status-image-col">
            <div className="status-image-box">
              <img src={product} className="status-image" />
            </div>
          </Col>

          <Col className="col-3 status-buttons-col horizon ">
            <Row className="status-top-button-row">
              {/* <StatusStoreButton /> */}
              <StatusSaveButton />
            </Row>
            <Row className="status-bottom-button-row">
              <StatusCancelOrderButton />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
