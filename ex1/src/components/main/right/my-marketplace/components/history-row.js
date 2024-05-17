import HistoryCard from "./history-card";
import { Row, Col } from "react-bootstrap";
import "./history-row.css";

export default function HistoryRow() {
  return (
    <Row className="history-row-no-pad">
      <Col className="col-md-6 history-col-left-card">
        <HistoryCard />
      </Col>
      <Col className="col-md-6 history-col-right-card">
        <HistoryCard />
      </Col>
    </Row>
  );
}
