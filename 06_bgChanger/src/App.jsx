import {useState} from 'react'
function App() {
  const [color,setColor]=useState("olive")
  const colorOptions = [
    { name: "Olive", value: "olive" },
    { name: "Crimson Red", value: "#991b1b" },
    { name: "Royal Blue", value: "#1e40af" },
    { name: "Deep Purple", value: "#6b21a8" },
    { name: "Slate Teal", value: "#115e59" },
    { name: "Dark Charcoal", value: "#1f2937" }
  ]
  const activeColorName = colorOptions.find(opt => opt.value === color)?.name || color;
  return (
    <div className="w-full h-screen flex duration-200 transition-colors"
    style={{backgroundColor: color}}
    >
      <aside className="w-80 bg-gray-900 text-white p-5 flex flex-col justify-between h-screen sticky top-0 shrink-0 shadow-2xl">
          <div>
            <div className='h-16 flex items-center border-b border-gray-800 mb-6'>
                <span className="text-lg font-bold tracking-wide text-white">Background Color Changer</span>
            </div>
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-3">Select Background Color</p>
            <nav className="space-y-2">
            {colorOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  console.log("User clicked:", option.name, option.value);
                  setColor(option.value)

                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-3xl text-left font-large transition-all duration-150
                  ${color === option.value 
                    ? "bg-white text-gray-900 font-bold shadow-md scale-105" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                `}
              >
          
                <span 
                  className="w-5 h-5 rounded-full border border-gray-300/30 shadow-inner shrink-0"
                  style={{ backgroundColor: option.value }}
                ></span>
                <span>{option.name}</span>
              </button>
            ))}
          </nav>
          </div>
          <div className="border-t border-gray-800 pt-4 text-xs text-gray-500 text-center">
          Active: <span className="font-mono text-gray-300">{activeColorName}</span>
         
        </div>
      </aside>
      <main className="flex-1 p-10 flex flex-col justify-between">
        {/* Main Content Header Text Panel */}
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-white max-w-xl shadow-lg">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Background Color Changer</h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Click any button on the left panel sidebar configuration menu. React captures the state update instantly via <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono text-xs">setColor()</code>, updating the inline template utility styles seamlessly without reloading the window frame grid.
          </p>
        </div>

        {/* Floating Bottom Quick Reset Widget */}
        <div className="flex justify-end">
          <button 
            onClick={() => {
              console.log("user pressed reset button");
              
              setColor("olive")
            }}
            className="bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            Reset to Default Olive
          </button>
        </div>
      </main>
      
    </div>
  );
}


export default App;  
