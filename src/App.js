import "./App.css";
import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./Reducer";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export const Usercontext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      <div className="App">
        {!state.userName ? (
          <Login />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        )}
      </div>
    </Usercontext.Provider>
  );
}

export default App;
