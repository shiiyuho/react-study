import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReportContext } from "../ReportContext";

/**
 * レポートの詳細を表示するコンポーネントです。
 * @returns {JSX.Element} レポートの詳細を表示するJSX要素
 */
const ReportDetail = () => {
  /**
   * URLパラメータからIDを取得します。
   */
  const { id } = useParams();

  /**
   * レポートの状態と取得のローディング状態を管理します。
   */
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * レポートコンテキストからaddReport関数を取得します。
   */
  const { addReport } = useContext(ReportContext);

  /**
   * APIキーを設定します。
   */
  const apiKey =
    "live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw";

  /**
   * レポートの詳細を取得する副作用フックです。
   */
  useEffect(() => {
    /**
     * レポートの詳細を取得する非同期関数です。
     */
    const fetchReportDetails = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/images/${id}?api_key=${apiKey}`
        );
        const data = await response.json();
        setReport(data);
      } catch (error) {
        console.error("Error fetching report details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportDetails();
  }, [id, apiKey]);

  /**
   * 別の画像を取得する非同期関数です。
   */
  const fetchAnotherImage = async () => {
    try {
      const breedId = report.breeds.length > 0 ? report.breeds[0].id : null;
      if (breedId) {
        const response = await fetch(
          `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setReport(data[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching another image:", error);
    }
  };

  /**
   * ローディング中の場合はローディングメッセージを表示します。
   * レポートが存在しない場合はメッセージを表示します。
   * レポートが存在する場合は、詳細を表示します。
   */
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div>
      <h2>画像の詳細</h2>
      <div>
        <img
          src={report.url}
          alt="dog"
          style={{ width: "300px", height: "300px" }}
        />
        <p>
          種類:{" "}
          {report.breeds.length > 0 ? report.breeds[0].name : "Unknown Breed"}
        </p>
        {report.breeds.length > 0 && (
          <>
            <p>生息地: {report.breeds[0].origin || "Unknown"}</p>
            <p>サイズ: {report.breeds[0].size || "Unknown"}</p>
          </>
        )}
        <button onClick={fetchAnotherImage}>別の画像を見る</button>
        <button onClick={() => addReport(report)}>お気に入り登録</button>
      </div>
    </div>
  );
};

export default ReportDetail;
