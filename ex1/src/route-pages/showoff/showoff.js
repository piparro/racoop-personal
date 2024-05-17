import Header from "../../components/header/header";
import CancelConfirm from "../../components/main-unusual/registry and crud/requests/cancel-confirm";
import EmailSentOverlay from "../../components/main-unusual/registry and crud/requests/email-sent";
import ProcceedToCart from "../../components/main-unusual/registry and crud/requests/proceed-to-cart";
import SellRequest from "../../components/main-unusual/registry and crud/requests/sell-request";
import Mainu from "./mainu";

export default function Showoff() {
  return (
    <>
      <Header />;
      <Mainu />
      <ProcceedToCart />
      <SellRequest />
      <EmailSentOverlay />
      <CancelConfirm />
    </>
  );
}
