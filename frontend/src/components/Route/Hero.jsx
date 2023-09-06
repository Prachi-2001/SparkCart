import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative w-full max-h-[90vh] 800px:min-h-[80vh] bg-no-repeat bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dpbnq7fm8/image/upload/v1694002247/banner_vehq7b.jpg)",
          
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[70%]`}>
        <h1
          className={`text-[2em] leading-[1.2] 800px:text-[3.5em] font-[600] text-[#3d3a3a] capitalize`}
        >
          Best Collection for <br /> home decoration
        </h1>
        <p className="text-[1em] font-[400] text-[#000000ba] pt-5 font-Poppins">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          molestiae <br />eos itaque? Earum, vel sed eligendi accusamus quas odit esse
          recusandae. Ad <br /> quidem laboriosam nostrum sunt tempore, laudantium quae
          iste?
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[16px] font-Poppins font-[400] text-[#fff]">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
