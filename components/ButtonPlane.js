import {
  Button,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

function ButtonPlane({
  title,
  icon,
  textsize,
  navigationpath,
  setLoading,
  loading,
}) {
  const router = useRouter();
  return (
    <button
      className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-fastletter_primary rounded-md cursor-pointer group ring-offset-2 ring-1 ring-fastletter_mix ring-offset-fastletter_secondary hover:ring-fastletter_mix ease focus:outline-none"
      onClick={() => {
        setLoading(true);
        router.push(
          `${navigationpath}`
        );
      }}
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span
        className={`relative z-20 flex items-center ${textsize}`}
      >
        {loading ? (
          <Spinner mr="2" />
        ) : (
          icon
        )}
        {title}
      </span>
    </button>
  );
}

export default ButtonPlane;
