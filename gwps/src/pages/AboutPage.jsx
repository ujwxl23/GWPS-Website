import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import StarIcon from "@mui/icons-material/Star";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Navbar from "../common/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome To Gurukul World Public School
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, textAlign: "justify" }}>
          “Gurukul World Public School” an initiative of the “Gurukul World
          Educational Academy Trust” was founded with a vision to provide
          dynamic learning environment, which stimulates the holistic
          development of learners. Our curriculum offers learning beyond
          traditional methods & integrates a progressive approach involving
          innovation, communication, problem solving and teamwork.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, textAlign: "justify" }}>
          We are committed to provide an exciting, individualized environment,
          which enhances creativity, builds self-esteem and confidence, fosters
          an appreciation for cultural diversity and inspires a sense of social
          responsibility.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, textAlign: "justify" }}>
          We believe that Education is a powerful force for social change as it
          empowers individuals and their families, enriches communities and
          ultimately uplifts societies.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, textAlign: "justify" }}>
          Gurukul Curriculum is based on Central Board of Secondary Education
          (CBSE), India’s largest educational board. The schools strive to
          achieve excellence in academic field as well in life itself through a
          variety of curriculum and co-curricular projects. Gurukul stands for
          quality education, social and ethical values ensure physical, mental
          and moral growth of the students.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* ✅ VISION + MISSION */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: "#f1f8e9", borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                <LightbulbIcon sx={{ color: "#fdd835", mr: 1 }} />
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Our vision is to create vibrant center of excellence, to provide
                opportunities for all round integrated development of children
                suited for this era of globalization. Our Team — management,
                administrator, teachers and staff — accept the challenge and
                guide the next generation in the right direction.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: "#e3f2fd", borderRadius: 2 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                <SchoolIcon sx={{ color: "#42a5f5", mr: 1 }} />
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                To be a center for the highest standard of academic excellence —
                providing opportunities and preparing our rural, diverse
                children to succeed in all aspects of life. Face all the challenges in their life.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* ✅ Why Choose Us */}
        <Box
          sx={{
            background: "#f5f5f5",
            p: { xs: 3, md: 6 },
            borderRadius: 2,
            my: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Why Choose Gurukul World Public School
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 5, maxWidth: "1200px", mx: "auto" }}
          >
            Our school community is passionate about ensuring every child
            experiences success with their learning every day. We are committed
            to providing high quality services in all that we do. As an
            Independent Public School our school community will play an active
            role in establishing and setting our strategic agenda to ensure that
            our students are offered the very best education possible. To
            achieve this, committed staff displays enthusiasm, dedication and
            high level teaching skills to deliver personalized programs that are
            responsive to student need and interest. All students will
            participate in a rigorous school based assessment and monitoring
            schedule throughout the year to ensure your child’s academic
            progress is kept foremost in our minds and informs the teaching and
            learning process. Specialized programs to support students with
            learning difficulties or extend students with gifts and talents are
            devised and implemented by experienced teachers ensuring that
            students are challenged and achieving to their potential.
          </Typography>

          <Box
            sx={{
              background: "white",
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              boxShadow: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 4,
              },
              textAlign: "left",
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#1976d2",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              01
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              All students will be exposed to a wide variety of extra-curricular
              and sporting options throughout the school year, including:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 4 }}>
              {[
                "Lunch time organized Indoor games",
                "Lunch time clubs: chess, dance, art",
                "Interschool sporting competitions",
                "Regional sporting competitions",
                "Intra-school carnivals",
                "Sporting clinics",
                "Excursions",
              ].map((point, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </Box>

            <Typography
              variant="h4"
              sx={{
                color: "#1976d2",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              02
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The following services are offered to our families on a daily
              basis:
            </Typography>

            <Box component="ul" sx={{ pl: 3 }}>
              {[
                "Communication between families and Admin staff",
                "Communication between families and class teacher",
                "Uniform & stationary shop on site at the school",
                "Parent workshops throughout the year on parenting, learning support, cyber safety, and E-learning",
              ].map((point, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </Box>
          </Box>

          <Typography
            variant="h6"
            sx={{
              mt: 6,
              fontStyle: "italic",
              color: "#555",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            “We welcome you to our school community and a culture in which we
            believe that every student can thrive and excel and thank you for
            entrusting Gurukul World Public School with your child’s education.”
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
