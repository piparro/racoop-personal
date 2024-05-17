import productPicture from "../../../../../logos/tomato.jpg";

import "./pending-cards-pending-buying-template.css";

import CancelPendingButton13 from "../../../../cards-comp/1-over-3-cancel-pending-button";
import AccptRequest13 from "../../../../cards-comp/1-over-3-accept-pending-button";

export default function MarkPendCardBuyTemp() {
  return (
    <div className="col-md-4 main-product-center">
      <div className="row main-product-center-row">
        <div className="col-6 main-product-lefthalf">
          <div className="row main-product-title-col">
            <p className="text-break main-product-title">Tomatoes</p>
          </div>
          <div className="row main-product-infotag-row">
            <div className="col-6 main-product-infotag-col">
              <p className="text-break main-product-infotag-text">Stock:</p>
            </div>
            <div className="col-6 main-product-info-col">
              <p className="text-break main-product-infotag-text">Price:</p>
            </div>
          </div>
          <div className="row main-product-info-row">
            <div className="col-6 main-product-info-col">
              <p className="text-break main-product-info-text">3Kg</p>
            </div>
            <div className="col-6 main-product-info-col">
              <p className="text-break main-product-info-text">10€/Kg</p>
            </div>
          </div>
        </div>
        <div className="col-6 main-product-righthalf">
          <div className="row main-product-righthalf-row">
            <div className="col-8 main-product-image-col">
              <div className="main-product-image-box">
                <img
                  src={productPicture}
                  alt="product images"
                  className="main-product-image"
                />
              </div>
            </div>
            <div className="col-4 no-pad">
              {/* <StorefrontButton13 /> */}
              {/* <EditRequest13 /> */}
              <AccptRequest13 />
              <CancelPendingButton13 />
              {/* <DeleteRequest13 /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
