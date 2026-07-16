import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setlength] = useState(8);
  const [isNumAllowed, setNum] = useState(false);
  const [isCharAllowed, setChar] = useState(false);
  const [password, setpassword] = useState("");
  const passwordRef = useRef(null);
  const [copied, setCopied] = useState(false); // Tracks button tick state
  const [showToast, setShowToast] = useState(false); // Tracks footer notification state

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*()_+{}";
    
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, isNumAllowed, isCharAllowed, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    setCopied(true);
    setShowToast(true);

    // Hide the notifications after 2 seconds
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2000);
  }, [password])

  return (
    // Wrapper to center the card beautifully on the screen
    <div className="w-full min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 font-sans antialiased text-slate-200">
      
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-6 md:p-8 backdrop-blur-md">
          
          <h1 className="text-2xl font-bold text-center text-white mb-6 tracking-tight">
            Password Generator
          </h1>
          
          {/* Input & Copy Row */}
          <div className="flex bg-slate-950 border border-slate-700 rounded-xl overflow-hidden mb-6 focus-within:border-blue-500 transition-all duration-200 shadow-inner">
            <input 
              type="text" 
              value={password}
              className="outline-none w-full py-3 px-4 bg-transparent text-blue-400 font-mono text-lg tracking-wider selection:bg-blue-500/30"
              placeholder="Your password will appear here"
              readOnly
              ref={passwordRef}
            />
            <button 
              onClick={copyToClipboard} 
              className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium px-6 py-3 shrink-0 transition-all duration-150 ease-in-out"
            >
              Copy
            </button>
          </div>

          {/* Controls Panel */}
          <div className="flex flex-col gap-y-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
            
            {/* Length Range Slider */}
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-between items-center text-sm font-medium text-slate-400">
                <label htmlFor="lengthRange">Password Length</label>
                <span className="text-blue-400 font-mono text-base font-bold bg-blue-500/10 px-2 py-0.5 rounded-xl">
                  {length}
                </span>
              </div>
              <input 
                id="lengthRange"
                type="range"
                min={6}
                max={30}
                value={length}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                onChange={(e) => { setlength(Number(e.target.value)) }}
              />
            </div>

            <hr className="border-slate-800 my-1" />

            {/* Checkboxes Wrapper */}
            <div className="flex gap-x-6 justify-start text-sm font-medium">
              
              {/* Number Checkbox */}
              <div className="flex items-center gap-x-2 cursor-pointer group">
                <input 
                  type="checkbox"
                  defaultChecked={isNumAllowed}
                  id="numberInput"
                  className="w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 bg-slate-800 cursor-pointer accent-blue-500"
                  onChange={() => {
                    setNum(prev => !prev);
                  }} 
                />
                <label htmlFor="numberInput" className="cursor-pointer text-slate-400 group-hover:text-slate-200 transition-colors">
                  Numbers
                </label>
              </div>

              {/* Character Checkbox */}
              <div className="flex items-center gap-x-2 cursor-pointer group">
                <input 
                  type="checkbox"
                  defaultChecked={isCharAllowed}
                  id="charInput"
                  className="w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 bg-slate-800 cursor-pointer accent-blue-500"
                  onChange={() => {
                    setChar((prev) => !prev);
                  }} 
                />
                <label htmlFor="charInput" className="cursor-pointer text-slate-400 group-hover:text-slate-200 transition-colors">
                  Special Characters
                </label>
              </div>

            </div>
          </div>
      </div>
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-x-2 bg-slate-900 border border-emerald-500/30 text-emerald-400 px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 ease-out z-50 ${
          showToast 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <span className="flex items-center justify-center bg-emerald-500/10 w-5 h-5 rounded-full text-xs font-bold">✓</span>
        <span className="text-sm font-medium tracking-wide">Password copied to clipboard!</span>
      </div>
    </div>
  )
}

export default App