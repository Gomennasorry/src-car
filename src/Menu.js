//npm install react-router-dom

import React from 'react';

import Home from './Home';
import CarHilight from './CarHilight';

import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

export default class Menu extends React.Component {

    render() {
        return (
            <>
                <Router>
                    <div>
                        <NavLink exact activeClassName="active" to="/">หน้าหลัก</NavLink>
                        <NavLink activeClassName="active" to="/CarHilight" onClick={() => this.props.myFunction(true)}>แนะนำรถยนต์</NavLink>
                        <NavLink activeClassName="active" to="/1">เปรียบเทียบ</NavLink>
                        <NavLink activeClassName="active" to="/2">ข่าวสาร</NavLink>
                        <NavLink activeClassName="active" to="/3">แผนที่โชว์รูม</NavLink>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/CarHilight" component={CarHilight} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
