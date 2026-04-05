import "./App.css";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="bg-white min-h-25 flex items-center justify-between">
        <div
          style={{ backgroundImage: "url('/LogoFischer.png')" }}
          className="w-[135px] h-[71px] ml-2"
        ></div>
        <div className="flex gap-3 mr-3">
          <div
            style={{ backgroundImage: "url('/mdi_bell.png')" }}
            className="w-[24px] h-[24px] bg-cover bg-center"
          ></div>

          <div
            style={{ backgroundImage: "url('/mingcute_menu-fill.png')" }}
            className="w-[25px] h-[25px] bg-cover bg-center"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
