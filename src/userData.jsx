// userData.js
const userData = {
  "123": {
    firstName: "John",
    lastName: "Doe",
    photoUrl: "https://example.com/john-doe.jpg",
    phone: "123-456-7890",
    location: "New York, USA",
    title: "Software Engineer",
    bio: "this is my bio as a software engineer",
    socials: {
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      github: "https://github.com/johndoe",
    },
    links: [
      { type: "external-link", label: "Portfolio", url: "https://johndoe.com" },
      { type: "email", label: "Email", url: "mailto:johndoe@example.com" },
    ],
  },
  "456": {
    firstName: "Jane",
    lastName: "Smith",
    photoUrl: "https://example.com/jane-smith.jpg",
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
