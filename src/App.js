import { BrowserRouter } from "react-router-dom";
import Handleauthintication from "./components/HandleAuthintication";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from './Redux/reducers/index'
import ViewAlert from './components/ViewAlert';




// STORE

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



function App() {
  return (
   
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
      <ViewAlert />
        <Handleauthintication />
      </div>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
