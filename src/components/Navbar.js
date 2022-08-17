import React from "react";
import Card from "./Card";
import Cardback from "./Cardback";

export default function Navbar(props) {

    return (
        <div className="navbar h-[285px]">
            <img
            className="relative w-full max-h-72 block md:hidden" 
             src={require("../images/bg-main-mobile.png")}  
             alt="idk" 
             />
            <img
            className="relative hidden md:block w-1/3 h-[100vh]" 
             src={require("../images/bg-main-desktop.png")}  
             alt="idk" 
             />
            <div className="img-back absolute top-72 left-64 w-72">
                <img 
                className="relative"
                src={require("../images/bg-card-back.png")} 
                alt="idk" 
                />
                <div className="absolute top-[68px] right-8 w-8">
                    <Cardback
                    cvc = {props.cvc}
                    />
                </div>
            </div>
            <div className="img absolute top-24 left-48 w-72">
                <img
                className="relative"
                src={require("../images/bg-card-front.png")}
                alt="idk"
                />
                <div className="absolute top-3 text-white">
                    <Card
                    atmNumber = {props.atmNumber}
                    name = {props.name}
                    expDateMonth = {props.expDateMonth}
                    expDateYear = {props.expDateYear}
                    />
                </div>
                
            </div>
        </div>
    );
}
