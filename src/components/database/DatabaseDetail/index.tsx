import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BsCalendarWeek, BsBook, BsClock } from "react-icons/bs";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";
import * as S from "./style";

interface CodeComponentProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const DatabaseDetail = () => {
  const { id } = useParams();
  const entry = DATABASE_CLASS_ENTRIES.find((entry) => entry.id === Number(id));

  if (!entry) return null;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderMeta>
          <S.WeekBadge>
            <BsCalendarWeek />
            {entry.week}주차
          </S.WeekBadge>
          <S.TopicBadge>{entry.topic}</S.TopicBadge>
          <S.Date>{entry.date}</S.Date>
        </S.HeaderMeta>
        <S.Title>{entry.title}</S.Title>
        <S.Keywords>
          {entry.keywords.map((keyword, index) => (
            <S.Keyword key={index}>{keyword}</S.Keyword>
          ))}
        </S.Keywords>
      </S.Header>

      <S.Content>
        <ReactMarkdown
          components={{
            code({
              inline,
              className,
              children,
              ...props
            }: CodeComponentProps) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <S.CodeBlock className={className} {...props}>
                  {children}
                </S.CodeBlock>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {entry.content}
        </ReactMarkdown>
      </S.Content>

      {entry.assignments && (
        <S.Section>
          <S.SectionTitle>
            <BsClock />
            과제
          </S.SectionTitle>
          {entry.assignments.map((assignment, index) => (
            <S.Assignment key={index}>
              <S.AssignmentHeader>
                <S.AssignmentTitle>{assignment.title}</S.AssignmentTitle>
                <S.DueDate>제출기한: {assignment.dueDate}</S.DueDate>
              </S.AssignmentHeader>
              <ReactMarkdown>{assignment.description}</ReactMarkdown>
            </S.Assignment>
          ))}
        </S.Section>
      )}

      {entry.resources && (
        <S.Section>
          <S.SectionTitle>
            <BsBook />
            참고자료
          </S.SectionTitle>
          <S.ResourceList>
            {entry.resources.map((resource, index) => (
              <S.ResourceLink key={index} href={resource.url} target="_blank">
                <span>{resource.title}</span>
                <S.ResourceType>{resource.type}</S.ResourceType>
              </S.ResourceLink>
            ))}
          </S.ResourceList>
        </S.Section>
      )}
    </S.Container>
  );
};

export default DatabaseDetail;
