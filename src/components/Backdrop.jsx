import React from "react";
import { createPortal } from "react-dom";


const BackdropElement = ({children, onClick}) => {
    return (<div className="fixed inset-0 bg-black opacity-40 z-40 flex justify-center items-center" onClick={onClick} >
        {children}
    </div>);
}

export default function Backdrop({children, onClick}) {
  return (
    <React.Fragment>
        {createPortal(<BackdropElement onClick={onClick}>
            {children}
        </BackdropElement>, document.getElementById('backdrop'))}
    </React.Fragment>        
  );
}
