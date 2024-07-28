import "./App.css";
import Nav from "./Components/Nav";
import Top from "./Components/Top";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <>
      <div className="bg-white">
        <Top />
        <Nav />
        <div className="bg-black text-white font-extrabold text-3xl p-3">
          <p>
            New <span className="text-red-600">Videos</span>
          </p>
        </div>
        <div className="flex flex-col gap-7">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </>
  );
}

export default App;
