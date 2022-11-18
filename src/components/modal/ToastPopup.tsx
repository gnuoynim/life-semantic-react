import React from "react";

const ToastPopup = ({ show = false, text }: { show: boolean, text: string }) => {
  return (
    <React.Fragment>
      <div className="toastPop" style={{ display: show ? 'block' : 'none' }}>
        <p className="title">{text}</p>
      </div>
    </React.Fragment>
  );
};

export default ToastPopup;
