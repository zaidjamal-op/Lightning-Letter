import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import jobpostings from "../constants/jobposting";
import { useRecoilState } from "recoil";
import {
  whereYouFoundTheJobPosting,
  skills,
  qualification,
  educationalInstitution,
  experience,
  yourSoftSkills,
  yourTopTechnicalSkills,
} from "../atom/HandleFormData";

function Step2({ Continue, Previous }) {
  const [Jobposting, setJobposting] =
    useRecoilState(
      whereYouFoundTheJobPosting
    );
  const [Skills, setSkills] =
    useRecoilState(skills);
  const [
    Qualification,
    setQualification,
  ] = useRecoilState(qualification);
  const [
    EducationalInstitution,
    setEducationalInstitution,
  ] = useRecoilState(
    educationalInstitution
  );
  const [Experience, setExperience] =
    useRecoilState(experience);
  const [
    YourSoftSkills,
    setYourSoftSkills,
  ] = useRecoilState(yourSoftSkills);
  const [
    YourTopTechnicalSkills,
    setYourTopTechnicalSkills,
  ] = useRecoilState(
    yourTopTechnicalSkills
  );

  return (
    <Box className="bg-white rounded w-full xl:w-3/4 md:w-[60%] mx-auto p-4 space-y-2">
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              where you found the job
              posting?
            </Text>
          </FormLabel>
          <Select
            size="lg"
            value={Jobposting}
            onChange={(e) =>
              setJobposting(
                e.target.value
              )
            }
          >
            {jobpostings?.map(
              (jobposting, i) => (
                <option key={i}>
                  {jobposting.name}
                </option>
              )
            )}
          </Select>
        </Box>
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Skills
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your skills with ( , )"
            onChange={(e) =>
              setSkills(e.target.value)
            }
            value={Skills}
          />
          <FormHelperText>
            Mention at least two skills
            that are listed in the job
            requirements
          </FormHelperText>
        </Box>
      </FormControl>
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Qualification
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your qualification"
            onChange={(e) =>
              setQualification(
                e.target.value
              )
            }
            value={Qualification}
          />
          <FormHelperText>
            with specialization if any
          </FormHelperText>
        </Box>
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Educational Institution
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your educational institution name"
            onChange={(e) =>
              setEducationalInstitution(
                e.target.value
              )
            }
          />
        </Box>
      </FormControl>
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Experience
            </Text>
          </FormLabel>
          <NumberInput
            size="lg"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            value={Experience}
            onChange={(e) =>
              setExperience(e)
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            in Years
          </FormHelperText>
        </Box>
        <Box className="w-full">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Your Soft Skills
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your soft skills"
            onChange={(e) =>
              setYourSoftSkills(
                e.target.value
              )
            }
            value={YourSoftSkills}
          />
          <FormHelperText>
            add key soft skills that
            align with the job
            requirements
          </FormHelperText>
        </Box>
      </FormControl>

      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <Text className="text-fastletter_secondary text-lg font-extrabold">
            Your Top Technical Skills
          </Text>
          <Textarea
            placeholder="list your top technical skills, such as different web development programming languages and responsive design techniques"
            resize="vertical"
            variant="filled"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo  mt-4"
            onChange={(e) =>
              setYourTopTechnicalSkills(
                e.target.value
              )
            }
            value={
              YourTopTechnicalSkills
            }
          />
        </Box>
      </FormControl>
      <Box className="w-full flex items-center justify-between p-4">
        <button
          onClick={Previous}
          className="p-3 bg-fastletter_secondary rounded text-white font-bold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-fastletter_mix duration-300 hover:text-black"
        >
          Previous
        </button>
        <button
          disabled={
            (Skills &&
              Jobposting &&
              Qualification &&
              EducationalInstitution &&
              Experience &&
              YourTopTechnicalSkills &&
              YourSoftSkills) === ""
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

export default Step2;
