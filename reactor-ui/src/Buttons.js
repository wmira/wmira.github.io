var React = require("react");

var Btn = require("reactor-ui/button/Btn");
var Grid = require("reactor-ui/grid/Grid");
var Unit = require("reactor-ui/grid/Unit");
var Row = require("reactor-ui/grid/Row");

module.exports = React.createClass({

    render() {
        return (
            <Grid>
                <Row>
                    <Unit unit="1-3">
                        Basic Buttons
                    </Unit>
                    <Unit unit="2-3">
                        <Btn text='Click Me'/>
                        <Btn scheme='green' text='Click Me'/>
                        <Btn scheme='blue' text='Click Me'/>
                        <Btn scheme='violet' text='Click Me'/>
                        <Btn scheme='red' text='Click Me'/>
                        <Btn scheme='orange' text='Click Me'/>
                    </Unit>
                </Row>
            </Grid>)
    }
});