import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { styles } from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus} from "react-icons/hi"
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
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
              onClick={() => setOpenCart(false)}
            />
          </div>

          {/* items length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[15px] font-[500]">3 items</h5>
          </div>

          {/* card single item  */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>

        <div className="px-5 mb-3">
            <Link to={"/checkout"} >
            <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (USD$1823)
                  </h1>
                </div>
            </Link>
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
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value+1)}
          ><HiPlus size={18} color="#fff"/></div>
          <span className="pl-[10px]">{value}</span>
          <div
            className={`bg-[#a7abb14f] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value === 1 ? 1 : value-1)}
          ><HiOutlineMinus size={16} color="#7d879c"/></div>
        </div>
        <img src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png" alt="" 
        className="w-[80px] h-[80px] ml-5"
        />
        <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[400] text-[15px] text-[#00000081]">${data.price} * {value}</h4>
            <h4 className="font-[600] text-[17px] text-[#d02222] pt-2 font-Roboto">
                Us${totalPrice}
            </h4>
        </div>
        <RxCross1 className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Cart;
