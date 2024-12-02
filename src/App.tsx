import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/home/HomeLayout";
import Home from "./pages/Home";
import NarshaLayout from "./components/narsha/NarshaLayout";
import NarshaDetail from "./components/narsha/NarshaDetail";
import DatabaseLayout from "./components/database/DatabaseLayout";
import DatabaseDetail from "./components/database/DatabaseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/narsha" element={<NarshaLayout />}>
          <Route path=":id" element={<NarshaDetail />} />
        </Route>

        <Route path="/database" element={<DatabaseLayout />}>
          <Route path=":id" element={<DatabaseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
