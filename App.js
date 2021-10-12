import React, {Component} from 'react';
import HomeScreen from './src/components/HomeScreen';
import reducers from './src/reducers';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

export default App;
