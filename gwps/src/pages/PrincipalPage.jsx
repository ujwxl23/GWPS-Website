import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Navbar from "../common/Navbar";

import prin from "../assets/satpal kaur1.jpg";

const PrincipalPage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          p: { xs: 3, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
          }}
        >
          From the Principal’s Desk
        </Typography>

        {/* Image and Message */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            maxWidth: "900px",
            textAlign: "center",
            background: "#f9f9f9",
          }}
        >
          {/* Principal Image */}
          <Avatar
            alt="Principal"
            src={prin}
            sx={{
              width: 160,
              height: 160,
              mx: "auto",
              mb: 3,
              border: "4px solid #1976d2",
            }}
          />

          {/* Name */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
          >
            Mrs. Satpal Kaur
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
            Principal, Gurukul World Public School
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Message */}
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: 1.8,
              color: "#444",
            }}
          >
            “Education is not merely about academics — it is about nurturing
            character, developing confidence, and inspiring curiosity. At
            Gurukul World Public School, we aim to create an environment where
            every child feels valued, motivated, and empowered to achieve
            excellence in all spheres of life. We emphasize experiential
            learning, critical thinking, and moral growth to shape well-rounded
            global citizens.
            <br />
            <br />
            Our dedicated faculty and supportive community ensure that every
            learner receives the best possible opportunities to grow
            intellectually, emotionally, and socially. Together, we are
            committed to helping students build a strong foundation for a
            successful and meaningful future.”
          </Typography>

          {/* Signature */}
          <Typography
            variant="h6"
            sx={{
              mt: 4,
              fontWeight: "bold",
              color: "#1976d2",
            }}
          >
            — Mrs. Satpal Kaur
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default PrincipalPage;
