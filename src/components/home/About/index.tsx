import * as S from "./style";
import {
  BsPerson,
  BsTelephone,
  BsCalendarDate,
  BsEnvelope,
  BsGeoAlt,
  BsBook,
} from "react-icons/bs";

const ABOUT_INFO = [
  {
    icon: <BsPerson />,
    key: "이름",
    value: "전민오",
  },
  {
    icon: <BsTelephone />,
    key: "연락처",
    value: "010-3105-4581",
  },
  {
    icon: <BsCalendarDate />,
    key: "생년월일",
    value: "08.12.20",
  },
  {
    icon: <BsEnvelope />,
    key: "이메일",
    value: "jbj338033@gmail.com",
  },
  {
    icon: <BsGeoAlt />,
    key: "위치",
    value: "경상북도 청도군",
  },
  {
    icon: <BsBook />,
    key: "학력",
    value: "대구소프트웨어마이스터고등학교\n(소프트웨어 개발과)",
  },
];

const About = () => {
  return (
    <S.Container id="about">
      <S.Inner>
        <S.Header>
          <S.Title>About</S.Title>
          <S.Description>기본적인 인적사항을 소개합니다</S.Description>
        </S.Header>
        <S.Content>
          {ABOUT_INFO.map((info) => (
            <S.InfoItem key={info.key}>
              <S.IconWrapper>{info.icon}</S.IconWrapper>
              <S.TextWrapper>
                <S.Label>{info.key}</S.Label>
                <S.Value>{info.value}</S.Value>
              </S.TextWrapper>
            </S.InfoItem>
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default About;
