import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReportCreation from "./conponent/Router/ReportCreation";
import ReportList from "./conponent/Router/ReportList";
import { ReportProvider } from "./conponent/Router/ReportContext";
import ReportDetail from "./conponent/Router/ReportDetail";

/**
 * 日報管理システムのメインコンポーネント。
 * @component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>日報管理システム</h1>

        <ReportProvider>
          <Router>
            <div>
              {/* グローバルメニュー */}
              <nav>
                <ul>
                  <li>
                    <Link to="/report-creation">報告書作成</Link>
                  </li>
                  <li>
                    <Link to="/report-list">報告書一覧</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Routes>
              <Route path="/report-creation" element={<ReportCreation />} />
              <Route path="/report-list" element={<ReportList />} />
              <Route path="/report-detail/:id" element={<ReportDetail />} />
              {/* デフォルトルートを追加 */}
              <Route path="/" exact element={<ReportCreation />} />
            </Routes>
          </Router>
        </ReportProvider>
      </header>
    </div>
  );
}

export default App;
