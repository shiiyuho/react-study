import React, { createContext, useState, useEffect } from "react";

/**
 * レポートに関するコンテキストを作成します。
 * @type {React.Context}
 */
const ReportContext = createContext();

/**
 * レポート関連の状態と機能を提供するプロバイダーです。
 * @param {Object} props - 子要素を含むプロバイダーのプロパティ
 * @param {React.ReactNode} props.children - プロバイダーに含まれる子要素
 * @returns {JSX.Element} レポートコンテキストのプロバイダー
 */
const ReportProvider = ({ children }) => {
  /**
   * レポートの配列を格納する状態です。
   * @type {[Array, Function]} レポートの配列とその更新関数
   */
  const [reports, setReports] = useState([]);

  //ページが表示される（レンダリング）とローカルストレージから上の「reports」を取得
  useEffect(() => {
    const storedReports = localStorage.getItem("reports");
    if (storedReports) {
      //取得したreportsをstoredReportsに装備
      setReports(JSON.parse(storedReports));
    }
  }, []);

  /**
   * 新しいレポートを追加します。また、ローカルストレージにもレポートを保存します。
   * @param {Object} report - 追加するレポートのデータ
   */
  const addReport = (report) => {
    //スプレッド演算子で新しいreportsを追加＆更新
    setReports([...reports, report]);
    //localStorageにsetReportを保存
    localStorage.setItem("reports", JSON.stringify([...reports, report]));
  };

  /**
   * 指定されたIDのレポートを削除します。また、ローカルストレージからも削除します。
   * @param {string} reportId - 削除するレポートのID
   */
  const removeReport = (reportId) => {
    const updatedReports = reports.filter((report) => report.id !== reportId);
    setReports(updatedReports);
    localStorage.setItem("reports", JSON.stringify(updatedReports));
  };

  /**
   * 指定されたIDのレポートを取得します。
   * @param {string} id - 取得するレポートのID
   * @returns {Object|undefined} 指定されたIDのレポート、見つからない場合はundefined
   */
  const getReportById = (id) => {
    return reports.find((report) => report.id === id);
  };

  return (
    <ReportContext.Provider
      value={{ reports, addReport, removeReport, getReportById }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export { ReportContext, ReportProvider };
