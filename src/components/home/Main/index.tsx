import * as S from "./style";
import background from "../../../assets/images/background.jpg";
import { BsArrowDownCircle } from "react-icons/bs";

const Main = () => {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const headerHeight = 60;
    window.scrollTo({
      top: aboutSection.offsetTop - headerHeight,
      behavior: "smooth",
    });
  };

  return (
    <S.Container id="home">
      <S.Background src={background} alt="" role="presentation" />
      <S.Overlay />
      <S.Inner>
        <S.Content>
          <S.Texts>
            <S.Greeting>Hello, World!</S.Greeting>
            <S.Title>
              안녕하세요<S.Dot>.</S.Dot>
            </S.Title>
            <S.Subtitle>
              열정적인 백엔드 개발자
              <br />
              <S.Name>전민오</S.Name>입니다.
            </S.Subtitle>
            <S.Description>
              사용자 경험과 기술적 성능을 모두 고려하는
              <br />
              개발자를 목표로 하고 있습니다.
            </S.Description>
          </S.Texts>
          <S.ScrollButton onClick={handleLearnMore}>
            <S.ScrollText>더 알아보기</S.ScrollText>
            <BsArrowDownCircle size={24} />
          </S.ScrollButton>
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default Main;
