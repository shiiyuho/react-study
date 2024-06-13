import React from "react";
import "./TodoButton.css";

/**
 * さまざまな操作に使用されるボタンコンポーネント。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {function} props.onClick - ボタンクリックを処理する関数。
 * @param {string} props.label - ボタンのラベル。
 * @param {string} props.className - ボタンのCSSクラス。
 * @param {string} props.type - ボタンのタイプ。
 */
const Button = ({ onClick, label, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
