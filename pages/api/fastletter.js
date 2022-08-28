// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(
  req,
  res
) {
  if (req.method !== "POST") {
    res.status(405).send({
      message:
        "Only POST requests allowed",
    });
    return;
  }

  const formdata = {
    user_name: req.body.user_name,
    email: req.body.email,
    phone: req.body.phone,
    date: req.body.date,
    company_name: req.body.company_name,
    recipient_name:
      req.body.recipient_name,
    address: req.body.address,
    jobposting: req.body.jobposting,
    skills: req.body.skills,
    qualification:
      req.body.qualification,
    educational_institution:
      req.body.educational_institution,
    experience: req.body.experience,
    your_soft_skills:
      req.body.your_soft_skills,
    your_top_technical_skills:
      req.body
        .your_top_technical_skills,
    describe_your_skills_and_benefits:
      req.body
        .describe_your_skills_and_benefits,
    mention_milestones:
      req.body.mention_milestones,
    resume_link: req.body.resume_link,
    other_links: req.body.other_links,
    previous_role:
      req.body.previous_role,
    accomplishment_and_strengthen:
      req.body
        .accomplishment_and_strengthen,
    effect_of_accomplishment:
      req.body.effect_of_accomplishment,
    show_previous_employer:
      req.body.show_previous_employer,
  };
  res.status(201).json(formdata);
}
