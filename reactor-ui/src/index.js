
var { SideNav, NavGroup, Nav } = require("reactor-ui/sidenav");
var React = require("react");



var navi = [
    { id: 'home', icon: "fa fa-home" , text: "Home"},
    { id: 'buttons', icon: "fa fa-circle-thin", text: "Buttons/Toggles"},
    { id: 'tabs', icon: 'fa fa-circle-thin' ,text: "Tabs"},
    { id: 'panels', icon: 'fa fa-circle-thin' ,text: "Panels"},
    { id: 'sidenav', icon: 'fa fa-circle-thin' ,text: "Side Navigation"},
    { id: 'tables', icon: 'fa fa-table' ,text: "Table"},
    { id: 'github', icon: 'fa fa-github' ,text: "GitHub Page"}
];



var sideNavListener = function(selection) {

};

React.render(<SideNav navs={navi}/>, document.getElementById('sidenav'));