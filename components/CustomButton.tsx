"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  rightIcon,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={` flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className=" relative w-6 h6">
          <Image
            src={rightIcon}
            alt="right icon"
            className=" object-contain"
            fill
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
