module.exports = {
  // ... other configuration settings

  module: {
    rules: [
      // ... other rules

      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "Resume_of_Tajbeul_MERN.pdf",
              outputPath: "./public/otherResources/Resume_of_Tajbeul_MERN.pdf", // Change this to your desired output directory
            },
          },
        ],
      },
    ],
  },
};
