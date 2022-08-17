import React from "react";

export default function Card(props) {
    return(
        <div className="w-[288px] relative">
            <div className="circles space-x-2 flex items-center ml-4">
                <div className="circle1 w-7 h-7 bg-white rounded-full"></div>
                <div className="circle2 w-3 h-3 border-white border-[1px] rounded-full"></div>
            </div>
            <div 
            className="atm-number w-full flex justify-center absolute top-16 text-xl"
            >
                {props.atmNumber.substring(0,4)} {props.atmNumber.substring(4,8)} {props.atmNumber.substring(8,12)} {props.atmNumber.substring(12,16)}
            </div>
            <div className="last-line">
                <div className="line1 absolute top-28 left-4 text-xs max-w-[180px]">{props.name.toUpperCase()}</div>
                <div className="line2 absolute top-28 right-4 text-xs">{`${props.expDateMonth}/${props.expDateYear}`}</div>
            </div>
        </div>
    )
};
