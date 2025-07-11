import { Github, Linkedin, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avaone from "@/assets/images/avatorone.jpg";
import avatwo from "@/assets/images/avatortwo.jpg";
import avathree from "@/assets/images/avatorthree.jpg";
import avafour from "@/assets/images/avatorfour.jpg";
import avafive from "@/assets/images/avatorfive.jpg";
import avasix from "@/assets/images/avatorsix.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team = ({
  heading = "Team",
  description = "Our diverse team of experts brings together decades of experience in design, engineering, and product development.",
  members = [
    {
    id: "member-1",
    name: "Sarah Chen",
    role: "Founder & Head Chef",
    avatar: avasix,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: "member-2",
    name: "Marcus Rodriguez",
    role: "Tech Lead & Recipe Engineer",
    avatar: avaone,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: "member-3",
    name: "Emily Watson",
    role: "Creative Director",
    avatar: avatwo,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: "member-4",
    name: "Emily Smith",
    role: "Lead Developer",
    avatar: avathree,
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
  id: "member-5",
  name: "Yamamoto",
  role: "Pastry Chef",
  avatar: avafour,
  github: "#",
  twitter: "#",
  linkedin: "#",
  },
  {
    id: "member-6",
    name: "Sophia Lee",
    role: "Sous Chef",
    avatar: avafive,
    github: "#",
    twitter: "#",
    linkedin: "#",
  }
  ],
}: Team1Props) => {
  return (
    <section className="py-24 bg-pri lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold manrope text-sec tracking-tight lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground inter mx-auto max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.id} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="size-25 lg:size-30">
                    <AvatarImage className="object-cover" src={member.avatar} />
                    <AvatarFallback className="text-lg font-semibold">
                      {member.name}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-semibold inter">{member.name}</h3>
                  <p className="text-primary text-sm font-medium inter">
                    {member.role}
                  </p>
                </div>

                <div className="flex gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      className="bg-sec/20 rounded-lg p-2"
                    >
                      <Github className="text-sec size-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="bg-sec/20 rounded-lg p-2"
                    >
                      <Twitter className="text-sec size-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="bg-sec/20 rounded-lg p-2"
                    >
                      <Linkedin className="text-sec size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };
