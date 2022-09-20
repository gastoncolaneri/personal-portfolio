import { Typography, CardMedia } from "@mui/material";

const Home = () => {
  return (
    <div>
      <CardMedia
        component="img"
        image={require("../../../assets/backgroundGif.gif")}
        sx={{
          width: "100%",
          height: "100vh",
          filter: "brightness(0.4) contrast(100%) grayscale(50%)",
        }}
      />
      <Typography
        gutterBottom
        variant="h5"
        sx={{ position: "absolute", color: "#fff", top: "50%", left: "50%" }}
      >
        Bienvenido!
      </Typography>
    </div>
  );
};

export default Home;
