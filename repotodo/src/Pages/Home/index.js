import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInputs from "../../hooks/useInputs";

function HomePage() {
  const [{ owner, repository }, onChange] = useInputs({
    owner: "",
    repository: "",
  });
  const navigate = useNavigate();
  const onClickList = (owner, repository) => {
    navigate(`/${owner}/${repository}/issues`);
  };
  return (
    <>
      <HomeItem>
        <HomeDiv>
          <h1>환영합니다</h1>
          <h2>지금 바로 원하는 깃허브 이슈를 보러갈까요?</h2>
          <input
            placeholder="plz type in Owner "
            name="owner"
            onChange={onChange}
          />
          <input
            placeholder="plz type in Repo"
            name="repository"
            onChange={onChange}
          />
          <button onClick={() => onClickList(owner, repository)}>
            보러가기
          </button>
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
