import React from "react";

export default function Cardback(props) {
    return(
        <div className="w-[265px]">
            <div className="cvc w-8 text-white text-sm">{props.cvc.substring(0,3)}</div>
        </div>
    )
};
