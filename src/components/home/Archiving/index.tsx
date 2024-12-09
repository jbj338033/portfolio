import { memo } from "react";
import * as S from "./style";
import { BsGithub } from "react-icons/bs";
import { IconType } from "react-icons";

interface ArchiveItem {
  title: string;
  url: string;
  description: string;
  icon: IconType;
}

const ARCHIVE_DATA: readonly ArchiveItem[] = [
  {
    title: "GitHub",
    url: "github.com/jbj338033",
    description: "소스 코드 저장소",
    icon: BsGithub,
  },
] as const;

const Header = memo(() => (
  <S.Header>
    <S.Title>Archiving</S.Title>
    <S.Description>저를 표현하는 다양한 공간입니다</S.Description>
  </S.Header>
));

Header.displayName = "Header";

const ArchiveCard = memo(({ item }: { item: ArchiveItem }) => {
  const Icon = item.icon;

  return (
    <S.ArchiveCard
      href={`https://${item.url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.IconWrapper>
        <Icon aria-hidden="true" />
      </S.IconWrapper>
      <S.TextContent>
        <S.CardTitle>{item.title}</S.CardTitle>
        <S.CardUrl>{item.url}</S.CardUrl>
        <S.CardDescription>{item.description}</S.CardDescription>
      </S.TextContent>
    </S.ArchiveCard>
  );
});

ArchiveCard.displayName = "ArchiveCard";

const Archiving = () => {
  return (
    <S.Container id="archiving">
      <S.Inner>
        <Header />
        <S.Content>
          {ARCHIVE_DATA.map((item) => (
            <ArchiveCard key={item.title} item={item} />
          ))}
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Archiving);
