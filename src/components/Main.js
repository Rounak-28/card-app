import Cleave from "cleave.js/react";
import React from "react";

export default function Main(props) {
    
  return (
    <div className="w-full max-w-md h-screen text-purple-800 mt-2 mx-auto md:absolute md:top-24 md:right-16">
      <div className="card w-[90%] mx-auto flex justify-center flex-col">
        <h1 className="text-sm mb-1">CARDHOLDER NAME</h1>
        <input
          className="border-[1px] rounded-lg pl-2 py-2 text-black"
          type="text"
          placeholder="e.g. Jane Appleseed"
          name="name"
          onChange={props.handleNameChange}
        />
        <br />

        <h1 className="text-sm mb-1">CARD NUMBER</h1>
        <Cleave
          placeholder="Enter credit card number"
          options={{
            creditCard: true,
          }}
          onChange={props.handleCCChange}
          className="form-field py-2 rounded-lg pl-2 border-[1px] text-black"
        />
        <p className="text-red-800 text-xs mt-1 invisible" id="cantBeBlank1">
          Card number can't be blank
        </p>
        <br />

        <div className="flex flex-row justify-between">
          <div className="left flex flex-col w-[45%]">
            <h1 className="text-sm  mb-1">EXP DATE (MM/YY)</h1>
            <div className="inputs flex flex-row justify-between">
              <Cleave
                placeholder="mm"
                className="w-[40%] py-2 rounded-lg pl-2 border-[1px] text-black"
                options={{
                  date: true,
                  datePattern: ["m"],
                }}
                onChange={props.handleMonthChange}
              />

              <Cleave
                placeholder="yy"
                className="w-[40%] py-2 rounded-lg pl-2 border-[1px] text-black"
                options={{
                  date: true,
                  datePattern: ["Y"],
                }}
                onChange={props.handleYearChange}
              />
            </div>
            <p className="text-red-800 text-xs mt-1 invisible" id="cantBeBlank2">
              cant be blank
            </p>
          </div>

          <div className="right flex flex-col w-[45%]">
            <h1 className="text-sm  mb-1">CVC</h1>
            <input
            className="py-2 rounded-lg pl-2 border-[1px] text-black"
              type="number"
              placeholder="e.g. 123"
              name="cvc"
              onChange={props.handleCVCChange}
            />
            <p className="text-red-800 text-xs mt-1 invisible" id="cantBeBlank3">
              cant be blank
            </p>
          </div>
        </div>

        <br />

        <button
          className="bg-[#21082f] active:border-none text-purple-100 w-full rounded-lg text-xl mx-auto py-3 "
          onClick={props.handleClk}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
