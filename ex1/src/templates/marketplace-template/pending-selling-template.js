import { Row, Col } from "react-bootstrap";
import MarkPendCard from "../../pages/pending-marketplace/pending-cards";
import { useState } from "react";

import MarkPendCardBuyTemp from "./pending-cards-pending-buying-template";
import MarkPendCardSellTemp from "./pending-cards-pending-selling-template";

export default function PendingSellingTemplate(data) {
  return (
    <>
      <Row>
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
      </Row>
      <Row>
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
      </Row>
      <Row>
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
      </Row>
      <Row>
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
      </Row>
      <Row>
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
        <MarkPendCardSellTemp />
      </Row>
    </>
  );
}
