// ✅ Continue with your imports above...
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Navbar from "../common/Navbar";
import SchoolIcon from "@mui/icons-material/School";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ScienceIcon from "@mui/icons-material/Science";
import ComputerIcon from "@mui/icons-material/Computer";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

// ✅ Your slider + gallery imports
import photo1 from "../assets/img1.jfif";
import photo2 from "../assets/img2.jfif";
import photo3 from "../assets/img3.jfif";

import mag from "../assets/magzine.jpg";

import media1 from "../assets/media1.jpg";
import media2 from "../assets/media2.jpg";
import media3 from "../assets/media3.jpg";
import media4 from "../assets/media4.jpg";
import media5 from "../assets/media5.jpg";
import media6 from "../assets/media6.jpg";

import chair from "../assets/gokul1.jpg";

const images = [photo1, photo2, photo3];

const mediaGallery = [
  { src: media1, title: "Result Day" },
  { src: media2, title: "Orientation Program" },
  { src: media4, title: "Sports Meet" },
  { src: media5, title: "Workshop" },
  { src: media6, title: "Inter-School Compitition" },
  { src: media3, title: "Annual Day" },
];

const facilities = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    title: "Smart Classrooms",
    desc: "Modern digital classrooms for interactive learning.",
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 50 }} />,
    title: "Science Labs",
    desc: "Well-equipped physics, chemistry & biology labs.",
  },
  {
    icon: <ComputerIcon sx={{ fontSize: 50 }} />,
    title: "Computer Labs",
    desc: "Latest systems with high-speed internet access.",
  },
  {
    icon: <LocalLibraryIcon sx={{ fontSize: 50 }} />,
    title: "Library",
    desc: "Extensive collection of books & digital resources.",
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 50 }} />,
    title: "Sports Facilities",
    desc: "Playgrounds for football, cricket & athletics.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 50 }} />,
    title: "Transport Facilities",
    desc: "Comfortable and AC Vans and Buses.",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [notices, setNotices] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    fetchImages();

    fetch(`${API}/homepage`)
      .then((res) => res.json())
      .then((data) => {
        setUpdates(data.updates || []);
        setNotices(data.notices || []);
      })
      .catch((err) => console.error("Homepage fetch error:", err));
  }, []);

  // Fetch first 6 images from backend
  const fetchImages = async () => {
    try {
      console.log("Homepage fetching images from:", `${API}/images`);
      const res = await fetch(`${API}/images`);
      const data = await res.json();
      console.log("Homepage images response:", data);
      console.log(data);

      // Take last 6 images
      const lastSix = (data.images || []).slice(-6);

      setGalleryImages(lastSix);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Navbar />

      {/* Slider */}
      <Box sx={{ position: "relative", overflow: "hidden", my: "10px" }}>
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          sx={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            transition: "transform 0.5s ease-in-out",
          }}
        />

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.3)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "30px",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.3)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Updates, Notices */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          my: 6,
        }}
      >
        {[
          { title: "Important Links / Updates", items: updates },
          { title: "School Notices", items: notices },
        ].map((section, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "80%", md: "40%" },
              height: "280px",
              background: "#ffffff",
              p: 3,
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#d32f2f",
                textAlign: "center",
                borderBottom: "2px solid #d32f2f",
                pb: 1,
              }}
            >
              {section.title}
            </Typography>

            {/* Scrolling Area */}
            <Box
              sx={{
                height: "200px",
                overflow: "hidden",
                position: "relative",
                px: 1,
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  animation: "scroll 12s linear infinite",
                }}
              >
                {section.items.map((item, i) => (
                  <Typography
                    key={i}
                    sx={{
                      mb: 1.5,
                      fontSize: "0.95rem",
                      color: "#333",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ color: "#d32f2f", fontWeight: "bold" }}>
                      ➜
                    </span>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <style>
        {`
    @keyframes scroll {
      0% { transform: translateY(100%); }
      100% { transform: translateY(-100%); }
    }
  `}
      </style>

      {/* Admission Open Banner */}
      <Box
        sx={{
          my: 6,
          py: 3,
          textAlign: "center",
          background: "#fff5f5",
          borderTop: "2px solid #d32f2f",
          borderBottom: "2px solid #d32f2f",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#d32f2f",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Admission Open 2026–27
        </Typography>
      </Box>

      {/* Chairman's Desk */}
      <Box
        sx={{
          background: "#e0f7fa",
          p: 4,
          m: 2,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          From the Chairman's Desk
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* ✅ Chairman Photo */}
          <Box
            component="img"
            src={chair}
            alt="Chairman"
            sx={{
              width: { xs: "250px", md: "400px" },
              height: { xs: "250px", md: "400px" },
              borderRadius: "50%",
              objectFit: "cover",
              mx: { xs: "auto", md: 0 },
            }}
          />

          {/* ✅ Text */}
          <Box sx={{ textAlign: "justify" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Education is the basis of all progress. Education is not mere
              accumulation of facts; it is preparation of life itself. Education
              is knowledge imbued with wisdom and ethics. It develops the
              personality of the students, moulds their character and develops
              mental skill to help them cope with problems and challenges of the
              complex world of today. Days are gone where children were fed with
              bookish information and assessed purely on the basis of role
              learning and pen paper test. Gurukul World Public School is a
              result of a person’s hardship, which a small town child has to go
              through in absence of facility and proper guidance. We together
              will provide all the facilities, tools and training to our rural
              kids and make them global citizen. Education is futile if it fails
              to serve the purpose of real life. The Gurukul World Public School
              (GWPS) exemplifies the fact that sky is not the limit in the
              pursuit of excellence. The aim of our school is to promote a
              system of integral education in a congenial child-friendly
              environment that emphasizes the unity of all knowledge,
              synthesizes humanity and sciences and recognizes the fact that
              each child is unique. We believe that education should enable the
              students to soar high morally, socially and spiritually. We aim to
              develop in our children an appreciation for the values of the
              past, the excitement of the present and the challenges of the
              future. Together we will bring out the best in each child. We are
              confident that this school is best place for your child. We
              welcome your active interest and involvement in the progress and
              activities of your child. We look forward to your continuous
              support.
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              — Mr. Gokul Kumar
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* About Us & Principal */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {[
          {
            bg: "#ff9800",
            hover: "#e65100",
            icon: "📚",
            title: "About Us",
            text: "Gurukul World Public School",
            link: "about",
          },
          {
            bg: "#2196f3",
            hover: "#0d47a1",
            icon: "🎓",
            title: "Principal's Desk",
            text: "Mrs. Satpal Kaur",
            link: "principal",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "100%", md: "45%" },
              height: "250px",
              backgroundColor: item.bg,
              transition: "background-color 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
              p: 2,
              m: 1,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: item.hover,
              },
            }}
          >
            <Typography variant="h2" sx={{ mb: 1 }}>
              {item.icon}
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <a
                href={item.link}
                style={{ color: "white", textDecoration: "none" }}
              >
                {item.title}
              </a>
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {item.text}
            </Typography>
            <a
              href={item.link}
              style={{ color: "white", textDecoration: "underline" }}
            >
              Read More
            </a>
          </Box>
        ))}
      </Box>

      {/* Photo Gallery */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Photo Gallery
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          {galleryImages.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img.url}
              alt={`gallery-${index}`}
              sx={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ✅ School Facilities */}
      <Box sx={{ p: 4, backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Our Facilities
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {facilities.map((facility, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                p: 3,
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              {facility.icon}
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                {facility.title}
              </Typography>
              <Typography variant="body2">{facility.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ✅ Media Gallery */}
      <Box sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
        >
          Media Gallery
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          {mediaGallery.map((media, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                component="img"
                src={media.src}
                alt={media.title}
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  color: "white",
                  textAlign: "center",
                  p: 1,
                }}
              >
                {media.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ✅ Footer */}
      <Box
        sx={{
          backgroundColor: "#333",
          color: "white",
          p: 4,
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ✅ Left: Image */}
          <Box
            component="img"
            src={mag}
            alt="School Magazine"
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "auto",
              borderRadius: "8px",
              mb: { xs: 2, md: 0 },
            }}
          />

          {/* ✅ Right: Contact Info + Map */}
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              Contact Us
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Kandra, Station Road, Jamshedpur, Jharkhand.
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Call:{" "}
              <a
                href="tel:9102891112"
                style={{ color: "white", textDecoration: "underline" }}
              >
                9102891112
              </a>{" "}
              /{" "}
              <a
                href="tel:7870002137"
                style={{ color: "white", textDecoration: "underline" }}
              >
                7870002137
              </a>
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Mail:{" "}
              <a
                href="mailto:info@gurukulwpschool.in"
                style={{ color: "white", textDecoration: "underline" }}
              >
                gurukulkandra@gmail.com
              </a>
            </Typography>

            <Box
              sx={{
                mt: 2,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.3273833467438!2d86.04790417848845!3d22.852258796339598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5eed4147c90e5%3A0xf9a88cb4ddafdbfe!2sGurukul%20World%20Public%20School%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1752737658863!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
