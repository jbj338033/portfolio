import * as S from "./style";
import { BsLink45Deg, BsGithub, BsInstagram } from "react-icons/bs";

const ARCHIVE_DATA = [
  {
    title: "GitHub",
    url: "github.com/jbj338033",
    description: "소스 코드 저장소",
    icon: <BsGithub />,
  },
  {
    title: "Instagram",
    url: "instagram.com/jbj338033",
    description: "인스타그램",
    icon: <BsInstagram />,
  },
];

const Archiving = () => {
  return (
    <S.Container id="archiving">
      <S.Inner>
        <S.TitleWrapper>
          <BsLink45Deg />
          <S.Title>ARCHIVING</S.Title>
        </S.TitleWrapper>
        <S.Content>
          {ARCHIVE_DATA.map((item) => (
            <S.ArchiveCard
              key={item.title}
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.title}`}
            >
              <S.IconWrapper>{item.icon}</S.IconWrapper>
              <S.TextContent>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardUrl>{item.url}</S.CardUrl>
                <S.CardDescription>{item.description}</S.CardDescription>
              </S.TextContent>
            </S.ArchiveCard>
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default Archiving;
