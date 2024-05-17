import { Row, Col } from "react-bootstrap";
import "./history-row.css";
import OrderStatusSellingCard from "./order-status-selling-card";

export default function OrderStatusSellingRow() {
  return (
    <Row className="history-row-no-pad">
      <Col className="col-md-6 history-col-left-card">
        <OrderStatusSellingCard />
      </Col>
      <Col className="col-md-6 history-col-right-card">
        <OrderStatusSellingCard />
      </Col>
    </Row>
  );
}
