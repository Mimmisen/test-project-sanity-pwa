import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import MadLibList from "./MadLibList";
import MadLib from "./MadLib";
import NotFound from "./NotFound";
import styles from "./App.module.css";

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <header className={styles.header}>
        <Link className={styles.headerLink} to="/">
          Sanity Mad Libs
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<MadLibList />} />
            <Route path="/mad-libs/:slug" element={<MadLib />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
