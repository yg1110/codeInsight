import React from "react";
import BasicAlert from "./BasicAlert";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container'>
      <div className='content'>{children}</div>
      <BasicAlert />
    </div>
  );
};
