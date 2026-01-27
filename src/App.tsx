import CountryCity from "./components/CountryCity";
import Locality from "./components/Locality";

function App() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1 className="text-md font-bold">
        this is a project to understand goggle places api
      </h1>

      <CountryCity />
      <Locality/>
    </div>
  );
}

export default App;
