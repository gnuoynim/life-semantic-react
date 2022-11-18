import React from "react";

const ToastPopup = ({ show = false, content }: { show: boolean, content: string | React.ReactElement }) => {
  return (
    <React.Fragment>
      <div className="toastPop" style={{ display: show ? 'block' : 'none' }}>
        <p className="title">{content}</p>
      </div>
    </React.Fragment>
  );
};

export default ToastPopup;
