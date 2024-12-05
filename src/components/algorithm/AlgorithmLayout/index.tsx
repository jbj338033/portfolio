import { Outlet } from "react-router-dom";
import AlgorithmSidebar from "../AlgorithmSidebar";
import AlgorithmHeader from "../AlgorithmHeader";
import * as S from "./style";

const AlgorithmLayout = () => {
  return (
    <S.LayoutContainer>
      <AlgorithmSidebar />
      <S.MainContainer>
        <AlgorithmHeader />
        <S.Content>
          <Outlet />
        </S.Content>
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default AlgorithmLayout;
