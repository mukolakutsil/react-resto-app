import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import RestoServiceContext from './components/resto-service-context';
import RestoService from './services/resto-service';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';

const restoService = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoService}>
                <Router>
                    <App />
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

