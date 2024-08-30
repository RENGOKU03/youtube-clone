import "./App.css";
import Feed from "./Components/Feed";
import Top from "./Components/Top";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="w-full fixed">
          <Top />
        </div >
        <div className="pt-24">
        <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
