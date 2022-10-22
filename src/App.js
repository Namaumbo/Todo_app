import "./App.css";
import Home from "./components/Home";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <header className="App-header">
        <div style={{ margin: "auto", width: "20em" }}>
          <Home />
          <Tasks />
        </div>
      </header>
    </>
  );
}

export default App;
