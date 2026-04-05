import "./App.css";
import MenuButton from "./components/MenuButton";
import NotifButton from "./components/NotifButton";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="bg-white min-h-25 flex items-center justify-between">
        <div
          style={{ backgroundImage: "url('/LogoFischer.png')" }}
          className="w-[135px] h-[71px] ml-2"
        ></div>
        <div className="flex gap-3 mr-3">
          <NotifButton></NotifButton>
          <MenuButton></MenuButton>
        </div>
      </div>
    </div>
  );
}

export default App;
