import Map from "./Map";
import NavLayout from "./NavLayout";
import SalesSection from "./SalesSection";

function App() {
  return (
    <div className="App">
      <div className="map-layout">
        <NavLayout />
        <Map />
      </div>
      <div className="sales-layout">
        <SalesSection />
      </div>
    </div>
  );
}

export default App;
