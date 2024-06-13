import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReportCreation from "./compornent/ReportCreation/ReportCreation";
import ReportList from "./compornent/ReportList/ReportList";
import { ReportProvider } from "./compornent/ReportContext";
import ReportDetail from "./compornent/RIportDetail/ReportDetail";

/**
 * メインアプリケーションを表すReactの関数コンポーネント。
 * ナビゲーションにはReact Routerを使用し、APIからデータを取得します。
 * @component
 * @returns {JSX.Element} アプリケーションを表すJSX要素
 */
function App() {
  /**
   * 取得したユーザーデータを格納するステート。
   * @type {[Array, Function]} ユーザーデータの配列とステートを設定する関数
   */
  const [users, setUsers] = useState([]);

  /**
   * データを取得中のローディング状態を追跡するステート。
   * @type {[boolean, Function]} ローディング状態とそのステートを設定する関数
   */
  const [loading, setLoading] = useState(true);

  /**
   * データを取得するためのAPIキー。
   * @type {string}
   */
  const apiKey =
    "live_CAYtJ89PvWAC4RfRTjCTNKyNq9j4XrwmbmFgJbaqBydfBHc9Kx2OTK1EWKxBuwSw";

  /**
   * APIからユーザーデータを非同期で取得する関数。
   * @async
   * @function fetchUsers
   * @returns {Promise<void>}
   */
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://documenter.getpostman.com/view/4016432/the-dog-api/RW81vZ4Z#intro/users?api=${apiKey}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * コンポーネントがマウントされたときにユーザーを取得するエフェクトフック。
   */
  useEffect(() => {
    fetchUsers();
  }, []);

  /**
   * データが取得中の場合はローディングメッセージをレンダリングします。
   * データが読み込まれたら、メインアプリケーションのコンテンツをレンダリングします。
   * @returns {JSX.Element} アプリケーションコンテンツを表すJSX要素
   */
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ReportProvider>
      <div className="App">
        <Router>
          <header className="App-header">
            <h1>APIを使用した画面開発</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/report-creation">画像一覧</Link>
                </li>
                <li>
                  <Link to="/report-list">お気に入りページ</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="App-content">
            <Routes>
              <Route path="/report-creation" element={<ReportCreation />} />
              <Route path="/report-list" element={<ReportList />} />
              <Route path="/report-detail/:id" element={<ReportDetail />} />
            </Routes>
            <div>
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Router>
      </div>
    </ReportProvider>
  );
}

export default App;
