// import React from "react";
// import Apple from "../assets/Apple.png"
// import G from "../assets/G.png"
// import X from "../assets/X.png"

// function ButtonGroup() {
//     return (
//         <div className="allBtnGroup">

//             <div className="button-group-wrapper">
//             <div className="button-group">
//                 <img src={Apple} alt="" />
//               <img src= {G} alt="" />
//               <img src={X} alt="" />
//             </div>
//           </div>
//         </div>
//         );
//   }
  
//   export default ButtonGroup;


import React from "react";
import Apple from "../assets/Apple.png";
import BlueApple from "../assets/BlueApple.png";
import G from "../assets/G.png";
import BlueG from "../assets/BlueG.png";
import X from "../assets/X.png";
import BlueX from "../assets/BlueX.png";

function ButtonGroup() {
  return (
    <div className="allBtnGroup">
      <div className="button-group-wrapper">
        <div className="button-group">
          <div className="hover-effect">
            <img src={Apple} alt="Apple" className="default" />
            <img src={BlueApple} alt="Apple Hover" className="hover" />
          </div>
          <div className="hover-effect">
            <img src={G} alt="Google" className="default" />
            <img src={BlueG} alt="Google Hover" className="hover" />
          </div>
          <div className="hover-effect">
            <img src={X} alt="Other" className="default" />
            <img src={BlueX} alt="Other Hover" className="hover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
