import React, { Fragment } from 'react';
import Search from './components/Search';
import store from './utils/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store} >
      <Fragment>
        <Search />
      </Fragment>
    </Provider>
  );
}

export default App;
