import Image from "next/image";
import { useState } from "react";
import { bucket, getFolderName } from "@/utils/awsConstants";

interface ImageSelectorProps {
  id: string;
  type: string;
  images: string[];
}

export default function ImageSelector(props: ImageSelectorProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // index of image being displayed

  return (
    <div className={"flex flex-row items-center justify-evenly w-full p-5 min-h-fit bg-white drop-shadow-md"}>
      {/* images roulette */}
      <div className={"flex flex-col p-2 max-h-96 overflow-scroll"}>
        {props.images.map((fileName, index) => (
          <button
            onClick={() => setCurrentImageIndex(index)}
            className={`mb-4 w-[100px] h-[100px] rounded-md border-4 p-1 ${currentImageIndex === index ? "border-[#D40E0E]": "border-gray-300"}`}
          >
            <Image
              src={`${bucket}/${getFolderName(props.type)}/${props.id}/${
                props.images[index]
              }`}
              width={100}
              height={100}
              alt={fileName}
            />
          </button>
        ))}
      </div>
      {/* displayed image */}
      <div className={"relative w-[350px] h-[350px]"}>
        <Image
          src={`${bucket}/${getFolderName(props.type)}/${props.id}/${
            props.images[currentImageIndex]
          }`}
          width={350}
          height={350}
          alt="prod"
        />
      </div>
    </div>
  );
}
