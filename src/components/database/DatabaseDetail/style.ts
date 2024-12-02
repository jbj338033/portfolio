import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Header = styled.header`
  margin-bottom: 48px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const WeekBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2563eb;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
`;

export const TopicBadge = styled.div`
  background: #0d9488;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
`;

export const Date = styled.span`
  color: #94a3b8;
  font-size: 14px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  color: #e2e8f0;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 48px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin: 40px 0 20px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 32px 0 16px;
  }

  p {
    margin-bottom: 16px;
  }

  ul,
  ol {
    margin-bottom: 16px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #60a5fa;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    border-left: 4px solid #2563eb;
    padding-left: 16px;
    margin: 24px 0;
    color: #94a3b8;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 24px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
  }

  th,
  td {
    border: 1px solid #1e3a5f;
    padding: 12px;
    text-align: left;
  }

  th {
    background: #1e3a5f;
    color: #fff;
  }
`;

export const CodeBlock = styled.code`
  display: block;
  background: #0a1929;
  padding: 16px;
  border-radius: 8px;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  line-height: 1.6;
  overflow-x: auto;
  margin: 24px 0;
`;

export const Section = styled.section`
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid #1e3a5f;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 24px;
`;

export const Assignment = styled.div`
  background: #0f2942;
  border: 1px solid #1e3a5f;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 8px;
  }
`;

export const AssignmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
`;

export const DueDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fb7185;
  font-size: 14px;
  white-space: nowrap;
`;

export const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResourceItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #0f2942;
  border: 1px solid #1e3a5f;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #1e3a5f;
    transform: translateY(-2px);
  }

  svg {
    color: #60a5fa;
    font-size: 20px;
  }
`;

export const ResourceType = styled.span`
  margin-left: auto;
  background: #1e3a5f;
  color: #94a3b8;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;
