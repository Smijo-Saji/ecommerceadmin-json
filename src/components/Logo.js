import React from "react";
import { FireFilled } from "@ant-design/icons";

function Logo({ collapsed }) {
  return (
    <div className="logo">
      <div className="logo-icon">
        {/* <FireFilled /> */}
        <img src="https://i.postimg.cc/Gmd5NPVB/3135715.png" alt="" />
        {!collapsed && (
          <>
            <b>Admin</b>
          </>
        )}
      </div>
    </div>
  );
}

export default Logo;
