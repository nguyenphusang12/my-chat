import React, { useEffect } from "react";
import HeaderChat from "../../components/HeaderChat";
import FooterChat from "../../components/FooterChat";
import style from "./Chat.module.css";
import clsx from "clsx";

const Chat = () => {
  useEffect(() => {
    const rootElement = document.documentElement;
    const setHeightApp = () => {
      console.log("rootElement.clientHeight: ", rootElement.clientHeight);
      rootElement.style.setProperty("--height-app", `${rootElement.clientHeight}px`);
    };
    setHeightApp();
    rootElement.addEventListener("resize", setHeightApp);
    return () => rootElement.removeEventListener("resize", setHeightApp);
  }, []);

  return (
    <div>
      <HeaderChat />
      <div className={clsx("text-gray-600 text-xl", style.body)}>
        Hello Mi Mi
      </div>
      <FooterChat />
    </div>
  );
};

export default Chat;
