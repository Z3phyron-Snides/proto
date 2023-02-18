const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://social:social@cluster0.hax7oad.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
