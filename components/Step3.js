import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
  describeYourSkillsAndBenefits,
  mentionMilestones,
  resumeLink,
  otherLinks,
  previousRole,
  accomplishmentAndStrengthen,
  effectOfAccomplishment,
  showpreviousemployer,
} from "../atom/HandleFormData";
import { generateDoc } from "../lib/Docx";

function Step3({
  Continue,
  Previous,
  step,
  postdata,
}) {
  const [
    showPreviousEmployer,
    setShowPreviousEmployer,
  ] = useRecoilState(
    showpreviousemployer
  );
  const [
    DescribeYourSkillsAndBenefits,
    setDescribeYourSkillsAndBenefits,
  ] = useRecoilState(
    describeYourSkillsAndBenefits
  );
  const [
    MentionMilestones,
    setMentionMilestones,
  ] = useRecoilState(mentionMilestones);
  const [ResumeLink, setResumeLink] =
    useRecoilState(resumeLink);
  const [OtherLinks, setOtherLinks] =
    useRecoilState(otherLinks);
  const [
    PreviousRole,
    setPreviousRole,
  ] = useRecoilState(previousRole);
  const [
    AccomplishmentAndStrengthen,
    setAccomplishmentAndStrengthen,
  ] = useRecoilState(
    accomplishmentAndStrengthen
  );
  const [
    EffectOfAccomplishment,
    setEffectOfAccomplishment,
  ] = useRecoilState(
    effectOfAccomplishment
  );

  return (
    <Box className="bg-white rounded w-full xl:w-3/4 md:w-[60%] mx-auto p-4 space-y-2">
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full">
          {" "}
          <Text className="text-fastletter_secondary text-lg font-extrabold">
            Describe Your Skills and
            Benefits
          </Text>
          <Textarea
            placeholder="describe how your skills and
            expertise would benefit the
            company"
            resize="vertical"
            variant="filled"
            focusBorderColor="#A7D129"
            onChange={(e) =>
              setDescribeYourSkillsAndBenefits(
                e.target.value
              )
            }
            value={
              DescribeYourSkillsAndBenefits
            }
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo  mt-4"
          />
        </Box>
        <Box className="w-full">
          {" "}
          <Text className="text-fastletter_secondary text-lg font-extrabold">
            Mention Milestones
          </Text>
          <Textarea
            placeholder="mention notable milestones or characteristics you appreciate about the company"
            resize="vertical"
            variant="filled"
            focusBorderColor="#A7D129"
            onChange={(e) =>
              setMentionMilestones(
                e.target.value
              )
            }
            value={MentionMilestones}
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo  mt-4"
          />
        </Box>
      </FormControl>
      <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0">
        <Box className="w-full ">
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Resume Link
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Enter your resume link"
            onChange={(e) =>
              setResumeLink(
                e.target.value
              )
            }
            value={ResumeLink}
          />
        </Box>
        <Box className="w-full">
          {" "}
          <FormLabel>
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Other Links
            </Text>
          </FormLabel>
          <Input
            type="text"
            focusBorderColor="#A7D129"
            className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
            variant="filled"
            size="lg"
            placeholder="Eg: (github,linkedin,personal website) put only one."
            onChange={(e) =>
              setOtherLinks(
                e.target.value
              )
            }
            value={OtherLinks}
          />
        </Box>
      </FormControl>
      <Divider />
      <FormControl className="flex justify-between items-center">
        <Box className="w-full mt-2 flex items-center justify-between mb-2">
          <FormLabel
            htmlFor="email-alerts"
            mb="0"
          >
            <Text className="text-fastletter_secondary text-lg font-extrabold">
              Previously worked in a
              company?
            </Text>
          </FormLabel>
          <Switch
            id="email-alerts"
            size="lg"
            colorScheme="whatsapp"
            onChange={(e) => {
              setShowPreviousEmployer(
                e.target.checked
              );
            }}
          />
        </Box>
      </FormControl>
      <Divider />
      {showPreviousEmployer && (
        <>
          <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0 transition-all ease-in-out">
            <Box className="w-full ">
              <FormLabel>
                <Text className="text-fastletter_secondary text-lg font-extrabold">
                  Previous Role
                </Text>
              </FormLabel>
              <Input
                type="text"
                focusBorderColor="#A7D129"
                className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
                variant="filled"
                size="lg"
                placeholder="Enter your previous role in company"
                onChange={(e) =>
                  setPreviousRole(
                    e.target.value
                  )
                }
                value={PreviousRole}
              />
              <FormHelperText>
                your most recent role at
                any company
              </FormHelperText>
            </Box>
            <Box className="w-full">
              {" "}
              <FormLabel>
                <Text className="text-fastletter_secondary text-lg font-extrabold">
                  Accomplishment and
                  Strengthen
                </Text>
              </FormLabel>
              <Input
                type="text"
                focusBorderColor="#A7D129"
                className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo placeholder:xl:text-xl placeholder:md:text-xl placeholder:text-lg placeholder:font-bold"
                variant="filled"
                size="lg"
                placeholder="Accomplishment and
                strengthen (%)"
                onChange={(e) =>
                  setAccomplishmentAndStrengthen(
                    e.target.value
                  )
                }
                value={
                  AccomplishmentAndStrengthen
                }
              />
              <FormHelperText>
                describe an
                accomplishment and
                strengthen it with a
                percentage, if possible
              </FormHelperText>
            </Box>
          </FormControl>
          <FormControl className="flex xl:flex-row flex-col justify-between xl:space-x-3  space-x-0 space-y-3 xl:space-y-0 md:xl:space-y-0 transition-all ease-in-out">
            <Box className="w-full ">
              <Text className="text-fastletter_secondary text-lg font-extrabold">
                Effect of Accomplishment
              </Text>
              <Textarea
                placeholder="mention the effect this accomplishment had on the company in question"
                resize="vertical"
                variant="filled"
                focusBorderColor="#A7D129"
                onChange={(e) =>
                  setEffectOfAccomplishment(
                    e.target.value
                  )
                }
                value={
                  EffectOfAccomplishment
                }
                className="w-full focus:text-gray-800 placeholder:text-gray-500 focus:placeholder:text-gray-500 text-2xl font-bold text-gary-700 caret-stych_indigo  mt-4"
              />
            </Box>
          </FormControl>
        </>
      )}
      <Box className="w-full flex items-center justify-between p-4">
        <button
          onClick={Previous}
          className="p-3 bg-fastletter_secondary rounded text-white font-bold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-fastletter_mix duration-300 hover:text-black"
        >
          Previous
        </button>
        <button
          disabled={
            showPreviousEmployer
              ? PreviousRole === "" ||
                EffectOfAccomplishment ===
                  "" ||
                AccomplishmentAndStrengthen ===
                  ""
              : DescribeYourSkillsAndBenefits ===
                  "" ||
                MentionMilestones ===
                  "" ||
                ResumeLink === "" ||
                OtherLinks === ""
          }
          onClick={(e) => postdata(e)}
          className="p-3 bg-fastletter_secondary rounded text-white font-bold text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-fastletter_mix duration-300 hover:text-black disabled:cursor-not-allowed disabled:hover:bg-opacity-40"
        >
          {step === 3 ? "Save" : "Next"}
        </button>
      </Box>
    </Box>
  );
}

export default Step3;
