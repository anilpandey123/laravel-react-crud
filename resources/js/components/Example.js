import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import Contacts from './Contacts';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ViewContact from './ViewContact';
function Example() {
    return (
        <Router>
            <>
                <Nav />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <Switch>
                                <Route path='/' exact component={Contacts} />
                                <Route path='/addcontact' exact component={AddContact} />
                                <Route path='/edit/:id' exact component={EditContact} />
                                <Route path="/view/:id" exact component={ViewContact} />
                            </Switch>
                        </div> 
                    </div>
                </div>

            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
