import React from "react";
import SectionTitle from "../../ui/SectionTitle";
import TeamCard from "./TeamCard";
import SectionContainer from "@/components/ui/SectionContainer";

const teamMembers = [
  {
    id: 1,
    name: "Md. Aminul Islam",
    image: "/images/background/banner-blue.png",
  },
  {
    id: 2,
    name: "Md. Aminul Islam",
    image: "/images/background/banner-blue.png",
  },
  {
    id: 3,
    name: "Md. Aminul Islam",
    image: "/images/background/banner-blue.png",
  },
  {
    id: 4,
    name: "Md. Aminul Islam",
    image: "/images/background/banner-blue.png",
  },
];

const OurTeam = () => {
  return (
    <SectionContainer contentSize="container">
      <SectionTitle title="Our Team" />
      <div className="grid grid-cols-4">
        {teamMembers.map((team) => (
          <TeamCard key={team.id} imagePath={team.image} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurTeam;
