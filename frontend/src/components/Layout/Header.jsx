import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  // this is for showing profile
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(true);
  // added for debugging
  // console.log(user);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          {/* logo  */}
          <div>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dpbnq7fm8/image/upload/v1694002437/sparkcart_logo_abwcrh.png"
                alt="3783209c85e80526a5f936202444c3c4.png"
                border="0"
                width={"200px"}
              />
            </Link>
          </div>

          {/* search functionality */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Products.."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-3 border-[2px] border-[#3957db] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-md rounded z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          {/* seller button  */}

          <div className={`${styles.button}`}>
            <Link to="/shop-create">
              <h1 className="text-[#fff] flex items-center ">
                Become seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } hidden transition 800px:flex item-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] w-[270px] mt-[10px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full bg-white flex items-center justify-between pl-10 font-sans text-lg font-[500] select-none rounded-t-md">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                // providing props to the DropDown component
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navbar */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full w-4 h-4 bg-[#3bc177] top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
              </span>
            </div>

            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full w-4 h-4 bg-[#3bc177] top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                1
              </span>
            </div>

            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to={"/profile"}>
                  <img
                    src={`${backend_url}/${user.avatar}`}
                    className="w-[35px] h-[35px] rounded-full border"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>

          {/* cart pop up code  */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist pop up code  */}
          {openWishlist ? <WishList setOpenWishlist={setOpenWishlist} /> : null}
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } w-full bg-[#fff] h-[70px] fixed z-50 top-0 left-0 shadow-md 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>

          {/* logo  */}
          <div>
            <Link to="/">
              <img
                src="https://imgtr.ee/images/2023/08/26/3783209c85e80526a5f936202444c3c4.png"
                alt="3783209c85e80526a5f936202444c3c4.png"
                border="0"
                width={"200px"}
              />
            </Link>
          </div>

          <div className="relative mr-[20px]">
            <AiOutlineShoppingCart size={30} />
            <span className="absolute right-0 top-0 rounded-full w-4 h-4 bg-[#3bc177] top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              1
            </span>
          </div>
        </div>

        {/* header sidebar for mobile */}
        {open && (
          <div
            className={`fixed top-0 left-0 w-full bg-[#0000005f] h-full z-10`}
          >
            <div className="fixed w-[60%] bg-white h-screen top-0 left-0 z-20 overflow-y-scroll">
              <div className="w-full flex justify-between pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full w-4 h-4 bg-[#3bc177] top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="mt-5 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto relative h-[40px]">
                <input
                  type="text"
                  placeholder="Search Products.."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-3 border-[2px] border-[#3957db] rounded-md"
                />

                <AiOutlineSearch
                  size={20}
                  className="absolute right-2 top-1.5 cursor-pointer"
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute bg-slate-50 shadow-md rounded mr-[10px] z-[9] p-4">
                    {searchData &&
                      searchData.map((i, index) => {
                        const d = i.name;
                        const product_name = d.replace(/\s+/g, "-");
                        return (
                          <Link to={`/product/${product_name}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={i.image_Url[0].url}
                                // src={`${user?.avatar?.url}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              {/* navbar for mobile */}
              <div className={`${styles.noramlFlex}`}>
                <Navbar active={activeHeading} />
              </div>

              {/* seller button  */}

              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center ">
                    Become seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <div className="flex justify-center w-full">
                {
                  !isAuthenticated ? (
                    <>
                    <Link to="/login" className="text-[18px] text-[#000000ba] pr-[10px]"> Login /</Link>
                    <Link to="/signup" className="text-[18px] text-[#000000ba] pr-[10px]"> SignUp</Link>
                    </>
                  )  : (
                    <div>
                     <Link to="/profile" >
                     <img
                    src={`${backend_url}/${user.avatar}`}
                    className="w-[70px] h-[70px] rounded-full mb-[15px] border-green-500  border-[2px]"
                    alt=""
                  />
                     </Link>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
