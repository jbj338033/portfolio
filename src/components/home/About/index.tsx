import { memo } from "react";
import * as S from "./style";
import {
  BsPerson,
  BsTelephone,
  BsCalendarDate,
  BsEnvelope,
  BsGeoAlt,
  BsBook,
} from "react-icons/bs";
import { IconType } from "react-icons";

interface AboutInfo {
  icon: IconType;
  key: string;
  value: string;
}

interface InfoItemProps {
  icon: IconType;
  label: string;
  value: string;
}

// 상수 데이터
const ABOUT_INFO: readonly AboutInfo[] = [
  {
    icon: BsPerson,
    key: "이름",
    value: "전민오",
  },
  {
    icon: BsTelephone,
    key: "연락처",
    value: "010-3105-4581",
  },
  {
    icon: BsCalendarDate,
    key: "생년월일",
    value: "08.12.20",
  },
  {
    icon: BsEnvelope,
    key: "이메일",
    value: "jbj338033@gmail.com",
  },
  {
    icon: BsGeoAlt,
    key: "위치",
    value: "경상북도 청도군",
  },
  {
    icon: BsBook,
    key: "학력",
    value: "대구소프트웨어마이스터고등학교\n(소프트웨어 개발과)",
  },
] as const;

// InfoItem 컴포넌트
const InfoItem = memo(({ icon: Icon, label, value }: InfoItemProps) => (
  <S.InfoItem>
    <S.IconWrapper>
      <Icon aria-hidden="true" />
    </S.IconWrapper>
    <S.TextWrapper>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.TextWrapper>
  </S.InfoItem>
));

InfoItem.displayName = "InfoItem";

// Header 컴포넌트
const Header = memo(() => (
  <S.Header>
    <S.Title>About</S.Title>
    <S.Description>기본적인 인적사항을 소개합니다</S.Description>
  </S.Header>
));

Header.displayName = "Header";

// 메인 About 컴포넌트
const About = () => {
  return (
    <S.Container id="about">
      <S.Inner>
        <Header />
        <S.Content>
          {ABOUT_INFO.map(({ icon, key, value }) => (
            <InfoItem key={key} icon={icon} label={key} value={value} />
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(About);
