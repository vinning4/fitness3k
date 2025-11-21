module.exports = {
    name: "Fitness 3K",
    email: "join@fitness3K.co",
    phoneForTel: "03 9213 2222",
    phoneFormatted: "(03) 9213 2222",
    address: {
        lineOne: "9 Fullerton Ln",
        lineTwo: "",
        city: "Melbourne",
        state: "VIC",
        zip: "3000",
        country: "AU",
        mapLink: "https://maps.app.goo.gl/ATWwXHDtoHjPS8En6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.fitness3k.co",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
