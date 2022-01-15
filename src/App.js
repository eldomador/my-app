import React, { createContext, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactMePage from "./pages/contactme";
import { IntlProvider } from 'react-intl'
import { messages } from './translate'
import "./App.css";

export const LangContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

const initialState = { lang: 'en' };

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <LangContext.Provider value={{ state, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact-me" element={<ContactMePage />} exact />
          </Routes>
        </Router>
      </IntlProvider>
    </LangContext.Provider>
  );
}
export default App;
