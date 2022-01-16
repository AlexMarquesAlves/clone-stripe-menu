import React from "react";
import Layout from "./components/Layout/index";
import NavBar from "./components/NavBar";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <h1 className="h1-content">Here goes the content</h1>
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
