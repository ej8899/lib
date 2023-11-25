// userData.js
const userData = {
  "123": {
    firstName: "Ernie",
    lastName: "Johnson",
    photoUrl: "https://erniejohnson.ca/assets/profile2-8fa8b026.png",
    phone: "705-331-8899",
    location: "Calgary, AB Canada",
    title: "Software Engineer",
    bio: "this is my bio as a software engineer",
    email: 'ernie@erniejohnson.ca',
    website: 'http://www.erniejohnson.ca',
    organization: 'ErnieJohnson.ca',
    socials: {
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      github: "https://github.com/johndoe",
    },
    links: [
      { order: 1, type: "external-link", label: "Portfolio", url: "https://erniejohnson.ca" },
      { order: 3, type: "email", label: "Email", url: "mailto:ernie@erniejohnson.ca" },
      { order: 2, type: "external-link", label: "Games", url: "https://erniejohnson.ca/pixelrealms" },
    ],
  },
  "456": {
    firstName: "Jane",
    lastName: "Smith",
    photoUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    phone: "987-654-3210",
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
