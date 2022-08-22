const express = require("express");

const app = express();

const { generateOTP, verifyOTP } = require("./src/otp");

const port = process.env.PORT || 3005;
app.listen(port, () => console.warn(`Server running on localhost:${port}`));

app.get("/generate", async (req, res) => {
  try {
    const result = await generateOTP(req.query.mobileNo);

    res.json({ success: true, hash: result.hash });
  } catch (err) {
    console.error(err.message);
    res.json({ success: false });
  }
});

app.get("/verify", async (req, res) => {
  try {
    const { mobileNo, otp, hash } = req.query;
    const isVerified = await verifyOTP({ mobileNo, otp, hash });

    res.json({ success: true, verified: isVerified });
  } catch (err) {
    console.error(err.message);
    res.json({ success: false });
  }
});
