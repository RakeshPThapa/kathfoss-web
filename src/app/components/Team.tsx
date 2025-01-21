"use client";

import React, { useState } from "react";
import { Grid2, Box, Typography, Modal, Button } from "@mui/material";
import { useRouter } from 'next/navigation';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers = {
  mainCommittee: [
    { name: "Prabhash Kumar Jha", role: "President", image: "/images/MeetOurTeam/ram.png", description: "Ram is the Project Manager." },
    { name: "Ashish Aryal", role: "Vice President", image: "/images/MeetOurTeam/shyam.png", description: "Shyam is a frontend developer." },
    { name: "Priyajan Swongamikha", role: "Secretary", image: "/images/MeetOurTeam/hari.png", description: "Hari is a backend developer." },
    { name: "Sahil Dangol", role: "Event Coordinator", image: "/images/MeetOurTeam/sita.png", description: "Sita is the Team Lead." },
    { name: "Nischal Shakya", role: "Tech Lead", image: "/images/MeetOurTeam/shyam.png", description: "Shyam is a frontend developer." },
    { name: "Aashika Lamichhane", role: "Designer", image: "/images/MeetOurTeam/hari.png", description: "Hari is a backend developer." },
    { name: "Shisir Baskota", role: "Media and Communications Head", image: "/images/MeetOurTeam/gita.png", description: "Gita is UI/UX Designer." },
    { name: "Ronisha Kaway", role: "PR Manager", image: "/images/MeetOurTeam/sita.png", description: "Sita is the Team Lead." },
    { name: "Prasanna Acharya", role: "Document Head", image: "/images/MeetOurTeam/gita.png", description: "Gita is UI/UX Designer." },
  ],
  projectSupervisors: [
    { name: "Samrat Neupane", role: "Supervisor", image: "/images/MeetOurTeam/ram.png", description: "Expert" },
    { name: "Abhisek Dahal", role: "Supervisor", image: "/images/MeetOurTeam/ram.png", description: "Specialist" },
    { name: "Anish Shrestha", role: "Supervisor", image: "/images/MeetOurTeam/sita.png", description: "...." },
    { name: "Aayush Ghimire", role: "Supervisor", image: "/images/MeetOurTeam/gita.png", description: "...." },
  ],
  socialMedia: [
    { name: "Shisir Baskota", role: "Content Writer", image: "/images/MeetOurTeam/hari.png", description: "...." },
    { name: "Ankit Khadka", role: "Video Editor", image: "/images/MeetOurTeam/hari.png", description: "....." },
    { name: "Susmita Khadka", role: "Social Media Handler", image: "/images/MeetOurTeam/shyam.png", description: "....." },
    { name: "Pratima Sapkota", role: "Social Media Handler", image: "/images/MeetOurTeam/gita.png", description: "......" },
  ],
  executiveMembers: [
    { name: "Kamal Khatri", role: "Executive Member", image: "/images/MeetOurTeam/ram.png", description: ".....s." },
    { name: "Krishna Kuisyat", role: "Executive Member", image: "/images/MeetOurTeam/ram.png", description: "......" },
    { name: "Deepak Osti", role: "Executive Member", image: "/images/MeetOurTeam/ram.png", description: "......" },
    { name: "Suraj Acharya", role: "Executive Member", image: "/images/MeetOurTeam/ram.png", description: ".........." },
  ],
};

interface TeamProps {
  showAll?: boolean;
}

const Team: React.FC<TeamProps> = ({ showAll }) => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const router = useRouter();

  const handleOpen = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  const renderTeamSection = (title: string, members: TeamMember[], limit?: number) => (
    <Box mb={6}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {members.slice(0, limit).map((member, index) => (
          <Grid2 key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Box 
              onClick={() => handleOpen(member)}
              sx={{
                width: "300px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderRadius: "8px",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#FFF",
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
    </Box>
  );

  return (
    <Box sx={{ padding: "2rem 5%" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Box mt={4}>
        {renderTeamSection("Main Committee", teamMembers.mainCommittee, showAll ? 4 : 3)}
        {showAll ? (
          <>
            {renderTeamSection("Project Supervisors", teamMembers.projectSupervisors)}
            {renderTeamSection("Social Media and Communications", teamMembers.socialMedia)}
            {renderTeamSection("Executive Members", teamMembers.executiveMembers)}
          </>
        ) : (
          <Box textAlign="center" mt={4}>
            <Button variant="contained" color="secondary" onClick={() => router.push('/meet-our-team')}>
              See More
            </Button>
          </Box>
        )}
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0E1322",
            color: "#FFF",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "400px",
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
              <Typography variant="subtitle1">{selectedMember.role}</Typography>
              <Typography variant="body1">{selectedMember.description}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Team;