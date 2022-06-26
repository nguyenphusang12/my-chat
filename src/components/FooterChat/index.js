import React from "react";
import iconSend from "assets/icons/paper-plane.png";
import iconImage from "assets/icons/image.png";

const FooterChat = () => {
  return (
    <div className="w-full flex justify-center px-2">
      <div className="w-12 px-2 flex justify-content items-center">
        <label htmlFor="uploadImage">
          <img src={iconImage} alt="xxx" className="w-full object-container" />
        </label>
        <input type="file" name="" accept="image/png, image/gif, image/jpeg" id="uploadImage" hidden/>
      </div>
      <div className="h-14 flex-1">
        <textarea
          type="text"
          className="w-full h-full outline-none px-2 pt-1  border border-solid border-[#ccc] rounded-xl focus:border-primary text-lg shadow-inner focus:shadow-primary"
        />
      </div>
      <div className="w-12 px-2 flex justify-content items-center">
        <img src={iconSend} alt="xxx" className="w-full object-container" />
      </div>
    </div>
  );
};

export default FooterChat;
