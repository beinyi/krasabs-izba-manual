import React from "react";
import { useState } from "react";
import "@styles/Menu.css";

declare global {
  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullscreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
    webkitEnterFullscreen?: () => Promise<void>;
  }
}
export const FullScreenButton = () => {
  const [fullScreen, setFullScreen] = useState(false);

  function openFullscreen() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) {
      docElm.webkitRequestFullscreen();
    } else if (docElm.mozRequestFullscreen) {
      docElm.mozRequestFullscreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    } else if (docElm.webkitEnterFullscreen) {
    }
  }
  function closeFullScreen() {
    document.exitFullscreen();
  }
  document.addEventListener("fullscreenchange", (event) => {
    setFullScreen(!fullScreen);
  });

  return (
    <div className="menu_fullscreen-button">
      <img
        onClick={() => {
          !fullScreen ? openFullscreen() : closeFullScreen();
        }}
        src={require(fullScreen ? "@img/ic_set_fullscreen_off.svg" : "@img/ic_set_fullscreen_on.svg")}
      />
      <span>{fullScreen ? "Свернуть" : "Развернуть"}</span>
    </div>
  );
};
