import { useCallback, useMemo, memo } from "react";
import * as S from "./style";
import background from "../../../assets/images/background.jpg";
import { BsArrowDownCircle } from "react-icons/bs";

const HEADER_HEIGHT = 60;

interface BackgroundProps {
  src: string;
  alt: string;
  role: "presentation";
  loading: "eager";
  fetchpriority: "high" | "low" | "auto";
}

const MainContent = memo(() => (
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
));

MainContent.displayName = "MainContent";

const Main = () => {
  const backgroundProps = useMemo<BackgroundProps>(
    () => ({
      src: background,
      alt: "",
      role: "presentation",
      loading: "eager",
      fetchpriority: "high",
    }),
    []
  );

  const handleLearnMore = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const targetPosition = aboutSection.offsetTop - HEADER_HEIGHT;

    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, targetPosition);
    }
  }, []);

  return (
    <S.Container id="home">
      <S.Background {...backgroundProps} />
      <S.Overlay aria-hidden="true" />
      <S.Inner>
        <S.Content>
          <MainContent />
          <S.ScrollButton onClick={handleLearnMore} aria-label="더 알아보기">
            <S.ScrollText>더 알아보기</S.ScrollText>
            <BsArrowDownCircle size={24} aria-hidden="true" />
          </S.ScrollButton>
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Main);
