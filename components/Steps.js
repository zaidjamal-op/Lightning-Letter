import { Divider } from "@chakra-ui/react";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  FaCodeBranch,
  FaSimplybuilt,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
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
} from "../atom/HandleFormData";

function Steps({ active, setStep }) {
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
  return (
    <div className="flex items-center justify-between w-[90%] mx-auto p-3">
      <div
        className="top-icon group"
        onClick={() => setStep(1)}
      >
        {active === 2 ||
        active === 3 ? (
          <FiCheck className="text-2xl font-extrabold" />
        ) : (
          <BsFillPersonFill />
        )}
        <span className="top-tooltip group-hover:scale-100">
          {active === 3
            ? "Done"
            : "Personal"}
          ⚡
        </span>
      </div>

      <div
        className={`top-icon group`}
        onClick={() => {
          if (
            (userName &&
              emailAddress &&
              Address &&
              companyname &&
              phone &&
              Date &&
              recipientname) === ""
          ) {
            setStep(1);
          } else {
            setStep(2);
          }
        }}
      >
        {active === 3 ? (
          <FiCheck className="text-2xl font-extrabold" />
        ) : (
          <FaCodeBranch />
        )}
        <span className="top-tooltip group-hover:scale-100">
          {active === 3
            ? "Done"
            : "Experience "}
          ⚡
        </span>
      </div>

      <div
        className={`top-icon group`}
        onClick={() => {
          if (
            (Skills &&
              Jobposting &&
              Qualification &&
              EducationalInstitution &&
              Experience &&
              YourTopTechnicalSkills &&
              YourSoftSkills &&
              userName &&
              emailAddress &&
              Address &&
              companyname &&
              phone &&
              Date &&
              recipientname) === ""
          ) {
            if (
              (userName &&
                emailAddress &&
                Address &&
                companyname &&
                phone &&
                Date &&
                recipientname) !== ""
            ) {
              setStep(2);
            } else {
              setStep(1);
            }
          } else {
            setStep(3);
          }
        }}
      >
        <FaSimplybuilt />
        <span className="top-tooltip group-hover:scale-100 ">
          {DescribeYourSkillsAndBenefits &&
          MentionMilestones &&
          ResumeLink &&
          OtherLinks !== ""
            ? "Done"
            : "Previous Experience"}
          ⚡
        </span>
      </div>
    </div>
  );
}

export default Steps;
