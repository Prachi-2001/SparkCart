import React, { useState } from "react";
import { styles } from "../../styles/styles";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import Header from "../Layout/Header";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [active,setActive] = useState(1);

  // const {isAuthenticated} = useSelector((state) => )
  return (
    <>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%] min-h-screen">
          <ProfileSidebar active={active} setActive={setActive}/>
        </div>
        <ProfileContent active={active}/>
      </div>
    </>
  );
};

export default ProfilePage;
