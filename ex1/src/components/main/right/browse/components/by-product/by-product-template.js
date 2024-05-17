import { Row, col, Container } from "react-bootstrap";
import ByProductCard from "./by-product-card";
import AddOrderCard from "../../../../../cards-comp/add-order-card";

export default function ByProductTemplate() {
  return (
    <>
      <Container>
        <AddOrderCard />
        <ByProductCard />
      </Container>

      {/* <Row className="alinhavar">
        <ByProductCard />
        <ByProductCard />
        <ByProductCard />
      </Row>
      <Row className="alinhavar">
        <ByProductCard />
        <ByProductCard />
        <ByProductCard />
      </Row>
      <Row className="alinhavar">
        <ByProductCard />
        <ByProductCard />
        <ByProductCard />
      </Row>
      <Row className="alinhavar">
        <ByProductCard />
        <ByProductCard />
        <ByProductCard />
      </Row>
      <Row className="alinhavar">
        <ByProductCard />
        <ByProductCard />
        <ByProductCard />
      </Row> */}
    </>
  );
}
