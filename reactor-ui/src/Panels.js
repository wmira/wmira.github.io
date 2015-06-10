/* jshint esnext: true, unused: vars */

import React from 'react';
import {Grid,Col,Row} from 'reactor-ui/grid/';
import Panel from 'reactor-ui/panel';

const panelHtml1 = require("html!./panels1.html");
const panelHtml2 = require("html!./panels2.html");
const panelHtml3 = require("html!./panels3.html");
const panelHtml4 = require("html!./panels4.html");

const Panel1 = React.createClass({

    render() {
        return <Panel title="Panel Example 1" closeable={false} collapsable={false}>

            <div dangerouslySetInnerHTML={{__html: panelHtml2}}>
            </div>

        </Panel>;
    }

});

const Panel2 = React.createClass({

    render() {
        return <Panel title="Panel Example 2" closeable={false} collapsable={false}>

            <div dangerouslySetInnerHTML={{__html: panelHtml4}}>
            </div>

        </Panel>;
    }

});
const RUIPanels = React.createClass({

    render() {

        return(
            <Grid fluid={true}>
                <Row>
                    <Col unit="8">
                        <Panel title="Main Stats" collapsable={true}>
                            <div dangerouslySetInnerHTML={{__html: panelHtml3}}>
                            </div>
                        </Panel>
                    </Col>
                    <Col unit="4">
                        <Panel title="Browser Stats" collapsable={true}>
                            <div dangerouslySetInnerHTML={{__html: panelHtml1}}>
                            </div>
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <div style={{paddingTop:10}}>

                    </div>
                </Row>
                <Row>
                    <Col unit="4">
                        <Panel1/>
                    </Col>

                    <Col unit="4">
                        <Panel2/>
                    </Col>
                    <Col  unit="4">
                        <div>
                            <span>Charts taken from the awesome <a href="https://keen.github.io/dashboards/">Keen IO Dashboards</a></span>
                        </div>
                    </Col>
                </Row>
        </Grid>);

    }

});

export default RUIPanels;
