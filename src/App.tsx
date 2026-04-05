import "./App.css";
import ImageButton from "./components/ImageButton";

function App() {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <div className="bg-white min-h-20 flex items-center justify-between">
        <div className="w-[135px] h-[71px] ml-2">
          <img src="/LogoFischer.png" />
        </div>
        <div className="flex gap-3 mr-3">
          <ImageButton image={"/mdi_bell.png"} openFunction={OpenNotifPage} />
          <ImageButton
            image={"/mingcute_menu-fill.png"}
            openFunction={OpenMenu}
          />
        </div>
      </div>
      <div className="bg-white border border-[#D0D0D0] min-h-12 font-serif text-lg flex items-center">
        <p className="ml-3">Dashboard - Supervisor</p>
      </div>
      <div className="ml-7 mt-3 font-serif">Resumen de actividad</div>
      <div className="bg-white my-1 mx-6 min-h-68 min-w-91 border border-[#D0D0D0] rounded-md">
        <div className="border-b-1 border-[#D0D0D0] min-h-8 flex items-center">
          <p className="ml-2">Mapa de sucursales</p>
        </div>
        <img src="/GPSimage.png" className="absolute m-3" />
        <ImageButton
          image={"/AgrandarPantalla.png"}
          styles="absolute mt-3 ml-79"
          openFunction={OpenMap}
        />
      </div>
    </div>
  );
}

const OpenMenu = () => {
  console.log("Menú abierto");
};

const OpenNotifPage = () => {
  console.log("Abriendo página de notificaciones");
};

const OpenMap = () => {
  console.log("Entrando al mapa");
};

export default App;
