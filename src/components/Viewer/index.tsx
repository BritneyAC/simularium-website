import * as React from "react";
import AgentVizViewer from "agentviz-viewer";

interface ThreeDViewerProps {
    agentSim: any;
    onTimeChange: any;
    time: number;
    handleJsonMeshData: (jsonData: any) => void;
    highlightId: string;
    height: number;
    width: number;
    onTrajectoryFileInfoChanged: (data: any) => void;
}

interface ThreeDViewerState {
    isPlaying: boolean;
}

class ThreeDViewer extends React.Component<
    ThreeDViewerProps,
    ThreeDViewerState
> {
    constructor(props: ThreeDViewerProps) {
        super(props);
        this.state = {
            isPlaying: true,
        };
    }

    render() {
        const {
            agentSim,
            onTimeChange,
            handleJsonMeshData,
            highlightId,
            width,
            height,
            onTrajectoryFileInfoChanged,
        } = this.props;
        return <></>;
    }
}

export default ThreeDViewer;
