import React from "react";

export const Avatar = ({ image }: { image: string }) => {
  return (
    <div className="h-12 w-12 rounded-full object-contain overflow-hidden">
      <img className="h-full w-full" src={image} alt="avatar" />
    </div>
  );
};
