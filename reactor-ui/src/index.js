
var { SideNav, NavGroup, Nav } = require("reactor-ui/sidenav");
var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;


var navi = [
    { id: 'home', icon: "fa fa-home" , text: "Home"},
    { id: 'buttons', icon: "fa fa-sliders", text: "Button/Controls/Toggles"},
    { id: 'grid', icon: "fa fa-server", text: "Grid System"},
    { id: 'tabs', icon: 'fa fa-tablet' ,text: "Tabs"},
    { id: 'panels', icon: 'fa fa-circle-thin' ,text: "Panels"},
    { id: 'sidenav', icon: 'fa fa-circle-thin' ,text: "Side Navigation"},
    { id: 'tables', icon: 'fa fa-table' ,text: "Table"},
    { id: 'github', icon: 'fa fa-github' ,text: "GitHub Page"}
];



var sideNavListener = function(selection) {
    window.location.hash = selection.id;
};

var App = React.createClass({

    render() {
        return <RouteHandler/>;
    }

});


var routes = (
    <Route handler={App}>
        <Route name="buttons" path="buttons" handler={require("./Buttons")} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('main'));
});


React.render(<SideNav onSelection={sideNavListener} navs={navi}/>, document.getElementById('sidenav'));