import styled from '@emotion/styled';

const HeaderBase = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #000;
  width: 100%;
`;

const Welcome = styled.header`
  display: flex;
  color: #fff;
  font-size: 2.5rem;
`;

const Date = styled.header`
  color: #f04e4a;
  margin-left: 8px;
  font-weight: 500;
`;

function Header() {
  return (
    <HeaderBase>
      <Welcome>
        Los mejores menus de México <Date>2021</Date>
      </Welcome>
    </HeaderBase>
  );
}

export default Header;
