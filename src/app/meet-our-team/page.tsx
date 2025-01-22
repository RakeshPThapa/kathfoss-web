"use client";

import React, { useState } from "react";
import {Header} from '../components';
import { Box, Grid2, Typography } from "@mui/material";
import { teamMembers } from "../data/meet-our-team";
import { TeamMemberProps  } from "@/type/team-memeber";
import TeamMember from "@/components/ui/MeetOurTeam/TeamMember";
import TeamMemberModal from "@/components/ui/MeetOurTeam/TeamMemberModal";

export default function MeetOurTeamPage() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

  const handleOpen = (member: TeamMemberProps) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
    <Header />
    <Box sx={{ padding: "2rem 5%" }}>
          <Typography variant="h2" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <br />
          <Typography variant="h2" align="center" gutterBottom>
              Main Comittee
            </Typography>
            <br />
      <Grid2 container spacing={4}>
        {teamMembers.mainCommittee.map((member, index) => (
          <TeamMember key={index} member={member} handleOpen={handleOpen} />
        ))}
      </Grid2> <br />
          <Typography variant="h2" align="center" gutterBottom>
              Project Supervisors
            </Typography>
            <br />
      <Grid2 container spacing={4}>
        {teamMembers.projectSupervisors.map((member, index) => (
          <TeamMember key={index} member={member} handleOpen={handleOpen} />
        ))}
      </Grid2> <br /> 
          <Typography variant="h2" align="center" gutterBottom>
              Social Media and Communications
            </Typography>
            <br />
      <Grid2 container spacing={4}>
        {teamMembers.socialMedia.map((member, index) => (
          <TeamMember key={index} member={member} handleOpen={handleOpen} />
        ))}
      </Grid2> <br /> 
          <Typography variant="h2" align="center" gutterBottom>
              Executive Members
            </Typography>
            <br />
      <Grid2 container spacing={4}>
        {teamMembers.executiveMembers.map((member, index) => (
          <TeamMember key={index} member={member} handleOpen={handleOpen} />
        ))}
      </Grid2> <br /> 
      <TeamMemberModal open={open} handleClose={handleClose} member={selectedMember} />
    </Box>
    </>
  );
}