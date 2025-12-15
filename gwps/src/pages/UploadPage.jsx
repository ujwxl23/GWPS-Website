import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  CircularProgress,
  TextField,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UploadPage = () => {
  /* ================= IMAGE UPLOAD STATE ================= */
  const [selectedFile, setSelectedFile] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = process.env.VITE_API_URL;

  const fetchImages = async () => {
    try {
      const res = await fetch(`${API}/images`);
      const data = await res.json();
      setAllImages(data.images || []);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);
    try {
      await fetch(`${API}/upload`, {
        method: "POST",
        body: formData,
      });
      setSelectedFile(null);
      fetchImages();
    } catch (err) {
      console.error("Upload error:", err);
    }
    setLoading(false);
  };

  const handleDelete = async (public_id) => {
    try {
      await fetch(`${API}/images/${public_id}`, {
        method: "DELETE",
      });
      fetchImages();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ================= HOMEPAGE CONTENT STATE ================= */
  const [section, setSection] = useState("updates");
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  // Load existing homepage data when section changes
  useEffect(() => {
    fetch(`${API}/homepage`)
      .then((res) => res.json())
      .then((data) => setItems(data[section] || []));
  }, [section]);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const saveHomepageData = async () => {
    await fetch(`${API}/homepage/updates`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section,
        items,
      }),
    });
    alert("Homepage content updated successfully");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Admin Upload Page
      </Typography>

      {/* ================= IMAGE UPLOAD SECTION ================= */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Image Manager
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
          border: "1px solid #ddd",
          borderRadius: 2,
          p: 2,
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <Button variant="contained" disabled={loading} onClick={handleUpload}>
          {loading ? <CircularProgress size={20} /> : "Upload Image"}
        </Button>
      </Box>

      <Grid container spacing={3} mb={6}>
        {allImages.map((img) => (
          <Grid item xs={12} sm={6} md={4} key={img.public_id}>
            <Card>
              <CardMedia component="img" height="200" image={img.url} />
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography noWrap>{img.public_id}</Typography>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(img.public_id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 5 }} />

      {/* ================= HOMEPAGE CONTENT MANAGER ================= */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Homepage Content Manager
      </Typography>

      <Select
        value={section}
        onChange={(e) => setSection(e.target.value)}
        sx={{ mb: 2, width: 300 }}
      >
        <MenuItem value="updates">Important Updates</MenuItem>
        <MenuItem value="notices">School Notices</MenuItem>
      </Select>

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          label="Add new item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={addItem}>
          Add
        </Button>
      </Box>

      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            background: "#f5f5f5",
            p: 1,
            borderRadius: 1,
          }}
        >
          <Typography>➜ {item}</Typography>
          <IconButton color="error" onClick={() => removeItem(index)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        onClick={saveHomepageData}
      >
        Save Homepage Changes
      </Button>
    </Box>
  );
};

export default UploadPage;
