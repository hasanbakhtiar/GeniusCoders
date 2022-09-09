import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ModeBtn from "./components/mode/ModeBtn";
import ModeTop from "./components/mode/ModeTop";
import "./sass/style.css";
import "./langConfig/i18next";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [mode, setMode] = useState("light");
  useEffect(() => {
    document.body.className = mode;
  });
  return (
    <div>
      <ModeTop color={mode} />
      <ModeBtn color={mode} setColor={setMode} />

      <div>
        <h1>{t("m.0")}</h1>
        <button
          onClick={() => {
            handleClick("az");
          }}
        >
          az
        </button>
        <button
          onClick={() => {
            handleClick("tr");
          }}
        >
          tr
        </button>
        <button
          onClick={() => {
            handleClick("en");
          }}
        >
          en
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.querySelector('#root'));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//   <Suspense fallback="loading"><App /></Suspense>
//   </React.StrictMode>
// );
