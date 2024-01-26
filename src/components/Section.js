import React from "react";
import Fade from 'react-reveal/Fade';

function Section(props) {
  const img = {
    backgroundImage: `url(${props.bg})`,
    width  : '100vw',
    height : '100vh'
  };
  return (
    <div
      className="body flex flex-col justify-between items-center w-screen h-screen bg-cover bg-no-repeat bg-center z-0"
      style={img}
    >
      <Fade bottom>
        <div className="itemText pt-[10vh] order-1 text-center ">
          <h1 className="text-5xl font-bold text-gray-700 rounded-sm z-0">{props.title}</h1>
          <p className="font-bold text-gray-700">
            {props.desc}
          </p>
        </div>
      
        <div className="buttonArrow order-2 flex flex-col items-center">
          <div className="button flex sm:space-x-3 max-sm:flex max-sm:flex-col max-sm:space-y-3 pb-[3vh] order-1">
            <button className="up order-1 font-semibold w-[256px] h-[40px] rounded-[100px] opacity-[0.85] bg-[rgba(23,26,32,0.8)] text-white uppercase">
              {props.leftBut}
            </button>
            <br />
            {props.rightBut && <button className="down order-2 font-semibold w-[256px] h-[40px] rounded-[100px] opacity-[0.85] bg-[rgba(255,255,255)] text-black uppercase">
              {props.rightBut}
            </button>}
            
          </div>
          <img
            src="images/down-arrow.svg"
            alt=""
            className="w-10 h-10 order-2 animate-bounce"
          />
        </div>
      </Fade>
    </div>
  );
}

export default Section;
