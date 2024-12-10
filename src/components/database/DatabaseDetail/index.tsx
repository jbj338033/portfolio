import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BsCalendarWeek, BsBook, BsClock } from "react-icons/bs";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";
import * as S from "./style";
import { DatabaseEntry } from "../../../types/database";

interface CodeComponentProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface AssignmentData {
  title: string;
  description: string;
  dueDate: string;
}

const MarkdownRenderer = memo(({ content }: { content: string }) => (
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
));

MarkdownRenderer.displayName = "MarkdownRenderer";

const HeaderMeta = memo(
  ({ week, topic, date }: Pick<DatabaseEntry, "week" | "topic" | "date">) => (
    <S.HeaderMeta>
      <S.WeekBadge>
        <BsCalendarWeek aria-hidden="true" />
        <span>{week}주차</span>
      </S.WeekBadge>
      <S.TopicBadge>{topic}</S.TopicBadge>
      <S.Date>{date}</S.Date>
    </S.HeaderMeta>
  )
);

HeaderMeta.displayName = "HeaderMeta";

const Keywords = memo(({ keywords }: { keywords: string[] }) => (
  <S.Keywords>
    {keywords.map((keyword) => (
      <S.Keyword key={keyword}>{keyword}</S.Keyword>
    ))}
  </S.Keywords>
));

Keywords.displayName = "Keywords";

const Assignment = memo(({ title, description, dueDate }: AssignmentData) => (
  <S.Assignment>
    <S.AssignmentHeader>
      <S.AssignmentTitle>{title}</S.AssignmentTitle>
      <S.DueDate>
        <BsClock aria-hidden="true" />
        <span>제출기한: {dueDate}</span>
      </S.DueDate>
    </S.AssignmentHeader>
    <S.AssignmentContent>
      <MarkdownRenderer content={description} />
    </S.AssignmentContent>
  </S.Assignment>
));

Assignment.displayName = "Assignment";

const ResourceList = memo(
  ({ resources }: { resources: DatabaseEntry["resources"] }) => (
    <S.ResourceList>
      {resources?.map((resource) => (
        <S.ResourceLink
          key={resource.url}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.ResourceTitle>{resource.title}</S.ResourceTitle>
          <S.ResourceType>{resource.type}</S.ResourceType>
        </S.ResourceLink>
      ))}
    </S.ResourceList>
  )
);

ResourceList.displayName = "ResourceList";

const DatabaseDetail = () => {
  const { id } = useParams();

  const entry = useMemo(
    () => DATABASE_CLASS_ENTRIES.find((entry) => entry.id === Number(id)),
    [id]
  );

  if (!entry) return null;

  return (
    <S.Container>
      <S.Header>
        <HeaderMeta week={entry.week} topic={entry.topic} date={entry.date} />
        <S.Title>{entry.title}</S.Title>
        {entry.keywords.length > 0 && <Keywords keywords={entry.keywords} />}
      </S.Header>

      <S.Content>
        <MarkdownRenderer content={entry.content} />
      </S.Content>

      {entry.assignments?.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsClock aria-hidden="true" />
            <span>과제</span>
          </S.SectionTitle>
          <S.AssignmentList>
            {entry.assignments.map((assignment: AssignmentData) => (
              <Assignment key={assignment.title} {...assignment} />
            ))}
          </S.AssignmentList>
        </S.Section>
      )}

      {entry.resources?.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsBook aria-hidden="true" />
            <span>참고자료</span>
          </S.SectionTitle>
          <ResourceList resources={entry.resources} />
        </S.Section>
      )}
    </S.Container>
  );
};

export default memo(DatabaseDetail);
