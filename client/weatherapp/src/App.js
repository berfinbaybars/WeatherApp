import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import store from './utils/store';
import {Provider} from 'react-redux';
import Landing from './pages/Landing';
import Navbar from './components/layout/Navbar';

const App = () => {
    return (
        <Provider store={store} >
            <Fragment>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </Fragment>
        </Provider>
    );
}

export default App;
