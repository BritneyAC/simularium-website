import {
    RECEIVE_TRAJECTORY,
    REQUEST_TRAJECTORY,
    RECEIVE_AGENT_IDS,
    RECEIVE_AGENT_NAMES,
    RECEIVE_SIMULARIUM_FILE,
    LOAD_LOCAL_FILE_IN_VIEWER,
    LOAD_NETWORKED_FILE_IN_VIEWER,
    REQUEST_PLOT_DATA,
    CLEAR_SIMULARIUM_FILE,
    LOAD_FILE_VIA_URL,
} from "./constants";
import {
    TrajectoryStateBranch,
    ReceiveAction,
    RequestAction,
    LocalSimFile,
    NetworkedSimFile,
    RequestCachedPlotAction,
    RequestNetworkFileAction,
    RequestLocalFileAction,
    ClearSimFileDataAction,
    LoadViaUrlAction,
} from "./types";
import { SimulariumController } from "@aics/simularium-viewer/type-declarations";

export function receiveTrajectory(
    payload: TrajectoryStateBranch
): ReceiveAction {
    return {
        payload,
        type: RECEIVE_TRAJECTORY,
    };
}

export function requestTrajectory(): RequestAction {
    return {
        type: REQUEST_TRAJECTORY,
    };
}

export function requestCachedPlotData(payload: {
    url: string;
}): RequestCachedPlotAction {
    return {
        payload,
        type: REQUEST_PLOT_DATA,
    };
}

export function receiveAgentTypeIds(
    payload: TrajectoryStateBranch
): ReceiveAction {
    return {
        payload,
        type: RECEIVE_AGENT_IDS,
    };
}

export function receiveAgentNamesAndStates(
    payload: TrajectoryStateBranch
): ReceiveAction {
    return {
        payload,
        type: RECEIVE_AGENT_NAMES,
    };
}

export function changeToLocalSimulariumFile(
    payload: LocalSimFile,
    controller?: SimulariumController
): RequestLocalFileAction {
    return {
        payload,
        controller,
        type: LOAD_LOCAL_FILE_IN_VIEWER,
    };
}

export function changeToNetworkedFile(
    payload: NetworkedSimFile,
    controller?: SimulariumController
): RequestNetworkFileAction {
    return {
        payload,
        controller,
        type: LOAD_NETWORKED_FILE_IN_VIEWER,
    };
}

export function receiveSimulariumFile(
    payload: LocalSimFile | NetworkedSimFile
): ReceiveAction {
    return {
        payload,
        type: RECEIVE_SIMULARIUM_FILE,
    };
}

export function clearSimulariumFile(payload: {
    newFile: boolean;
}): ClearSimFileDataAction {
    return {
        payload,
        type: CLEAR_SIMULARIUM_FILE,
    };
}

export function loadViaUrl(
    payload: string,
    controller?: SimulariumController,
    fileId?: string
): LoadViaUrlAction {
    return {
        payload,
        controller,
        type: LOAD_FILE_VIA_URL,
        fileId,
    };
}
