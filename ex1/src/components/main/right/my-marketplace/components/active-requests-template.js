import { Row } from "react-bootstrap";

import ActiveRequestCard from "./active-requests-card";
import "./templates.css";
import AddOrderCard from "../../../../cards-comp/add-order-card";

export default function ActiveRequestTemplate() {
  return (
    <>
      <Row className="alinhavar">
        <AddOrderCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
      <Row className="alinhavar">
        <ActiveRequestCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
      <Row className="alinhavar">
        <ActiveRequestCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
      <Row className="alinhavar">
        <ActiveRequestCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
      <Row className="alinhavar">
        <ActiveRequestCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
      <Row className="alinhavar">
        <ActiveRequestCard />
        <ActiveRequestCard />
        <ActiveRequestCard />
      </Row>
    </>
  );
}
