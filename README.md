# opt-verification

OTP verification without using any database or cache

## Table of Contents

- [opt-verification](#opt-verification)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Stack](#stack)
  - [Setup](#setup)
  - [How It Works](#how-it-works)

## Key Features

- No need to use database or cache.

## Stack

- Node (Web server)
- Express (Web server framework)
- crypto (Generate unique hash)
- sha256 (Encryption algorithm)
- otp-generator (To generate OTP)

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
