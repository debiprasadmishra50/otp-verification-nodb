# opt-verification

OTP verification without using any database or cache

## Table of Contents

- [opt-verification](#opt-verification)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Flow Description](#flow-description)
  - [Stack](#stack)
  - [Setup](#setup)
  - [How It Works](#how-it-works)

## Key Features

- No need to use database or cache.

## Flow Description

> Most of the time cache memory or database used to verify OTP. It's expensive operation. We can verify OTP without using database or cache memory.

> OTP requested user send request with mobile number. Then requested number, generated OTP(using otp-generator) is used to create hash value using sha256. Then hash value is used for OTP request response & preserve it on frontend. Generated OTP will send to requested users Mobile number.

> After getting OTP, user now verify OTP with 2nd request. On the 2nd request OTP, Mobile No & Hash will be sent to the server to verify. Using mobile no & OTP we will generate new hash. New hash value will be compared with requested hash value. If both hash value matched then OTP is verified.

## Stack

- Node (Web server)
- Express (Web server framework)
- crypto (Generate unique hash)
- sha256 (Encryption algorithm)
- otp-generator (To generate OTP)

<a href="#table-of-contents" style="float: right; position: fixed; bottom: 10px; right: 10px;background-color: #EEEEEE;color: #333333;padding: 2px 6px 2px 6px;border: 1px solid #000;text-decoration: none;font: 1rem Arial;">UP</a>

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Run the project: `npm start`.
4. Test the project: `mocha`

## How It Works

- Generate OTP from 'otp-generator' module.
- Using Crypto module & sha256 hasing algorithm, generate hash from mobile no & otp.
- A hash is created with the phone number and then sent to the requested user.
- Requested user receives the OTP via SMS, email or any other method.
- Requested user sends back the hash, OTP and phone no which used in the first request.
- The server verifies the information and returns true if they match.
