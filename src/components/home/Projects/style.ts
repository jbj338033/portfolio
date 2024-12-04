import styled from "@emotion/styled";

export const Background = styled.section`
  width: 100%;
  padding: 120px 0;
  background: #f4f4f4;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      #222 0px,
      #222 6px,
      transparent 6px,
      transparent 12px
    );
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 40px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #222;
  margin: 0;
  font-family: "Space Mono", monospace;
  position: relative;
  display: inline-block;

  &:after {
    content: "_";
    animation: blink 1s step-end infinite;
    color: #ff3e3e;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    gap: 60px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin: 0 0 32px 0;
  font-family: "Space Mono", monospace;
  position: relative;
  padding-left: 24px;

  &:before {
    content: ">";
    position: absolute;
    left: 0;
    color: #ff3e3e;
  }
`;

export const FeaturedSection = styled.div``;

export const FeaturedGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsSection = styled.div``;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  background: white;
  border: 2px solid #222;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 6px 6px 0 #222;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 #222;
  }

  @media (max-width: 768px) {
    box-shadow: 4px 4px 0 #222;

    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0 #222;
    }
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-bottom: 2px solid #222;
`;

export const ProjectContent = styled.div`
  padding: 24px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Category = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 13px;
  color: #222;
  font-weight: 700;
  font-family: "Space Mono", monospace;
  transform: rotate(-1deg);
  box-shadow: 2px 2px 0 #222;
`;

export const Period = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #fff;
  border: 2px solid #222;
  color: #222;
  font-size: 13px;
  font-family: "Space Mono", monospace;
  box-shadow: 2px 2px 0 #222;

  svg {
    color: #ff3e3e;
  }
`;

export const OngoingText = styled.span`
  color: #ff3e3e;
  font-weight: 700;
`;

export const ProjectTitle = styled.h4`
  font-size: 20px;
  font-weight: 800;
  color: #222;
  margin: 0 0 20px 0;
  line-height: 1.4;
  font-family: "Space Mono", monospace;
`;

export const ProjectDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;

  li {
    position: relative;
    padding-left: 16px;
    margin-bottom: 8px;
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    font-family: "Space Mono", monospace;

    &:before {
      content: ">";
      position: absolute;
      left: 0;
      color: #ff3e3e;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px dashed #222; // 스킬 영역 구분용으로만 유지
`;

export const SkillItem = styled.span`
  padding: 6px 12px;
  background: #f8f9fa;
  border: 2px solid #222;
  color: #222;
  font-size: 13px;
  font-family: "Space Mono", monospace;
  transition: all 0.2s;
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0 #222;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 3px 3px 0 #222;
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  background: #ffe977;
  border: 2px solid #222;
  font-size: 13px;
  font-weight: 700;
  color: #222;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 1;
  font-family: "Space Mono", monospace;
  transform: rotate(3deg);
  box-shadow: 2px 2px 0 #222;

  svg {
    color: #ff3e3e;
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ModalContent = styled.div`
  background: white;
  border: 2px solid #222;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1000px;
  max-width: 95vw;
  max-height: 90vh;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: #222;
    z-index: -1;
    transform: translate(8px, 8px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
    border: none;

    &:before {
      display: none;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 32px;
  overflow-y: auto;

  > * + * {
    margin-top: 24px;
    padding-top: 24px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f4f4f4;
  }

  &::-webkit-scrollbar-thumb {
    background: #222;
    border: 2px solid #f4f4f4;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 32px;
  font-weight: 800;
  color: #222;
  margin: 0 0 20px 0;
  line-height: 1.3;
  font-family: "Space Mono", monospace;
`;

export const ProjectTeam = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  font-family: "Space Mono", monospace;
  margin-bottom: 32px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #f8f9fa;
  border: 2px solid #222;
  overflow: hidden;
`;

export const ImageTrack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
`;

export const ImageNavigation = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  color: #222;
  transition: all 0.2s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 3px 3px 0 #222;

  &.prev {
    left: 16px;
  }

  &.next {
    right: 16px;
  }

  &:hover {
    transform: translate(-2px, -2px) translateY(-50%);
    box-shadow: 5px 5px 0 #222;
    background: #ffe977;
  }

  svg {
    font-size: 24px;
  }
`;

export const ImageIndicator = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  padding: 8px;
  background: white;
  border: 2px solid #222;
`;

export const IndicatorDot = styled.button<{ active: boolean }>`
  width: ${(props) => (props.active ? "24px" : "8px")};
  height: 8px;
  background: ${(props) => (props.active ? "#222" : "#f8f9fa")};
  border: 2px solid #222;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.active ? "#222" : "#ffe977")};
  }
`;

export const SkillsSection = styled.div`
  padding: 24px;
  background: #f8f9fa;
  border: 2px solid #222;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  background: white;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  font-weight: 700;
  font-family: "Space Mono", monospace;
  text-decoration: none;
  transition: all 0.2s;
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 #222;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 5px 5px 0 #222;
    background: #ffe977;
  }
`;

export const DemoLink = styled(LinkButton)`
  border-color: #ff3e3e;
  color: #ff3e3e;

  &:hover {
    background: #ff3e3e;
    color: white;
  }
`;

export const DeprecatedUrl = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  background: #f8f9fa;
  border: 2px solid #ddd;
  color: #999;
  font-size: 14px;
  font-family: "Space Mono", monospace;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s;
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 #222;

  svg {
    font-size: 24px;
    color: #222;
  }

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 5px 5px 0 #222;
    background: #ff3e3e;

    svg {
      color: white;
    }
  }
`;
