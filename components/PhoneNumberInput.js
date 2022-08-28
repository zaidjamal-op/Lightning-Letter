import React, {
  useState,
  useEffect,
} from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode } from "../constants/countries";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
export default function PhoneNumberInput({
  size,
  value,
  country,
  options,
  onChange,
  placeholder,
  ...rest
}) {
  let [number, setNumber] = useState(
    value || ""
  );
  let [
    selectedCountry,
    setSelectedCountry,
  ] = useState(country || "");
  let [countryCode, setCountryCode] =
    useState(
      getCountryTelCode(country) || ""
    );

  useEffect(() => {
    setSelectedCountry(country);
    setCountryCode(
      getCountryTelCode(country)
    );
  }, [country]);

  const onCountryChange = (e) => {
    let value = e.target.value;
    let code = getCountryTelCode(value);
    let parsedNumber =
      new AsYouType().input(
        `${code}${number}`
      );

    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber);
  };

  const onPhoneNumberChange = (e) => {
    let value = e.target.value;
    let parsedNumber =
      new AsYouType().input(
        `${
          countryCode === undefined
            ? "+91"
            : countryCode
        }${value}`
      );

    setNumber(value);
    onChange(parsedNumber);
  };

  const DefaultFlag = "IND";

  return (
    <InputGroup size={size} {...rest}>
      <InputLeftElement width="3rem">
        <Select
          top="10px"
          left="30px"
          zIndex={1}
          bottom={0}
          opacity={0}
          height="100%"
          position="absolute"
          value={selectedCountry}
          onChange={onCountryChange}
        >
          <option value="" />
          {options.map((option, i) => (
            <option
              value={option.value}
              key={i}
            >
              {option.label}
            </option>
          ))}
        </Select>

        <Flex
          pl={2}
          width="100%"
          alignItems="center"
        >
          {selectedCountry ||
          DefaultFlag ? (
            <Box
              mr="4px"
              width="50%"
              flex={1}
            >
              <Flag
                height="6px"
                code={
                  selectedCountry ||
                  DefaultFlag
                }
                className="rounded-sm"
              />
            </Box>
          ) : (
            <BsTelephoneFill className="ml-3 text-gray-700 focus:text-white" />
          )}
        </Flex>
      </InputLeftElement>
      <Input
        pl="5rem"
        type="tel"
        value={number}
        pattern="[0-9]"
        placeholder={placeholder}
        onChange={onPhoneNumberChange}
        className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gary-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
        variant="filled"
        focusBorderColor="#A7D129"
      />
    </InputGroup>
  );
}

PhoneNumberInput.defaultProps = {
  options: [],
  size: "md",
};
