import styled from '@emotion/styled';

const Row = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 9.5rem 0.2rem 5rem;
`;

function Container({ ...others }) {
  return <Row {...others} />;
}

export default Container;
