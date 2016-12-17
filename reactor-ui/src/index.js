import 'babel-polyfill';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import { SideNav } from 'reactor-ui/sidenav';
import { Router, Route, hashHistory } from 'react-router';

import { Buttons } from './buttons/Buttons';

const navi = [
    { id: 'home', icon: 'fa fa-home' , text: 'Home'},
    { id: 'buttons', icon: 'fa fa-sliders', text: 'Button/Controls/Toggles'},
    { id: 'tabs', icon: 'fa fa-tablet' ,text: 'Tabs'},
    { id: 'panels', icon: 'fa fa-columns' ,text: 'Panels'},
    { id: 'sidenav', icon: 'fa fa-circle-thin' ,text: 'Side Navigation'},
    { id: 'tables', icon: 'fa fa-table' ,text: 'Table'},
    { id: 'github', icon: 'fa fa-github' ,text: 'GitHub Page'}
];

var selected = 'home';
var sideNavListener = function(selection) {
    selected = selection.id;
    hashHistory.push(selected);
    render(<SideNav onSelection={sideNavListener} selected={selected} navs={navi}/>, document.getElementById('sidenav'));
};

var App = React.createClass({
    propTypes:{
        children: PropTypes.node
    },

    render() {
        return <span>{this.props.children}</span>;
    }

});


var Routes = (

    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="buttons" component={Buttons}/>
        </Route>
    </Router>
);


render(Routes, document.getElementById('main'));
render(<SideNav onSelection={sideNavListener} selected={selected} navs={navi}/>, document.getElementById('sidenav'));
