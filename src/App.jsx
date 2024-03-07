import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleClock = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <div className="text-center w-full h-screen flex flex-col justify-center items-center bg-gray-400">
        <h1 className="text-9xl font-extrabold text-[#0b0920]">
          {time}
        </h1>
        <button
          onClick={toggleClock}
          className="border px-6 py-3 text-xl font-semibold rounded-xl mt-6 hover:bg-gray-900 hover:text-white"
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
      </div>
    </>
  );
}

export default App;
