import React from "react";
import {
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  SiGmail,
  SiBuymeacoffee,
} from "react-icons/si";
function Footer() {
  return (
    <Box className="fixed bottom-0 w-full bg-black ">
      <Box className=" p-3 w-full">
        <Box className="flex items-center justify-between">
          <Text className="font-semibold text-white">
            Made with ⚡{" "}
            <Link
              color="white"
              href="https://zaids-portfolio.vercel.app/"
              isExternal
            >
              zaidjamal
            </Link>
          </Text>
          <Box className="flex items-center justify-center space-x-4">
            <AiFillGithub
              className="hoverAnimation rounded-full"
              onClick={() => {
                window.open(
                  "https://github.com/zaidjamal-op/"
                );
              }}
            />
            <AiFillLinkedin
              className="hoverAnimation rounded-full"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/zaid-jamal-1856b1203/"
                );
              }}
            />
            <Link href="mailto: iamzaidbinarshad@gmail.com">
              <SiGmail className="hoverAnimation" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
