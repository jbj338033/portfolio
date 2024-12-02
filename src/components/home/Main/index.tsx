import * as S from "./style";
import background from "../../assets/images/background.jpg";
import { BsArrowRight } from "react-icons/bs";

const Main = () => {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const headerHeight = 60; // Header의 높이
    window.scrollTo({
      top: aboutSection.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <S.Container background={background} id="home">
      <S.Overlay />
      <S.Inner>
        <S.Title>포트폴리오</S.Title>
        <S.Subtitle>안녕하세요, 전민오입니다.</S.Subtitle>
        <S.Description>백엔드를 개발하고 있습니다.</S.Description>
        <S.Button onClick={handleLearnMore}>
          더 알아보기
          <BsArrowRight />
        </S.Button>
      </S.Inner>
    </S.Container>
  );
};

export default Main;
