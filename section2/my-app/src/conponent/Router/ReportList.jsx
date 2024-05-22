import React from "react";
import { useContext } from "react";
import ReportContext from "./ReportContext";
import { Link } from "react-router-dom";

const ReportList = () => {
  const { reports, deleteReport } = useContext(ReportContext);

  // 日付順にソート（最新の報告が上に来るようにする）
  const sortedReports = [...reports].sort(
    (a, b) => new Date(b.dateinput) - new Date(a.dateinput)
  );

  return (
    <div>
      <h1>報告書一覧ページ</h1>
      {reports.length === 0 ? (
        <p>報告書がありません</p>
      ) : (
        <ul>
          {sortedReports.map((report) => (
            <li key={report.id}>
              <Link to={`/report-detail/${report.id}`}>
                {report.dateinput}
                {report.title}
              </Link>
              <button onClick={() => deleteReport(report.id)} className="delet">
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportList;
