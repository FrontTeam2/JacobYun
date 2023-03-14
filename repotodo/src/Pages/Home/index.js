import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
  const navigate = useNavigate();

  const onClickList = () => {
    navigate("/list");
  };
  return (
    <>
      <HomeItem>
        <HomeDiv>
          <h1>환영합니다</h1>
          <h2>지금 바로 깃허브 이슈를 보러갈까요?</h2>
          <button onClick={onClickList}>보러가기</button>
        </HomeDiv>
      </HomeItem>
    </>
  );
}
export default HomePage;

const HomeItem = styled.main`
  height: 90vh;
  padding: 3rem 0 3rem;
  position: relative;
`;

const HomeDiv = styled.div`
  position: absolute;
  top: 50%;

  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
