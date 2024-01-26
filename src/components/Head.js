import React,{useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
// import { selectCar } from "../features/car/carSlice";
// import { useSelector } from "react-redux";

//it is basically being the navbar

function Head() {

  const [burgerOpen,setBurger] = useState(false);

  const show = {
    // display: burgerOpen ? 'block' : 'none',
    transform : burgerOpen? 'translateX(0)' : 'translateX(100%)'
  }

  //const cars = useSelector(selectCar);//mtlb cars k andar ab saare selectCars wale elements aagye (mtlb const cars can be used to access the car names AND MAP  it to the header)

  return (
    <div className="flex justify-between items-center fixed w-full p-3 z-10">
      <a href="/#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <div className="menu max-md:hidden transition-all duration-300 justify-between items-center models uppercase flex space-x-4 font-extrabold text-lg text-[rgba(23,26,32,0.8)]">
        
        {/* {cars && cars.map((car,index)=>{
          <a key={index} href="/#">{car}</a>
        })} */}
        
        <p>
          <a href="/#">Model S</a>
        </p>
        <p>
          <a href="/#">Model 3</a>
        </p>
        <p>
          <a href="/#">Model X</a>
        </p>
        <p>
          <a href="/#">Model Y</a>
        </p>

      </div>
      <div className="right order-3 uppercase flex space-x-4 justify-between items-center">
        <p>
          <a href="/#">SHOP</a>
        </p>
        <p>
          <a href="/#">tesla account</a>
        </p>
        <a href="/#" onClick={()=>setBurger(true)}>
          <MenuIcon />
        </a>
      </div>
      <div className="burger fixed top-0 bottom-0 right-0 w-[300px] bg-white p-5 rounded-lg z-20 list-none font-bold [&>li]:py-4 [&>li]:border-gray-300 [&>li]:border-b-2 text-gray-600 transition-all duration-1000" style={show}>
       <div className="flex justify-end  " ><CloseIcon className="cursor-pointer" onClick={()=>setBurger(false)}></CloseIcon></div>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Used Inventory</a>
        </li>
        <li>
          <a href="/#">Trade-in</a>
        </li>
        <li>
          <a href="/#">Cybertruck</a>
        </li>
        <li>
          <a href="/#">Roadaster</a>
        </li>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
      </div>
    </div>
  );
}

export default Head;
