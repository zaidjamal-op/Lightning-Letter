import {
  Box,
  Divider,
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
  whereYouFoundTheJobPosting,
  skills,
  qualification,
  educationalInstitution,
  experience,
  yourSoftSkills,
  yourTopTechnicalSkills,
  describeYourSkillsAndBenefits,
  mentionMilestones,
  resumeLink,
  otherLinks,
  previousRole,
  accomplishmentAndStrengthen,
  effectOfAccomplishment,
  showpreviousemployer,
  allData,
  randomId,
} from "../atom/HandleFormData";
import { useRouter } from "next/router";

import React, { useState } from "react";

import Steps from "./Steps";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Download from "./Download";

function Form() {
  const router = useRouter();
  const [randomid, setRandomId] =
    useRecoilState(randomId);
  const [data, setData] =
    useRecoilState(allData);
  const [
    showPreviousEmployer,
    setShowPreviousEmployer,
  ] = useRecoilState(
    showpreviousemployer
  );
  const [username, setUserName] =
    useRecoilState(userName);
  const [
    emailAddress,
    setEmailAddress,
  ] = useRecoilState(email);

  const [phone, setPhone] =
    useRecoilState(phoneNumber);
  const [Dates, setDate] =
    useRecoilState(date);
  const [companyname, setCompanyName] =
    useRecoilState(companyName);

  const [
    recipientname,
    setRecipientName,
  ] = useRecoilState(recipientName);
  const [Address, setAddress] =
    useRecoilState(address);
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

  const [step, setStep] = useState(1);

  const NextStep = () => {
    setStep(step + 1);
  };
  const PreviousStep = () => {
    setStep(step - 1);
  };

  const Continue = (e) => {
    e.preventDefault();
    NextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    PreviousStep();
  };

  /* const formdata = {
    user_name: username,
    email: emailAddress,
    phone: phoneNumber,
    date: Date,
    company_name: companyname,
    recipient_name: recipientname,
    address: Address,
    jobposting: Jobposting,
    skills: Skills,
    qualification: Qualification,
    educational_institution: EducationalInstitution,
    experience: Experience,
    your_soft_skills: YourSoftSkills,
    your_top_technical_skills: YourTopTechnicalSkills,
    describe_your_skills_and_benefits: DescribeYourSkillsAndBenefits,
    mention_milestones: MentionMilestones,
    resume_link: ResumeLink,
    other_links: OtherLinks,
    previous_role: PreviousRole,
    accomplishment_and_strengthen: AccomplishmentAndStrengthen,
effect_of_accomplishment:EffectOfAccomplishment
  };*/

  const postdata = async (e) => {
    Continue(e);
    setRandomId(Date.now());
    const response = await fetch(
      "/api/fastletter",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          user_name: username,
          email: emailAddress,
          phone: phone,
          date: Dates,
          company_name: companyname,
          recipient_name: recipientname,
          address: Address,
          jobposting: Jobposting,
          skills: Skills,
          qualification: Qualification,
          educational_institution:
            EducationalInstitution,
          experience: Experience,
          your_soft_skills:
            YourSoftSkills,
          your_top_technical_skills:
            YourTopTechnicalSkills,
          describe_your_skills_and_benefits:
            DescribeYourSkillsAndBenefits,
          mention_milestones:
            MentionMilestones,
          resume_link: ResumeLink,
          other_links: OtherLinks,
          previous_role: PreviousRole,
          accomplishment_and_strengthen:
            AccomplishmentAndStrengthen,
          effect_of_accomplishment:
            EffectOfAccomplishment,
          show_previous_employer:
            showPreviousEmployer,
        }),
      }
    );
    await response
      .json()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box className="flex w-full p-6 flex-col space-y-4">
      {data?.user_name && step === 4 ? (
        <Download />
      ) : (
        <>
          <Steps
            active={step}
            setStep={setStep}
          />
          {step === 1 && (
            <Step1
              Continue={Continue}
            />
          )}
          {step === 2 && (
            <Step2
              Continue={Continue}
              Previous={Previous}
            />
          )}
          {step === 3 && (
            <Step3
              Continue={Continue}
              Previous={Previous}
              step={step}
              postdata={postdata}
            />
          )}
        </>
      )}
    </Box>
  );
}

export default Form;
