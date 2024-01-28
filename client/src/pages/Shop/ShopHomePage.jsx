import React from "react";
import styles from "../../styles/styles";
// import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
// import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
// import DashboardMessages from "../../components/Shop/DashboardMessages";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopInboxPage = () => {
  // return (
  //   <div>
  //     <DashboardHeader />
  //     <div className="flex items-start justify-between w-full">
  //       <div className="w-[330px]">
  //         <DashboardSideBar active={8} />
  //       </div>
  //       <DashboardMessages />
  //     </div>
  //   </div>
  // );
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="f-full flex py-10 justify-between">
        <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-[72%] rounded-[4px] ">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopInboxPage;
