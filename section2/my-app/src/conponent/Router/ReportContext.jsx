import { useState, createContext } from "react";

/**
 * 報告書の状態管理を行うコンテキスト。
 * @component
 * @param {Object} props - プロパティオブジェクト。
 * @param {React.ReactNode} props.children - 子要素。
 */
const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, report]);
  };

  const deleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <ReportContext.Provider value={{ reports, addReport, deleteReport }}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportContext;
