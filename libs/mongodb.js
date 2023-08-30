const mongoose = require("mongoose");

const connectMongodb = async () => {
  try {
    //  await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect(
      "mongodb+srv://portfolio-tajbeul:4ElLeJ9FDrCZ0Evm@cluster0.ex2dsg0.mongodb.net/portfolio"
    );
    console.log("Connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectMongodb;
