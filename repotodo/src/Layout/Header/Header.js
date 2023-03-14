import styled from "styled-components";

function BasicHeader() {
  return (
    <>
      <HeaderItem>
        <HeaderTitle>GitHub Issues Pages</HeaderTitle>
      </HeaderItem>
    </>
  );
}

export default BasicHeader;

const HeaderItem = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 0 10px 0;
`;

const HeaderTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
`;
