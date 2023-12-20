import "./App.css";
import * as sphinx from "sphinx-bridge-tobibams";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [enableText, setEnableText] = useState("");
  // async function good() {
  //   const result = await sphinx.enable();
  //   console.log(result);
  //   setEnableText(JSON.stringify(result));
  // }

  const good = useCallback(async () => {
    const result = await sphinx.enable();
    console.log(result);
    setEnableText(JSON.stringify(result));
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      good();
    }, 5000);
  }, []);

  async function setBudget() {
    const result = await sphinx.setBudget();
    console.log(result);
  }
  return (
    <div className="App">
      <button onClick={good}>Enable</button>
      <p>{enableText}</p>

      <button onClick={setBudget}>Set Budget</button>
    </div>
  );
}

export default App;
