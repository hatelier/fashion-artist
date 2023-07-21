import styled from "styled-components";
import {GrClose} from "react-icons/gr";
import {AiOutlineLink} from "react-icons/ai";
import {WhiteOnRed} from "../../Presets/SectionFive/CommentBox";

const PublishProject=()=>{
    return <PublishDiv>
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"flex-end",
        }}>
            <GrClose size={12}/>
        </div>
        <div className={"headerCtrl"} style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <p className={"pubHeader"}>Publish Project</p>
            <p style={{textAlign:"center",color: "#757575" }}>Website url:
                 &nbsp;<span style={{
                     color:"#000000"
                }}>https://www.momentumx.com/allproducts/</span>
                . Want to change the name? Edit in the textidield below.</p>
        </div>
        <div className={"inputCopy"}>
            <div style={{width:"100%",display:"flex",height:"max-content"}}>
                <div className={"subDiv"}
                     style={{
                         borderRadius:"5px 0 0 5px"
                     }}
                >
                    <div style={{
                        height:"100%",
                        display:"flex",
                        alignItems:"center",
                        padding:"3px 8px",
                        borderRight:"solid 1px #000000",
                    }}>
                        <AiOutlineLink size={24}/>
                    </div>
                </div>
                <div className={"cpyBox"}>
                    <input type={"text"} value={"https://www.momentumx.com/allproducts/"}/>
                </div>
                <BlackOnGrey>
                    Copy
                </BlackOnGrey>
            </div>
            <p className={"midBoldclass"} style={{
                marginTop:"10px"
            }}>Not Published</p>
        </div>
        <WhiteOnRed style={{marginTop:"25px", marginBottom:"15px"}}>
            Proceed
        </WhiteOnRed>
    </PublishDiv>
}

export default PublishProject;
const PublishDiv = styled.div`
  position: fixed;
  bottom: 220px;
  right: 0;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.10);
  background: #FAFAFA;
  border-radius: 25px;
  width: 483px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  .headerCtrl {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 9.5px;
    align-items: center;
  }
  .pubHeader {
    font-size: 24px;
    font-weight: 500;
  }
  .inputCopy {
    box-shadow: 0px 20px 31px 0px rgba(0, 0, 0, 0.15);
    width: 100%;
    background: #EAEAEA;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin-top: 25px;
    .subDiv {
      background: #FFFFFF;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .cpyBox {
      flex-grow: 1;
      input {
        border: none;
        padding: 0;
        height: 100%;
        width: 100%;
        font-size: 13px;
        padding-left: 12px;
        border-radius: 0 5px 5px 0;
      } 
    }
  }
`
const BlackOnGrey=styled.button`
  background: var(--text, #EAEAEA);
  padding: 0 9px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  height: 26px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-100%);
`
