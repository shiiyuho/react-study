import React from "react";
import "./TodoButton.css";

//関数「Button」を定義しボタン操作の動きを設定
const Button = ({ onClick, label, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
