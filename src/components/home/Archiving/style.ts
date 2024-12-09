import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xxl} 0`};
  background: ${({ theme }) => theme.colors.background.default};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.container.md};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;

  span {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  flex-shrink: 0;
  transition: ${({ theme }) => theme.transition.fast};
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  transition: ${({ theme }) => theme.transition.fast};
`;

export const CardUrl = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const CardDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

export const ArchiveCard = styled.a`
  background: ${({ theme }) => theme.colors.background.default};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition.fast};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.light};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    ${IconWrapper} {
      background: ${({ theme }) => theme.colors.primary.light};
      color: ${({ theme }) => theme.colors.primary.main};
    }

    ${CardTitle} {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
