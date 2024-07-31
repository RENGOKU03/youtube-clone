import "./App.css";
import Feed from "./Components/Feed";
import Top from "./Components/Top";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="w-full">
          <Top />
        </div>
        <Feed />
      </div>
    </>
  );
}

export default App;
