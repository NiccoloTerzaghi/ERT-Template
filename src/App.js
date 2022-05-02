import { useState } from "react";

import './index.css';

function App() {
  const [count, setcount] = useState(0)

  return (
    <div className="h-screen w-screen bg-slate-800 grid place-items-center">

      <div className="fixed top-12 bg-slate-900 px-4 py-2 text-white font-bold rounded-lg text-2xl select-none">
        Electron-React-Tailwind template
      </div>

      <div onClick={() => setcount(count + 1)}
        className='bg-slate-900 p-4 rounded-lg text-2xl text-white font-bold select-none cursor-pointer'>
        {count}
      </div>

      <div className="fixed bottom-12 px-4 py-2 bg-slate-900 text-white rounded-lg text-xl select-none">
        by Niccolò Terzaghi
      </div>

    </div>
  );
}

export default App;
