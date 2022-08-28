import React, { useState } from "react";
import {
  Box,
  Text,
} from "@chakra-ui/react";
import { FaHammer } from "react-icons/fa";
import ButtonPlane from "./ButtonPlane";
import { AiOutlineThunderbolt } from "react-icons/ai";

function Banner() {
  const [loading, setLoading] =
    useState(false);
  return (
    <Box className="relative max-w-5xl mx-auto pt-20 sm:pt-10 lg:pt-10">
      <Box className="p-3">
        <Text className="text-white font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-tight text-center">
          Build Your Handy{" "}
          <b className="text-fastletter_mix font-extrabold">
            CoverLetter
          </b>{" "}
          in less than a minute
        </Text>
      </Box>

      <Box className="flex items-center justify-center mt-10">
        <ButtonPlane
          title="Let's Build"
          icon={
            <AiOutlineThunderbolt className="relative w-7 h-7 mr-2 text-white" />
          }
          loading={loading}
          setLoading={setLoading}
          textsize="text-xl font-extrabold"
          navigationpath="/buildform"
        />
      </Box>
    </Box>
  );
}

export default Banner;
