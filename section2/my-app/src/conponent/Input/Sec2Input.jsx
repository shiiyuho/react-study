import React from "react";
import { useState, useContext } from "react";
import ReportContext from "../Router/ReportContext";
import ReportDetail from "../Router/ReportDetail";

/**
 * 報告書作成のための入力フォームコンポーネント。
 * @component
 */
const Sec2Input = () => {
  const [reportContent, setReportContent] = useState({
    title: "",
    todayTomorrow: "",
    reportDetails: "",
    dateValue: "",
  });
  const [error, setError] = useState("");
  const { addReport } = useContext(ReportContext);
  const [dateValue, setDateValue] = useState(""); // 日付の状態を追加
  const [submitted, setSubmitted] = useState(false);

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const formattedDate = formatDate(dateValue);
    const submittedData = {
      date: formattedDate, // フォーマットされた日付を保存
    };

    localStorage.setItem("submittedData", JSON.stringify(submittedData)); // データをローカルストレージに保存
    setSubmitted(true); // 提出済みフラグを設定
    console.log("送信されたデータ:", submittedData);
  };

  if (submitted) {
    return <ReportDetail />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      reportContent.title.trim() === "" ||
      reportContent.todayTomorrow.trim() === "" ||
      reportContent.reportDetails.trim() === ""
    ) {
      setError("必須項目です");
      return;
    } else {
      setError("");
    }
    const formattedDate = formatDate(dateValue);
    const newReport = {
      id: Date.now(),
      ...reportContent,
      dateinput: formattedDate, // フォーマットされた日付
    };
    addReport(newReport);
    setReportContent({
      title: "",
      todayTomorrow: "",
      reportDetails: "",
      dateValue: "",
    });
    setDateValue(""); // 日付をリセット
    alert("報告書が追加されました");
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setReportContent((prevContent) => ({
      ...prevContent,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        日付を入力:
        <form onSubmit={handleSubmit2}>
          <input
            type="datetime-local" // 日時入力フィールド
            name="dateValue"
            value={dateValue}
            onChange={handleDateChange}
            className="date-input"
            placeholder="日付を入力してください"
          />
        </form>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="タイトル記入欄"
            onChange={handleTextChange}
            value={reportContent.title}
            style={{
              padding: "8px",
              fontSize: "16px",
              borderColor: error ? "red" : "",
            }}
            className="title"
          />
        </div>

        <div>
          <textarea
            name="todayTomorrow"
            rows={4}
            cols={40}
            placeholder="今日したこと&明日すること"
            onChange={handleTextChange}
            value={reportContent.todayTomorrow}
            className="text1"
          />
        </div>

        <div>
          <textarea
            name="reportDetails"
            placeholder="報告事項"
            rows={4}
            cols={40}
            onChange={handleTextChange}
            value={reportContent.reportDetails}
            className="text2"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="submit-button">
          完了ボタン
        </button>
      </form>
    </div>
  );
};

export default Sec2Input;
