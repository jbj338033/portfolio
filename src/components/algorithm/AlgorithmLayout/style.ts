import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1a1b1e;
`;

export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;
