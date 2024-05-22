import { useParams, useNavigate } from "react-router-dom";
import ReportContext from "./ReportContext";
import { useContext } from "react";

const ReportDetail = ({ index, handleDeleteTask }) => {
  const { id } = useParams();
  const { reports, deleteReport } = useContext(ReportContext);
  const navigate = useNavigate();
  const report = reports.find((report) => report.id === parseInt(id));

  if (!report) {
    return <p>報告書がありません</p>;
  }

  const handleDeleteClick = () => {
    deleteReport(report.id);
    navigate("/report-list"); // 削除後に報告書一覧にリダイレクト
  };

  return (
    <div>
      <h1>報告書詳細ページ</h1>
      <p>日付:{report.dateinput}</p>
      <h4>タイトル:{report.title}</h4>
      <h4>今日したこと&明日すること</h4>
      <p>{report.todayTomorrow}</p>
      <h4>報告事項</h4>
      <p>{report.reportDetails}</p>
      {/* 「button」を呼び出し「削除機能」を追加 */}
      <button onClick={handleDeleteClick} className="delete-button">
        削除
      </button>
    </div>
  );
};
export default ReportDetail;
