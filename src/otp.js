const otpGenerator = require("otp-generator");
const crypto = require("crypto");

const hashAlgorithm = "sha256";
const secret = "hello@123!";

const generateValidNumber = (phone) => `880${/(\d){10}$/.exec(phone)[0]}`;

// generate a sha256 hash of the data
const generateHash = (hashAlgorithm, secret, data) =>
  crypto.createHmac(hashAlgorithm, secret).update(JSON.stringify(data)).digest("hex");

const generateOTP = async (phone) => {
  const phoneNo = generateValidNumber(phone);

  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
  const data = { phoneNo, otp };
  const hash = generateHash(hashAlgorithm, secret, data);

  return { otp, hash };
};

const verifyOTP = async ({ mobileNo, otp, hash }) => {
  if (!hash) {
    throw new Error("Sorry, didn't get hash for this OTP");
  }
  const phoneNo = generateValidNumber(mobileNo);
  const data = { phoneNo, otp };
  const newHash = generateHash(hashAlgorithm, secret, data);

  let isValid = false;
  if (newHash === hash) isValid = true;

  return isValid;
};

module.exports = {
  generateOTP,
  verifyOTP,
};
