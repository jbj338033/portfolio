import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import School from "./pages/School";
import NarshaLayout from "./components/narsha/NarshaLayout";
import NarshaDetail from "./components/narsha/NarshaDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="school" element={<School />} />
        </Route>

        <Route path="/narsha" element={<NarshaLayout />}>
          <Route path=":id" element={<NarshaDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
