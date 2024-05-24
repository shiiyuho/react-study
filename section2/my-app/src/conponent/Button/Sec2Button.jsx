import React from "react";

/**
 * 汎用ボタンコンポーネント。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {function} props.onClick - クリック時のハンドラ。
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
