const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "Your_secret_key_in_here",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://"
}

export default config
