import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  srcImage: string | null | undefined;
}

const Avatar = ({ srcImage }: AvatarProps) => {
  return (
    <div>
      {srcImage ? (
        <>
          <Image
            src={srcImage}
            alt="Avatar"
            height={30}
            width={30}
            className="rounded-full"
          />
        </>
      ) : (
        <FaUserCircle color="gray" size={30} />
      )}
    </div>
  );
};

export default Avatar;
