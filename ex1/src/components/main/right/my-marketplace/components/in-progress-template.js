import OrderStatusRow from "./order-status-buying-row";
import OrderStatusSellingRow from "./order-status-selling-row";

export default function InProgressTemplate(data) {
  if (data.data === "0") {
    return (
      <>
        <OrderStatusRow />
        <OrderStatusRow />
        <OrderStatusRow />
        <OrderStatusRow />
        <OrderStatusRow />
      </>
    );
  } else if (data.data === "1") {
    return (
      <>
        <OrderStatusSellingRow />
        <OrderStatusSellingRow />
        <OrderStatusSellingRow />
        <OrderStatusSellingRow />
        <OrderStatusSellingRow />
      </>
    );
  }
}
