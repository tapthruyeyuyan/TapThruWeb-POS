import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("open");
  }, []);
  return <div></div>;
}

export default App;
