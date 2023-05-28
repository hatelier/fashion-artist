import "./index.scss";
// image imports
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg"
import {Slider} from "@mui/material";
import React from "react";
import {LabelledInputMui} from "../../../../../PreviewSection/EditorControls/CameraControls";
import {MedFontText11, RedButtonClass, WhiteButtonClass} from "../../../../../../StyledComponents";
import Draggable from "react-draggable";

const AddMaterialPopUp = () => {
    return (
        <Draggable
            handle={".addHeader"}
        >
            <form className={"addMaterialPopUp"}>
                <p style={{fontSize: "11px", fontWeight: 600}} className={"addHeader"}>Material</p>
                <div style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Name</p>
                    <p style={{marginLeft: "10px"}}>Material 1</p>
                </div>

                {/*color map*/}
                <div className={"bcolor"} style={{marginTop: "10px"}}>
                    <p style={{fontSize: "11px", fontWeight: 600}}>Base Color</p>
                    <div style={{display: "flex", alignItems: 'center', marginTop: "5px"}}>
                        <div style={{
                            width: "46px",
                            height: "46px",
                            background: "lightgrey",
                            borderRadius: "10px"
                        }}></div>
                        &nbsp;
                        &nbsp;
                        <label style={{fontFamily: "Open Sans", fontWeight: 500, fontSize: "11px"}}>
                            <input type={"checkbox"}/>
                            &nbsp; Use transparent
                        </label>
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
                        <img src={addPic}/>
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
                        <img src={addPic}/>
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
                    <MedFontText11>
                        Occlusion Map
                    </MedFontText11>
                    <div style={{display: "flex", marginTop: "5px"}}>
                        <img src={addPic}/>
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
                <div style={{display: "flex", flexDirection: "column", gap: "15px", marginTop: "11px"}}>
                    <label style={{fontFamily: "Open Sans", fontWeight: 500, fontSize: "11px", alignItems: "center"}}>
                        <input type={"checkbox"}/>
                        &nbsp; Enable IOR
                    </label>
                    <label
                        style={{fontFamily: "Open Sans", fontWeight: 500, fontSize: "11px", alignItems: "center"}}>
                        <input type={"checkbox"}/>
                        &nbsp; Enable Clearcoat
                    </label>
                    <label style={{fontFamily: "Open Sans", fontWeight: 500, fontSize: "11px", alignItems: "center"}}>
                        <input type={"checkbox"}/>
                        &nbsp; Enable Transmission
                    </label>
                    <label style={{fontFamily: "Open Sans", fontWeight: 500, fontSize: "11px", alignItems: "center"}}>
                        <input type={"checkbox"}/>
                        &nbsp; Enable Transform
                    </label>
                </div>

                {/*labelled controlls*/}
                <div style={{marginTop: "10px"}}>
                    <MedFontText11>
                        Tiling
                    </MedFontText11>
                    <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                        <LabelledInputMui label={"x"} width={"120px"}/>
                        <LabelledInputMui label={"y"} width={"120px"}/>
                    </div>
                </div>

                {/*tilling offset*/}
                <div style={{marginTop: "14px"}}>
                    <MedFontText11>
                        Tiling offset
                    </MedFontText11>
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
                    <MedFontText11>
                        Tiling Rotation
                    </MedFontText11>
                    <div style={{marginTop: "8px"}}>
                        <LabelledInputMui label={"Tiling rotation"} width={"120px"}/>
                    </div>
                </div>

                {/*button control*/}
                <div style={{marginTop: "20px", display: "flex", justifyContent: "space-between"}}>
                    <RedButtonClass>
                        Create
                    </RedButtonClass>
                    <WhiteButtonClass>
                        Remove
                    </WhiteButtonClass>
                </div>

            </form>
        </Draggable>
    );
};
export default AddMaterialPopUp;
