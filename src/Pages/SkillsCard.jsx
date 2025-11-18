import React from "react";
import useCard from "../hooks/useCard";
import SkillCard from "../Components/SkillCard";
import Loader from "../Components/Loader";
import Error from "./Error";

const SkillsCard = () => {
  const { skills, loading, error } = useCard();

  if (loading) return <Loader></Loader>;
  if (error) return <Error></Error>;

  const topSkills = skills.slice(0, 8);

  return (
    <div className="flex justify-center py-3">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topSkills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
