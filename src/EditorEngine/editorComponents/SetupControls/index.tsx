// @ts-nocheck
import React from "react";
import "./index.scss";
import {BasicControls} from "../../PropsControls";
import SectionOne from "./Presets/SectionOne";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux";
import {updateCurrConfigTab} from "../../../redux/routeManagement";

const SetupControls = (props: BasicControls) => {
    const currentTab = useSelector((state: any) => state.routeManagement.currConfigTab);
    const dispatch = useDispatch();
    return (
        <div
            className={"setupControls"}
            style={{
                ...props.style,
            }}
        >
            {
                [0, 1, 2, 3, 4, 5, 6].map((vls, index) => {
                    return <>
                        <button>{vls}</button>
                        &nbsp;&nbsp;</>
                })
            }
            <hr/>
            <SectionOne context={props.context} settings={props.settings}/>
        </div>
    );
};
SetupControls.defaultProps = {
    style: {},
};
export default SetupControls;
