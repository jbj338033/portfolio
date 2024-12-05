import * as S from "./style";
import { BsGithub } from "react-icons/bs";

const ARCHIVE_DATA = [
  {
    title: "GitHub",
    url: "github.com/jbj338033",
    description: "소스 코드 저장소",
    icon: <BsGithub />,
  },
];

const Archiving = () => {
  return (
    <S.Container id="archiving">
      <S.Inner>
        <S.Header>
          <S.Title>Archiving</S.Title>
          <S.Description>저를 표현하는 다양한 공간입니다</S.Description>
        </S.Header>

        <S.Content>
          {ARCHIVE_DATA.map((item) => (
            <S.ArchiveCard
              key={item.title}
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
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
