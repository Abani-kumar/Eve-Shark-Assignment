import express from "express";
import router from "./Routes/routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port no ${PORT}`);
});
