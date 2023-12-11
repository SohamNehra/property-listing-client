import { Container } from "@mui/material";
import "./App.css";
import MultiActionAreaCard from "./components/PropertyListingPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [feedData, setFeedData] = useState([]);

  const listProperties = () => {
    axios
      .get(import.meta.env.VITE_SERVER_URL + "listAll")
      .then((response) => {
        const resp = response.data.property;
        setFeedData(resp);
        console.table("listProperties data: ", resp);
      })
      .catch((err) => {
        console.error(
          "Error in listProperties: ",
          err.message ? err.message : err
        );
      });
  };

  useEffect(() => {
    listProperties();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ marginTop: "12px"  }} style={{display:"flex", flexDirection:"row",
    flexWrap: "wrap"}}>
        {feedData.map((property) => (
          <MultiActionAreaCard key={property._id} apiData={[property]} />
        ))}
      </Container>
    </>
  );
}

export default App;
