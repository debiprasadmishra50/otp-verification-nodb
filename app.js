const express = require("express");

const app = express();

const { generateOTP, verifyOTP } = require("./src/otp");

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on ${port}`));
