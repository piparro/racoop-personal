import NewArrivals from "../../components/main/left/new-arrivals/left-new-arrivals";

export default function Mainu() {
  return (
    <div className="container-fluid main-container">
      <div className="row main-row">
        <div className="col-md-3 main-left-col">
          <div className="container-fluid main-left-col-container">
            <div>
              {/*Insert left col here*/}
              <NewArrivals />
            </div>
          </div>
        </div>
        <div className="col-md-9 main-right-col">
          <div className="container-fluid overflow overflow-scroll overflow-x-hidden main-right-col-container">
            {/* <ShowoffRight /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
