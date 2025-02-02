import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface CourseProps {
    name: string;
    code: string;
    semester: string;
  }

export default function Course({ name, code, semester }: CourseProps) {
  return (
    <>
      <HoverCard openDelay={50} closeDelay={50}>
        <HoverCardTrigger style={{ whiteSpace: "nowrap" }}>{name}</HoverCardTrigger>
        <HoverCardContent style={{ width: "auto" }}>
          <div style={{ fontWeight: "bold" }}>{code}</div>
          {semester}
        </HoverCardContent>
      </HoverCard>
    </>
  );
};