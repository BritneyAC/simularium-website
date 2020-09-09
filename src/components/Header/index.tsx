import * as React from "react";
import { Layout, Row, Col, Button, PageHeader } from "antd";
import { ActionCreator } from "redux";

import { ToggleAction } from "../../state/selection/types";
import FileUpload from "../FileUpload";
import {
    SetViewerStatusAction,
    LocalSimFile,
} from "../../state/metadata/types";
const { Header } = Layout;

const styles = require("./style.css");

interface AppHeaderProps {
    openLoadFileModal: ActionCreator<ToggleAction>;
    modalOpen: boolean;
    loadLocalFile: (simFile: LocalSimFile) => void;
    setViewerStatus: ActionCreator<SetViewerStatusAction>;
    simulariumFileName: string;
}
export default class AppHeader extends React.Component<AppHeaderProps, {}> {
    public render(): JSX.Element {
        const {
            openLoadFileModal,
            loadLocalFile,
            simulariumFileName,
            setViewerStatus,
        } = this.props;
        return (
            <Header className={styles.container}>
                <PageHeader
                    title="Simularium"
                    subTitle={simulariumFileName ? simulariumFileName : ""}
                    extra={[
                        <Button
                            key="open"
                            type="primary"
                            onClick={openLoadFileModal}
                        >
                            Load Existing Simulation
                        </Button>,
                        <FileUpload
                            key="upload"
                            loadLocalFile={loadLocalFile}
                            setViewerStatus={setViewerStatus}
                        />,
                        ,
                    ]}
                />
                <Row>
                    <Col />
                    <Col />
                    <Col />
                </Row>
            </Header>
        );
    }
}
