import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      {[...Array(100)].map((_, index) => (
        <div key={index}>Home</div>
      ))}
    </Container>
  );
};

export default Home;
