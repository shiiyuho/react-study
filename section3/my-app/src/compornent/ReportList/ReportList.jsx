import React, { useContext } from "react";
import { ReportContext } from "../ReportContext";
import { Link } from "react-router-dom";

/**
 * お気に入りレポートのリストを表示するコンポーネントです。
 * @returns {JSX.Element} お気に入りレポートのリストを表示するJSX要素
 */
const ReportList = () => {
  /**
   * レポートコンテキストからレポートとレポートを削除する関数を取得します。
   */
  const { reports, removeReport } = useContext(ReportContext);

  /**
   * レポートがロード中の場合、ローディングメッセージを表示します。
   */
  if (!reports) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>お気に入りページ</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {reports.map((report) => (
          <div key={report.id} style={{ margin: "10px" }}>
            <Link to={`/report-detail/${report.id}`}>
              <img
                src={report.url}
                alt="dog"
                style={{ width: "150px", height: "150px" }}
              />
            </Link>
            <p>
              {report.breeds.length > 0
                ? report.breeds[0].name
                : "Unknown Breed"}
            </p>
            <button onClick={() => removeReport(report.id)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportList;
