// userData.js
const userData = {
  "123": {
    firstName: "Ernie",
    lastName: "Johnson",
    photoUrl: "https://erniejohnson.ca/assets/profile2-8fa8b026.png",
    phone: "+1 705-331-8899",
    location: "Calgary, AB Canada",
    title: "Software Engineer",
    bio: "Software developer since the 1990's involved in design and development of standalone applications, mobile device apps, web apps and fully interactive web and e-commerce sites. Experienced with Sharepoint development, GIS, Geospatial organization, cyber security awareness.",
    email: 'ernie@erniejohnson.ca',
    website: 'http://www.erniejohnson.ca',
    organization: 'ErnieJohnson.ca',
    socials: {
      twitter: "http://www.twitter.com/ejdevscom",
      instagram: "https://www.instagram.com/erniejohnsonca/",
      github: "https://github.com/ej8899/",
      youtube: "https://www.youtube.com/@oldmancodes",
      linkedin: "https://www.linkedin.com/in/ernie-johnson/",
    },
    links: [
      { order: 1, type: "external-link", label: "Web & App Design Portfolio", url: "https://erniejohnson.ca" },
      { order: 3, type: "email", label: "Reach out via e-mail", url: "mailto:ernie@erniejohnson.ca" },
      { order: 2, type: "external-link", label: "Game Dev (Pixel Realms)", url: "https://erniejohnson.ca/pixelrealms" },
    ],
    showqr: true,
    showLocation: true,
    showPhone: true,
  },
  "456": {
    firstName: "Jane",
    lastName: "Smith",
    photoUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    phone: "+1 987-654-3210",
    location: "San Francisco, USA",
    title: "UX Designer",
    socials: {
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      github: "https://github.com/janesmith",
    },
    links: [
      { type: "external-link", label: "Portfolio", url: "https://janesmith.com" },
      { type: "email", label: "Email", url: "mailto:janesmith@example.com" },
    ],
  },
};

export default userData;
