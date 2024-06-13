import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ReportContext } from "../ReportContext";

/**
 * 画像の一覧を表示し、お気に入り登録を行うコンポーネントです。
 * @returns {JSX.Element} 画像の一覧を表示するJSX要素
 */
const ReportCreation = () => {
  /**
   * 画像の状態と取得のローディング状態を管理します。
   */
  //imagesの設定と初期化
  const [images, setImages] = useState([]);
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
   * 画像を取得する関数です。
   */
  const fetchImages = async () => {
    try {
      const response = await fetch(
        //apiと画像の出力設定（limit=21で枚数を21枚に設定中）
        `https://api.thedogapi.com/v1/images/search?limit=21&api_key=${apiKey}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("error文:", error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * ページが開かれるときに画像を取得する
   */
  useEffect(() => {
    fetchImages();
  }, []);

  /**
   * ローディング中の場合はローディングメッセージを表示します。
   * 取得した画像の一覧を表示し、お気に入り登録ボタンを提供します。
   */
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>画像一覧</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: "10px" }}>
            <Link to={`/report-detail/${image.id}`}>
              <img
                src={image.url}
                alt="dog"
                style={{ width: "150px", height: "150px" }}
              />
            </Link>
            <p>
              {image.breeds.length > 0 ? image.breeds[0].name : "Unknown Breed"}
            </p>
            <button onClick={() => addReport(image)}>お気に入り登録</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportCreation;
