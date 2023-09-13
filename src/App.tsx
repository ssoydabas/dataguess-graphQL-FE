import "./App.css";

import { Navigation, CountriesList } from "./components";

function App() {
  return (
    <div className="app h-screen">
      <Navigation />
      <CountriesList />
    </div>
  );
}

export default App;
