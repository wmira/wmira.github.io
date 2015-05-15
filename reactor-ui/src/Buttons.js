/* jshint esnext: true */

import React from 'react';

import Btn from 'reactor-ui/button/Btn';
import BtnGroup from 'reactor-ui/button/BtnGroup';
var BtnDrpDown = require("reactor-ui/button/BtnDrpDown");

import Grid from 'reactor-ui/grid/Grid';
import Col from 'reactor-ui/grid/Col';
import Row from 'reactor-ui/grid/Row';
import {Datatable, Column} from   'reactor-ui/datagrid';


var basicButtonData = [

    { property: 'disabled', type: 'boolean', description: 'True disables the button', required: 'N', defaults: 'false'},
    { property: 'scheme', type: 'string', description: 'The scheme of the button. Possible values (green,blue,violet,red,orange)', required: 'N', defaults: 'undefined'},
    { property: 'width', type: 'string/number', description: 'The width in pixels or string width', required: 'N', defaults: 'auto'},
    { property: 'iconCls', type: 'string', description: 'True disables the button', required: 'N', defaults: 'false'},
    { property: 'text', type: 'string', description: 'The button text', required: 'N', defaults: 'undefined'},
    { property: 'onClick', type: 'function', description: 'Click Listener', required: 'N', defaults: 'false'}

];

module.exports = React.createClass({

    render() {
        return (
            <Grid>
                <Row>
                    <Col unit="6">
                        <p>
                            {"Basic Button Configuration"}
                        </p>
                        <div>
                            <Datatable  data={basicButtonData}>
                                <Column id='property' title='Property'/>
                                <Column flex={2} id='type' title='Type'/>
                                <Column flex={3} id='description' title='Description'/>
                                <Column id='required' title='Required'/>
                                <Column id='defaults' title='Defaults'/>
                            </Datatable>
                        </div>
                    </Col>
                    <Col unit="6" style={{textAlign: "center"}}>

                    <Btn text="Click Me"/><span style={{marginRight: "4px"}}/>
                    <Btn scheme="green" text=" Green "/><span style={{marginRight: "4px"}}/>
                    <Btn iconCls="fa fa-heart" scheme="blue" text=" Blue "/><span style={{marginRight: "4px"}}/>
                    <Btn scheme="violet" text=" Violet "/><span style={{marginRight: "4px"}}/>
                    <Btn scheme="red" text=" Red "/><span style={{marginRight: "4px"}}/>
                    <Btn scheme="orange" text=" Orange "/><span style={{marginRight: "4px"}}/>

                    </Col>
                </Row>
                <div style={{paddingTop: 10}}></div>
                <Row>
                    <Col unit="6">
                        <p>
                            {"Button Groups"}
                        </p>
                        <div>
                            <Datatable  data={basicButtonData}>
                                <Column id='property' title='Property'/>
                                <Column flex={2} id='type' title='Type'/>
                                <Column flex={3} id='description' title='Description'/>
                                <Column id='required' title='Required'/>
                                <Column id='defaults' title='Defaults'/>
                            </Datatable>
                        </div>
                    </Col>
                    <Col unit="6" style={{textAlign: "center"}}>

                        <BtnGroup scheme="violet" active="clock">
                            <Btn iconCls="fa fa-clock-o" value="clock"/>
                            <Btn iconCls="fa fa-heart" value="heart"/>
                            <Btn iconCls="fa fa-adjust" value="adjust"/>
                        </BtnGroup>

                    </Col>
                </Row>
            </Grid>);
    }
});
