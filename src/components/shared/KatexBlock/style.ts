import styled from "@emotion/styled";

export const Container = styled.div<{ isBlock: boolean }>`
  ${({ isBlock }) =>
    isBlock &&
    `
    width: 100%;
    overflow-x: auto;
    padding: 1rem;
    margin: 1rem 0;
  `}

  .katex {
    font-size: 1.1em;
  }

  .katex-display {
    margin: 0;
    > .katex {
      white-space: normal;
      text-align: left;
    }
  }

  .katex-html {
    white-space: normal;
    > .tag {
      position: relative;
    }
  }

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.light};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
  }
`;
