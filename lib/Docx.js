import {
  Document,
  Packer,
  AlignmentType,
  Paragraph,
  TextRun,
  SectionType,
  ExternalHyperlink,
} from "docx";
import saveAs from "file-saver";

export const generateDoc = (data) => {
  const doc = new Document({
    sections: [
      {
        properties: {
          type: SectionType.CONTINUOUS,
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.user_name}`,
                bold: true,

                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.RIGHT,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.address}`,
                bold: true,

                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.RIGHT,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.email}`,
                bold: true,

                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.RIGHT,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.phone}`,
                bold: true,

                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.RIGHT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.date}`,
                bold: true,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.company_name}`,
                bold: true,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 100,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Re: Application for the position of Front End Developer",
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 500,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Dear ${data?.recipient_name}`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `I am writing in application for the front end developer position at ${data?.company_name} as advertised in ${data?.jobposting}. My training and experience in the field of computer programming and web design, along with my ability to ${data?.skills}, make me the perfect candidate for the job. I know that I would be a valuable addition to the team at ${data?.company_name}.`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `I have a ${data?.qualification} from ${data?.educational_institution} and have more than ${data?.experience} years of experience as a front end developer. I have advanced knowledge of ${data?.your_top_technical_skills} and outstanding ${data?.your_soft_skills}.`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${
                  data?.show_previous_employer
                    ? `In my most recent role at ${data?.previous_role}, I achieved ${data?.accomplishment_and_strengthen}, which improved ${data?.effect_of_accomplishment}.`
                    : ""
                }`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `I am excited to be applying to ${data?.company_name} and for the opportunity to ${data?.describe_your_skills_and_benefits}. I truly admire ${data?.mention_milestones} and would feel privileged to be a member of the team at ${data?.company_name}.`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Please find attached`,
                font: "Poppins",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: ` ${data?.resume_link} `,
                    font: "Poppins",
                    style: "Hyperlink",
                  }),
                ],
                link: `${data?.resume_link}`,
              }),
              new TextRun({
                text: ` and `,
                font: "Poppins",
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: ` ${data?.other_links}. `,
                    font: "Poppins",
                    style: "Hyperlink",
                  }),
                ],
                link: `${data?.other_links}`,
              }),
              new TextRun({
                text: `Feel free to contact me directly should you require anything further.`,
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Thank you for your time and consideration. I look forward to hearing from you.",
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Sincerely,",
                font: "Poppins",
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 300,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${data?.user_name}`,
                font: "Poppins",
                bold: true,
              }),
            ],
            alignment:
              AlignmentType.LEFT,
            spacing: {
              after: 500,
            },
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(
      blob,
      `${data?.user_name}.docx`
    );
  });
};
