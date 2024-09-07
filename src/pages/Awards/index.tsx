import {
  Award,
  AwardDate,
  AwardDescription,
  AwardText,
  AwardTitle,
  AwardWrapper,
  Container,
  Title,
} from "./style";

const Awards = () => {
  return (
    <Container>
      <Title>Awards</Title>

      <AwardWrapper>
        <Award>
          <AwardDate>April 1, 2024</AwardDate>

          <AwardText>
            <AwardTitle>Best of the Year</AwardTitle>
            <AwardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              sequi corporis facere magni in error qui, dolorem eligendi ipsam?
              Obcaecati eius ex dignissimos maiores pariatur repudiandae eaque
              fuga nisi dolorem.
            </AwardDescription>
          </AwardText>
        </Award>

        <Award>
          <AwardDate>April 1, 2024</AwardDate>

          <AwardText>
            <AwardTitle>Best of the Year</AwardTitle>
            <AwardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              sequi corporis facere magni in error qui, dolorem eligendi ipsam?
              Obcaecati eius ex dignissimos maiores pariatur repudiandae eaque
              fuga nisi dolorem.
            </AwardDescription>
          </AwardText>
        </Award>
      </AwardWrapper>
    </Container>
  );
};

export default Awards;
