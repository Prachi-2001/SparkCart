import React from "react";
import { styles } from "../../styles/styles";
import CountDown from "./CountDown"

const EventCard = ({active}) => {
  return (
    <div className={`w-full bg-white rounded-lg block ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>New Fashionable Watch for men 2023 with multiple colors</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          tempore, aliquid exercitationem ut nulla quas deserunt facilis harum
          quos totam ipsum laudantium voluptates nam amet, nihil architecto
          ducimus doloremque! Enim.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          tempore, aliquid exercitationem ut nulla quas deserunt facilis harum
          quos totam ipsum laudantium voluptates nam amet, nihil architecto
          ducimus doloremque! Enim.
        </p>
        <div className="flex justify-between py-2">
            <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              100$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              79$
            </h5>
            </div>
            <span className="text-[17px] pr-3 font-[400] text-[#44a55e]"> 120 Sold</span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
