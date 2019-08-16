import * as React from "react";
import { Card, Collapse } from "antd";

import Graphing from "../../components/Graphing";

const { Panel } = Collapse;

const styles = require("./style.css");
const panelKeys = ["graphing", "statistics"];
export default class ResultsPanel extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Card title="Analysis" className={styles.container}>
                <Collapse defaultActiveKey={panelKeys}>
                    <Panel
                        showArrow={false}
                        key={panelKeys[0]}
                        header="Graphing"
                    >
                        <Graphing />
                    </Panel>
                    <Panel
                        showArrow={false}
                        key={panelKeys[1]}
                        header="Statistics"
                    />
                </Collapse>
            </Card>
        );
    }
}
