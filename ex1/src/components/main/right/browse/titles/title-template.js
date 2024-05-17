import ByProductTitle from "./by-product-title";
import ByStoreTitle from "./by-store-title";

export default function TitleSelectBrowse(BrowseByOne) {
  console.log(BrowseByOne);
  if (BrowseByOne === "0") {
    return <ByProductTitle />;
  } else if (BrowseByOne === "1") {
    return <ByStoreTitle />;
  }
}
