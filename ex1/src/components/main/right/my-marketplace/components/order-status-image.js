export default function OrderStatusImage({ product }) {
  console.log(product);
  let str =
    "../../../../../../backend/src/public/product-images/" + { product };

  return;
  <img src={product} className="status-image" />;
}
