import { useState } from 'react';
import './App.css';

function App() {
  let localTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(localTime);
  const updateTime = () => {
    localTime = new Date().toLocaleTimeString();
    setTime(localTime);
  };
  const stopTimeInterval = setInterval(updateTime, 1000)
  const stopTime = () => {
    clearInterval(stopTimeInterval);
  }
  return (
    <>
      <div className="text-center w-full h-screen flex flex-col justify-center items-center bg-gray-400">
        <h1 className="text-9xl font-extrabold text-[#0b0920]">{time}</h1>
        <button
          onClick={stopTime}
          className="border px-6 py-3 text-xl font-semibold rounded-xl mt-6 hover:bg-gray-900 hover:text-white"
        >
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
