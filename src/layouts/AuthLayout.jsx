import React from "react";
import { Outlet } from "react-router";
import authImage from "../../src/assets/authImage.png";

export default function AuthLayout() {
  return (
    <div className="section">
      <div className="container">
        <div className="w-[200px]">
          <img src="/logo-img/logo.png" alt="" className="" />
        </div>
        <div className="flex">
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <div className="flex-1">
            <img src={authImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
