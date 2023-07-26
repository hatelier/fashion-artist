import styled from "styled-components";

const TutorialComp = () => {
  return (
    <TutorialCompDiv>
      <BlackOnGrey>
        <p className={"midBoldclass"}>Tutorial</p>
      </BlackOnGrey>
      <BlackOnGrey>
        <p className={"midBoldclass"}>Editor Overview</p>
      </BlackOnGrey>
    </TutorialCompDiv>
  );
};
const TutorialCompDiv = styled.div``;
const BlackOnGrey = styled.div`
  border-radius: 5px;
  background: #e3e3e3;
  padding: 7px 10px;
  width: 90%;
  margin: 15px auto 0 auto;
`;

export default TutorialComp;
