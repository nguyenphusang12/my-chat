import React, { useEffect } from "react";
import HeaderChat from "../../components/HeaderChat";
import FooterChat from "../../components/FooterChat";
import style from "./Chat.module.css";
import clsx from "clsx";

const Chat = () => {
 

  return (
    <div>
      <HeaderChat />
      <div className={clsx("text-gray-600 text-xl py-2", style.body)}>
        {/* ***** */}

        <div className="max-w-[80%] flex ml-auto justify-end mb-2">
          <div className="max-w-[80%] py-2 px-4 break-words bg-primary rounded-t-[30px] rounded-bl-[30px] text-white mr-2">
            Sang hello em
          </div>
          <div className="w-1/5 flex items-end">
            <div
              className="w-full pt-[100%] bg-no-repeat bg-cover rounded-full bg-center"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3TDQBB-_F1sfu-gElz73vtUAdlOdLerHDw&usqp=CAU)",
              }}
            ></div>
          </div>
        </div>

        {/* ****** */}

        <div className="max-w-[80%] flex mr-auto mb-2">
          <div className="w-1/5 flex items-end">
            <div
              className="w-full pt-[100%] bg-no-repeat bg-cover rounded-full bg-center"
              style={{
                backgroundImage:
                  "url(https://www.dcine.vn/Areas/Admin/Content/Fileuploads/images/News/photo_1_15477129204692130819676.jpg)",
              }}
            ></div>
          </div>
          <div className="max-w-[80%] p-2 break-words bg-[#aabed3] rounded-t-[30px] rounded-br-[30px] text-white ml-2">
            My My
          </div>
        </div>
      </div>
      <FooterChat />
    </div>
  );
};

export default Chat;
