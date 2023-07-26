// @ts-nocheck
import styled from "styled-components";
import { PiCaretRightBold } from "react-icons/pi";
import { useSelector } from "react-redux";

const VersionControl = () => {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const versionTrigger = useSelector(
    (state) => state.materialApplication.versionTrigger
  );
  return (
    <VersionControlDiv>
      <p
        className={"midBoldclass"}
        style={{ marginTop: "10px", marginBottom: "14px" }}
      >
        LATEST VERSIONS
      </p>
      {versionTrigger.length > 0 && (
        <>
          {versionTrigger
            .map((mapped, index) => {
              return (
                <div className={"versionBox"}>
                  <div>
                    <PiCaretRightBold />
                  </div>
                  <div>
                    <p className={"midBoldclass"} style={{ fontSize: "15px" }}>
                      {mapped.time}
                    </p>
                    {index === versionTrigger.length - 1 && (
                      <p style={{ marginTop: "2px", fontSize: "13px" }}>
                        Current Version
                      </p>
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                        marginTop: "3px",
                      }}
                    >
                      <div
                        style={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          backgroundColor: `${getRandomColor()}`,
                        }}
                      ></div>
                      <p style={{ marginTop: "2px" }}>{mapped.name}</p>
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
        </>
      )}
    </VersionControlDiv>
  );
};
const VersionControlDiv = styled.div`
  .versionBox {
    display: flex;
    gap: 9px;
    margin-bottom: 20px;
  }
`;
export default VersionControl;
