import React from "react";
import { Spin } from "antd";
import {
    PauseOutlined,
    CaretRightOutlined,
    StepBackwardOutlined,
    StepForwardOutlined,
    UploadOutlined,
    LoadingOutlined,
} from "@ant-design/icons";

export const Loading = <LoadingOutlined style={{ fontSize: 40 }} spin />;
export const StepBack = <StepBackwardOutlined />;
export const Play = <CaretRightOutlined />;
export const Pause = <PauseOutlined />;
export const StepForward = <StepForwardOutlined />;
export const UploadFile = <UploadOutlined />;

export default { StepBack, Play, Pause, StepForward, UploadFile, Loading };
