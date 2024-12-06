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

  const renderMarkdown = (content: string) => (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }: CodeComponentProps) {
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
      {content}
    </ReactMarkdown>
  );

  return (
    <S.Container>
      <S.Header>
        <S.HeaderMeta>
          <S.WeekBadge>
            <BsCalendarWeek />
            <span>{entry.week}주차</span>
          </S.WeekBadge>
          <S.TopicBadge>{entry.topic}</S.TopicBadge>
          <S.Date>{entry.date}</S.Date>
        </S.HeaderMeta>

        <S.Title>{entry.title}</S.Title>

        {entry.keywords.length > 0 && (
          <S.Keywords>
            {entry.keywords.map((keyword, index) => (
              <S.Keyword key={index}>{keyword}</S.Keyword>
            ))}
          </S.Keywords>
        )}
      </S.Header>

      <S.Content>{renderMarkdown(entry.content)}</S.Content>

      {entry.assignments && entry.assignments.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsClock />
            <span>과제</span>
          </S.SectionTitle>
          <S.AssignmentList>
            {entry.assignments.map((assignment, index) => (
              <S.Assignment key={index}>
                <S.AssignmentHeader>
                  <S.AssignmentTitle>{assignment.title}</S.AssignmentTitle>
                  <S.DueDate>
                    <BsClock />
                    <span>제출기한: {assignment.dueDate}</span>
                  </S.DueDate>
                </S.AssignmentHeader>
                <S.AssignmentContent>
                  {renderMarkdown(assignment.description)}
                </S.AssignmentContent>
              </S.Assignment>
            ))}
          </S.AssignmentList>
        </S.Section>
      )}

      {entry.resources && entry.resources.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsBook />
            <span>참고자료</span>
          </S.SectionTitle>
          <S.ResourceList>
            {entry.resources.map((resource, index) => (
              <S.ResourceLink
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.ResourceTitle>{resource.title}</S.ResourceTitle>
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
