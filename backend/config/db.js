import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONN, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB