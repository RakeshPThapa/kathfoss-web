"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid2,
} from "@mui/material";

const events = [
  {
    title: "AI Workshop",
    description: "Event details: 20th Jan, 2025",
    image: "/images/ai-workshop.png", 
    link: "#",
  },
  {
    title: "Hackathon",
    description: "Event details: 15th Feb, 2025",
    image: "/images/hackathon.png", 
    link: "#",
  },
  {
    title: "Tech Talk",
    description: "Event details: 10th Mar, 2025",
    image: "/images/tech-talk.png", 
    link: "#",
  },
];

export default function UpcomingEvents() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 3 }}
      >
        Upcoming Events
      </Typography>
      <Grid2 container spacing={4}>
        {events.map((event, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" href={event.link} target="_blank">
                Learn More
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}