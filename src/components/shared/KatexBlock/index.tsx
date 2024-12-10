import { memo } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import * as S from "./style";

interface Props {
  math: string;
  block?: boolean;
  errorColor?: string;
}

const KatexBlock = memo(
  ({ math, block = true, errorColor = "#cc0000" }: Props) => (
    <S.Container isBlock={block}>
      {block ? (
        <BlockMath
          math={math}
          errorColor={errorColor}
          renderError={() => <span style={{ color: errorColor }}>{math}</span>}
        />
      ) : (
        <InlineMath
          math={math}
          errorColor={errorColor}
          renderError={() => <span style={{ color: errorColor }}>{math}</span>}
        />
      )}
    </S.Container>
  )
);

KatexBlock.displayName = "KatexBlock";

export default KatexBlock;
