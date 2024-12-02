import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { BsCalendarWeek, BsBook, BsClockHistory } from "react-icons/bs";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";
import * as S from "./style";

const DatabaseDetail = () => {
  const { id } = useParams();
  const entry = DATABASE_CLASS_ENTRIES.find((entry) => entry.id === Number(id));

  if (!entry) return null;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTop>
          <S.WeekBadge>
            <BsCalendarWeek />
            {entry.week}주차
          </S.WeekBadge>
          <S.TopicBadge>{entry.topic}</S.TopicBadge>
          <S.Date>{entry.date}</S.Date>
        </S.HeaderTop>
        <S.Title>{entry.title}</S.Title>
      </S.Header>

      <S.Content>
        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
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
          <S.SectionTitle>과제</S.SectionTitle>
          {entry.assignments.map((assignment, index) => (
            <S.Assignment key={index}>
              <S.AssignmentHeader>
                <h4>{assignment.title}</h4>
                <S.DueDate>
                  <BsClockHistory />
                  제출기한: {assignment.dueDate}
                </S.DueDate>
              </S.AssignmentHeader>
              <ReactMarkdown>{assignment.description}</ReactMarkdown>
            </S.Assignment>
          ))}
        </S.Section>
      )}

      {entry.resources && (
        <S.Section>
          <S.SectionTitle>참고자료</S.SectionTitle>
          <S.ResourceList>
            {entry.resources.map((resource, index) => (
              <S.ResourceItem key={index} href={resource.url} target="_blank">
                <BsBook />
                <span>{resource.title}</span>
                <S.ResourceType>{resource.type}</S.ResourceType>
              </S.ResourceItem>
            ))}
          </S.ResourceList>
        </S.Section>
      )}
    </S.Container>
  );
};

export default DatabaseDetail;
