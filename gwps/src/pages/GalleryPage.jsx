import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL;

  // Fetch images from backend (Cloudinary)
  const fetchImages = async () => {
    try {
      const res = await fetch(`${API}/images`);
      const data = await res.json();
      setImages(data.images || []);
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Navbar />

      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Image Gallery
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : images.length === 0 ? (
          <Typography>No images found.</Typography>
        ) : (
          <Grid container spacing={3}>
            {images.map((img) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={img._id}>
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={img.url}
                    alt="gallery"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default GalleryPage;
