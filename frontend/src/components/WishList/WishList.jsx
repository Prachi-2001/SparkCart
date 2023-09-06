import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { styles } from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus} from "react-icons/bs"
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const WishList = ({ setOpenWishlist }) => {
  // create an api for good practice
  const cartData = [
    {
      name: "Iphone 14 Pro max 256 gb ssd and 8gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max 256 gb ssd and 8gb ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max 256 gb ssd and 8gb ram silver color",
      description: "test",
      price: 999,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
     <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div >
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          {/* items length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[15px] font-[500]">3 items</h5>
          </div>

          {/* card single item  */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  // value is set for no. of items we are buying for same product
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" size={20}/>
        <img src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" alt="" 
        className="w-[80px] h-[80px] ml-5"
        />
        <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[600] text-[17px] text-[#d02222] pt-2 font-Roboto">
                Us${totalPrice}
            </h4>
        </div>
        <div>
            <BsCartPlus size={20} className="cursor-pointer" title="Add to Cart"/>
        </div>
        
      </div>
    </div>
  );
};

export default WishList;
