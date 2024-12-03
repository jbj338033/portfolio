import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/home/HomeLayout";
import Home from "./pages/Home";
import NarshaLayout from "./components/narsha/NarshaLayout";
import NarshaDetail from "./components/narsha/NarshaDetail";
import DatabaseLayout from "./components/database/DatabaseLayout";
import DatabaseDetail from "./components/database/DatabaseDetail";
import NarshaList from "./components/narsha/NarshaList";
import NarshaDiaryContainer from "./components/narsha/NarshaDiaryContainer";
import DataStructureListPage from "./components/data-structure/DataStructureListPage";
import DataStructureLayout from "./components/data-structure/DataStructureLayout";
import DataStructurePage from "./components/data-structure/DataStructurePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 레이아웃 및 메인 페이지 */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* 나르샤 섹션 */}
        <Route path="/narsha" element={<NarshaLayout />}>
          {/* 프로젝트 목록 */}
          <Route index element={<NarshaList />} />

          {/* 특정 프로젝트의 일지 목록 */}
          <Route path=":projectId" element={<NarshaDiaryContainer />} />

          {/* 특정 프로젝트의 특정 일지 상세 */}
          <Route path=":projectId/:entryId" element={<NarshaDetail />} />
        </Route>

        {/* 데이터베이스 섹션 */}
        <Route path="/database" element={<DatabaseLayout />}>
          <Route path=":id" element={<DatabaseDetail />} />
        </Route>

        <Route path="/data-structure" element={<DataStructureLayout />}>
          <Route index element={<DataStructureListPage />} />
          <Route
            path=":structureId/topic/:topicId"
            element={<DataStructurePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
