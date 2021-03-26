const GetGoogleFonts = require("get-google-fonts");

const configs = {
    outputDir: "./dist/fonts",
    cssFile: "./fonts.css",
    fonts: [
        {
            // Families and weights to be used
            Montserrat: [400, 600, 700],
        },
    ],
};

const instance = new GetGoogleFonts({
    outputDir: configs.outputDir,
    cssFile: configs.cssFile,
});

instance
    .download(configs.fonts)
    .then(() => {
        console.log("Fonts ready!");
    })
    .catch(() => {
        console.log("Whoops, fonts failed!");
    });
