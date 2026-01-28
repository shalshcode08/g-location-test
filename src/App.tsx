import { BrowserRouter, Route, Routes } from "react-router";
import { AppRoutes } from "./Routes";

import Home from "./App/Home";
import V1App from "./App/V1";
import V2App from "./App/V2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Home />} />
        <Route path={AppRoutes.V1} element={<V1App />} />
        <Route path={AppRoutes.V2} element={<V2App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
