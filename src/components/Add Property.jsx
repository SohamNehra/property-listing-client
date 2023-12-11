import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useState } from "react";

export default function AddProperty() {
  const [ownerFirstName, setownerFirstName] = useState("");
  const [ownerLastName, setownerLastName] = useState("");
  const [propertyTitle, setPropertyTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async () => {
    const formData = {
      ownerFirstName,
      ownerLastName,
      propertyTitle,
      description,
      imageUrl,
    };

    try {
      const response = await axios.post("http://localhost:5000/properties", formData);

      console.log("Property submitted:", response.data);
      // Handle success or redirect as needed
    } catch (error) {
      console.error("Error submitting property:", error);
      // Handle error
    }
  };

  return (
    <>
      <ResponsiveAppBar />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "maxWidth", marginTop: "6%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            margin: "auto",
            marginTop: "5%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            maxWidth: "50%",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <div>
            <h2 style={{ color: "#252523" }}>
              Please Enter the Property Detail
            </h2>
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              required
              id="outlined-required"
              label="Owner First Name"
              value={ownerFirstName}
              onChange={(e) => setownerFirstName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Owner Last Name"
              value={ownerLastName}
              onChange={(e) => setownerLastName(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              required
              id="outlined-required"
              label="Property Title"
              value={propertyTitle}
              onChange={(e) => setPropertyTitle(e.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              style={{ width: "60%" }}
              maxRows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Image Url"
              multiline
              style={{ width: "60%" }}
              maxRows={4}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              style={{ marginTop: "15%" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
