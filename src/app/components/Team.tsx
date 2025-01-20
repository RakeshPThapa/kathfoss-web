"use client";

import React, { useState } from "react";
import { Grid2, Box, Typography, Modal } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}


const teamMembers: TeamMember[] = [
  {
    name: "Ram",
    role: "Project Manager",
    image: "/images/MeetOurTeam/ram.png",
    description: "Ram is the Project Manager.",
  },
  {
    name: "Shyam",
    role: "Frontend Developer",
    image: "/images/MeetOurTeam/shyam.png",
    description: "Shyam is a frontend developer.",
  },
  {
    name: "Hari",
    role: "Backend Developer",
    image: "/images/MeetOurTeam/hari.png",
    description: "Hari is a backend developer.",
  },
  {
    name: "Gita",
    role: "UI/UX Designer",
    image: "/images/MeetOurTeam/gita.png",
    description: "Gita is UI/UX Designer.",
  },
  {
    name: "Sita",
    role: "Team Lead",
    image: "/images/MeetOurTeam/sita.png",
    description: "Sita is the Team Lead.",
  },
];

const Team: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h2" align="center" gutterBottom>
        MEET OUR TEAM
      </Typography>
      <br />
      <Grid2 container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid2 key={index} display="flex" justifyContent="center">
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                width: "100%",
                maxWidth: "300px",
              }}
              onClick={() => handleOpen(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease-in-out",
                  borderRadius: "8px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "#fff",
                  padding: "0.5rem",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            boxShadow: 24,
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          {selectedMember && (
            <>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h5">{selectedMember.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {selectedMember.role}
              </Typography>
              <Typography variant="body1" sx={{color: 'black'}}>{selectedMember.description}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Team;