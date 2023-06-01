// @ts-nocheck
import "./index.scss";
// image imports
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg";
import {Slider} from "@mui/material";
import React, {useState} from "react";
import {LabelledInputMui} from "../../../../../PreviewSection/EditorControls/CameraControls";
import ReactImageMagnify from "react-image-magnify";
import {
    InvisibleFileUploader,
    LabelCentered,
    MedFontText11,
    RedButtonClass,
    WhiteButtonClass,
} from "../../../../../../StyledComponents";
import Draggable from "react-draggable";

const AddMaterialPopUp = () => {
    const [imageStatus, setImageStatus] = useState({
        baseMap: addPic,
        roughMap: addPic,
        normalMap: addPic,
        occulMap: addPic,
    });

    // here is the function that creates the preview.

    const FileToURL=(e)=>{
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageStatus((state) => {
          return {
            ...state,
            [`${e.target.name}`]: reader.result,
          };
        });
      }
    }
    return (
        <Draggable handle={".addHeader"}>
            <form className={"addMaterialPopUp"}>

                {/*here are the input forms*/}
                <InvisibleFileUploader
                    type={"file"}
                    name={"baseMap"}
                    className={"baseMap"}
                    onChange={FileToURL}
                />
                <InvisibleFileUploader
                    type={"file"}
                    name={"roughMap"}
                    className={"roughMap"}
                    onChange={FileToURL}
                />
                <InvisibleFileUploader
                    type={"file"}
                    name={"normalMap"}
                    className={"normalMap"}
                    onChange={FileToURL}
                />
                <InvisibleFileUploader
                    type={"file"}
                    name={"occulMap"}
                    className={"occulMap"}
                    onChange={FileToURL}
                />

                <p
                    style={{fontSize: "11px", fontWeight: 600}}
                    className={"addHeader"}
                >
                    Material
                </p>
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Name</p>
                    <p style={{marginLeft: "10px"}}>Material 1</p>
                </div>

                {/*color map*/}
                <div className={"bcolor"} style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Base Color</p>
                    <div
                        style={{display: "flex", alignItems: "center", marginTop: "5px"}}
                    >
                        <div
                            style={{
                                width: "46px",
                                height: "46px",
                                // background: "lightgrey",
                                borderRadius: "10px",
                                background: `url(${imageStatus.baseMap})`,
                            }}
                            onClick={() => {
                                document.querySelector(".baseMap").click();
                            }}
                        ></div>

                        {/*<div style={{*/}
                        {/*    borderRadius: "10px",*/}
                        {/*    width: "45px",*/}
                        {/*    height: "45px",*/}
                        {/*    overflow: "hidden"*/}
                        {/*}}*/}

                        {/* onClick={() => {*/}
                        {/*     document.querySelector(".baseMap").click();*/}
                        {/* }}*/}
                        {/*>*/}
                        {/*    <ReactImageMagnify*/}
                        {/*        {...{*/}
                        {/*            smallImage: {*/}
                        {/*                alt: 'Wristwatch by Ted Baker London',*/}
                        {/*                // isFluidWidth: true,*/}
                        {/*                src: imageStatus.baseMap,*/}
                        {/*                width: 45,*/}
                        {/*                height: 45*/}
                        {/*            },*/}
                        {/*            largeImage: {*/}
                        {/*                src: imageStatus.baseMap,*/}
                        {/*                width: 1000,*/}
                        {/*                height: 1000,*/}
                        {/*                zindex: 3*/}
                        {/*            },*/}
                        {/*            enlargedImageContainerDimensions: {*/}
                        {/*                width: '600%',*/}
                        {/*                height: '600%'*/}
                        {/*            },*/}
                        {/*            style: {*/}
                        {/*                borderRadius: "10px"*/}
                        {/*            }*/}
                        {/*        }} />*/}
                        {/*</div>*/}


                        &nbsp; &nbsp;
                        <LabelCentered>
                            <input type={"checkbox"}/>
                            Use transparent
                        </LabelCentered>
                    </div>
                </div>

                {/*  metalness map*/}
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Metalness Map</p>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <img src={addPic}/>
                        <div style={{marginLeft: "10px", width: "139px"}}>
                            <p>Metalness factor</p>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>

                {/*roughness map*/}
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Rougness Map</p>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <div
                            style={{
                                width: "46px",
                                height: "46px",
                                // background: "lightgrey",
                                borderRadius: "10px",
                                background: `url(${imageStatus.roughMap})`,
                            }}
                            onClick={() => {
                                document.querySelector(".roughMap").click();
                            }}
                        ></div>
                        <div style={{marginLeft: "10px", width: "139px"}}>
                            <p>Rougness factor</p>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>

                {/*normal map*/}
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>normal Map</p>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <div
                            style={{
                                width: "46px",
                                height: "46px",
                                // background: "lightgrey",
                                borderRadius: "10px",
                                background: `url(${imageStatus.normalMap})`,
                            }}
                            onClick={() => {
                                document.querySelector(".normalMap").click();
                            }}
                        ></div>
                        <div style={{marginLeft: "10px", width: "139px"}}>
                            <p>normal intensity</p>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>

                {/*emission map*/}
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Emission Map</p>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <img src={addPic}/>
                        <div style={{marginLeft: "10px", width: "139px"}}>
                            <p>normal factor</p>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>

                {/*occlusion map*/}
                <div style={{marginTop: "10px"}}>
                    <MedFontText11>Occlusion Map</MedFontText11>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <div
                            style={{
                                width: "46px",
                                height: "46px",
                                // background: "lightgrey",
                                borderRadius: "10px",
                                background: `url(${imageStatus.occulMap})`,
                            }}
                            onClick={() => {
                                document.querySelector(".occulMap").click();
                            }}
                        ></div>
                        <div style={{marginLeft: "10px", width: "139px"}}>
                            <p>occlusion factor</p>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </div>
                    </div>
                </div>

                {/*Here is the different checkboxes*/}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        marginTop: "11px",
                    }}
                >
                    <LabelCentered>
                        <input type={"checkbox"}/>
                        Enable IOR
                    </LabelCentered>
                    <LabelCentered>
                        <input type={"checkbox"}/>
                        Enable Clearcoat
                    </LabelCentered>
                    <LabelCentered>
                        <input type={"checkbox"}/>
                        Enable Transmission
                    </LabelCentered>
                    <LabelCentered>
                        <input type={"checkbox"}/>
                        Enable Transform
                    </LabelCentered>
                </div>

                {/*labelled controlls*/}
                <div style={{marginTop: "10px"}}>
                    <MedFontText11>Tiling</MedFontText11>
                    <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                        <LabelledInputMui label={"x"} width={"120px"}/>
                        <LabelledInputMui label={"y"} width={"120px"}/>
                    </div>
                </div>

                {/*tilling offset*/}
                <div style={{marginTop: "14px"}}>
                    <MedFontText11>Tiling offset</MedFontText11>
                    <div style={{width: "247px", marginTop: "9px"}}>
                        <p>X</p>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                    </div>

                    <div style={{width: "247px"}}>
                        <p>Y</p>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                    </div>
                </div>

                {/*tilling rotation*/}
                <div>
                    <MedFontText11>Tiling Rotation</MedFontText11>
                    <div style={{marginTop: "8px"}}>
                        <LabelledInputMui label={"Tiling rotation"} width={"120px"}/>
                    </div>
                </div>

                {/*button control*/}
                <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <RedButtonClass>Create</RedButtonClass>
                    <WhiteButtonClass>Remove</WhiteButtonClass>
                </div>
            </form>
        </Draggable>
    );
};
export default AddMaterialPopUp;
