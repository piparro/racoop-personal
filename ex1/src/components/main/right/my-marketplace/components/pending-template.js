import { Row } from "react-bootstrap";
import "./templates.css";

import MarkPendCardBuyTemp from "./pending-cards-pending-buying-template";
import MarkPendCardSellTemp from "./pending-cards-pending-selling-template";

export default function PendingTemplate(data) {
  if (data.data === "0") {
    return (
      <>
        <Row className="alinhavar">
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
          <MarkPendCardBuyTemp />
        </Row>
      </>
    );
  } else if (data.data === "1") {
    return (
      <>
        <Row className="alinhavar">
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
        </Row>
        <Row className="alinhavar">
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
          <MarkPendCardSellTemp />
        </Row>
      </>
    );
  }
}
