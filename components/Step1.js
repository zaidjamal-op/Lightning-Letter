import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import PhoneNumberInput from "./PhoneNumberInput";
import { COUNTRIES } from "../constants/countries";
import jobpostings from "../constants/jobposting";
import { useRecoilState } from "recoil";
import {
  userName,
  email,
  phoneNumber,
  date,
  companyName,
  recipientName,
  address,
} from "../atom/HandleFormData";

import React, { useState } from "react";

function Step1({ Continue }) {
  const [username, setUserName] =
    useRecoilState(userName);
  const [
    emailAddress,
    setEmailAddress,
  ] = useRecoilState(email);

  const [phone, setPhone] =
    useRecoilState(phoneNumber);
  const [Date, setDate] =
    useRecoilState(date);
  const [companyname, setCompanyName] =
    useRecoilState(companyName);

  const [
    recipientname,
    setRecipientName,
  ] = useRecoilState(recipientName);
  const [Address, setAddress] =
    useRecoilState(address);

  const countryOptions = COUNTRIES.map(
    ({ name, iso }) => ({
      label: name,
      value: iso,
    })
  );
  return (
    <Box className="bg-white rounded w-full xl:w-3/4 md:w-[60%] mx-auto p-4 space-y-2">
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your name"
            value={username}
            onChange={(e) =>
              setUserName(
                e.target.value
              )
            }
          />
        </Box>
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Email Address
            </Text>
          </FormLabel>
          <Input
            type="email"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your email"
            value={emailAddress}
            onChange={(e) =>
              setEmailAddress(
                e.target.value
              )
            }
          />
          <FormHelperText>
            We'll never share your
            email.
          </FormHelperText>
        </Box>
      </FormControl>
      <FormControl className="flex xl:flex-row md:flex-row flex-col justify-between xl:space-x-3 md:space-x-3 space-x-0 space-y-3 xl:space-y-0 md:space-y-0">
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Phone Number
            </Text>
          </FormLabel>
          <PhoneNumberInput
            value={phone}
            options={countryOptions}
            placeholder="Enter phone number"
            onChange={(phone) =>
              setPhone(phone)
            }
            size="lg"
          />
        </Box>
        <Box className="w-full">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Date
            </Text>
          </FormLabel>
          <Input
            type="date"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter date"
            value={Date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />
          <FormHelperText>
            Submission date of
            Coverletter
          </FormHelperText>
        </Box>
      </FormControl>
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Company Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your company name"
            value={companyname}
            onChange={(e) =>
              setCompanyName(
                e.target.value
              )
            }
          />
          <FormHelperText>
            Company Name you want to
            apply for
          </FormHelperText>
        </Box>
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Recipient’s Name
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your recipient’s name"
            value={recipientname}
            onChange={(e) =>
              setRecipientName(
                e.target.value
              )
            }
          />
        </Box>
      </FormControl>
      <Divider />
      <Text className="text-fastletter_secondary text-lg font-extrabold">
        Address
      </Text>
      <Textarea
        placeholder="Address (Please enter your current address)"
        size="lg"
        resize="vertical"
        variant="filled"
        focusBorderColor="#A7D129"
        className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold mt-4"
        onChange={(e) =>
          setAddress(e.target.value)
        }
        value={Address}
      />
      <Box className="w-full flex items-center justify-end p-4">
        <button
          disabled={
            (userName &&
              emailAddress &&
              Address &&
              companyname &&
              phone &&
              Date &&
              recipientname) === ""
          }
          onClick={Continue}
          className="p-3 bg-fastletter_secondary rounded text-white font-bold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-fastletter_mix duration-300 hover:text-black disabled:cursor-not-allowed disabled:hover:bg-opacity-40"
        >
          Next
        </button>
      </Box>
    </Box>
  );
}

export default Step1;
