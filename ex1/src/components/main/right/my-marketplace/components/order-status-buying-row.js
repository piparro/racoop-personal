import { Row, Col } from "react-bootstrap";
import "./history-row.css";
import OrderStatusCard from "./order-status-card";

export default function OrderStatusBuyingRow() {
  return (
    <Row className="history-row-no-pad">
      <Col className="col-md-6 history-col-left-card">
        <OrderStatusCard />
      </Col>
      <Col className="col-md-6 history-col-right-card">
        <OrderStatusCard />
      </Col>
    </Row>
  );
}
