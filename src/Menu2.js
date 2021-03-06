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
                        <NavLink exact activeClassName="active" to="/CarHilight">ไฮไลท์</NavLink>
                        <NavLink activeClassName="active" to="/" onClick={() => this.props.myFunction(false)}>สเปค</NavLink>
                        <NavLink activeClassName="active" to="/2">รีวิว</NavLink>
                        <NavLink activeClassName="active" to="/3">ข่าวสาร</NavLink>
                        <NavLink activeClassName="active" to="/4">แผนที่โชว์รูม</NavLink>
                        <Switch>
                            <Route exact path="/CarHilight" component={CarHilight} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </>
        );
    }
}
