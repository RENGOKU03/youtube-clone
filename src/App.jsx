import "./App.css";
import Nav from "./Components/Nav";
import Top from "./Components/Top";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="w-full">
          <Top />
        </div>
        <div className="lg:flex w-full bg-black z-10 ">
          <Nav />
          <div className="lg:w-5/6 ">
            <div className="bg-black text-white font-extrabold text-3xl p-3">
              <p>
                New <span className="text-red-600 ">Videos</span>
              </p>
            </div>
            <div className="flex flex-col gap-7 md:flex-row md:flex-wrap items-center">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
