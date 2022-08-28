import {
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import ButtonGradient from "./ButtonGradient";
import { generateDoc } from "../lib/Docx";
import { useRecoilState } from "recoil";
import { allData } from "../atom/HandleFormData";

function Download() {
  const [data, setData] =
    useRecoilState(allData);
  const download = (data) => {
    generateDoc(data);
  };
  return (
    <div className="bg-white p-3 rounded w-full xl:w-1/2 md:w-[70%] mx-auto">
      <div className="relative p-3">
        <Text className="text-fastletter_mix font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center">
          Your Lightning CoverLetter is
          Ready
        </Text>
      </div>
      <Box className="p-3 flex items-center justify-center">
        <ButtonGradient
          title="Download"
          size="lg"
          bg="#A7D129"
          textcolor="text-black"
          icon={
            <FaDownload className="text-xl group-hover:text-blue-500" />
          }
          download={download}
          data={data}
        />
      </Box>
    </div>
  );
}

export default Download;
