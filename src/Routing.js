import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataContextProvider } from './DataContextProvider'
import StudentForm from './container/addStudent';
import StudentList from './container/StudentList';

const Routing = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <DataContextProvider>
                        <Route exact path="/form " component={StudentForm} />
                        <Route exact path="/" component={StudentList} />
                    </DataContextProvider>
                </Switch>
            </Router>
        </div>

    );

}

export default Routing;