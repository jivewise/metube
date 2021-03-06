import React from 'react';
import {Provider} from 'react-redux';

import sagas from './sagas';
import reducers from './reducers';
import configureStore from './store';
import Search from './search';
import List from './list';
import Sort from './sort';

import './App.css';

const store = configureStore(reducers, sagas);

function App() {
  return (
    <Provider store={store}>
      <Search.UI />
      <Sort.UI />
      <List.UI />
    </Provider>
  );
}

export default App;
