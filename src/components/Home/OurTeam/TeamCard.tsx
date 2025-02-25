import Image from "next/image";
import React from "react";

type ImagePathType = {
  imagePath: string;
};

const TeamCard = ({ imagePath }: ImagePathType) => {
  return (
    <div className="text-center">
      <div className="w-[200px] h-[200px] border-2 border-gray-300 rounded-full relative">
        <Image
          src={imagePath}
          fill
          alt="Team Member"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <p>Aminul</p>
      </div>
    </div>
  );
};

export default TeamCard;
