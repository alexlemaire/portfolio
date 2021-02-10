import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Alexis' portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Alexis',
  subtitle: `I'm a Javascript developer.`,
  cta: 'Want to know more?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a self-taught developer who used to be an engineer, but in another field! Currently based in Berlin, I love to tinker with code and learn new technologies. Anything even remotely related to science sparkles my curiosity and I like to share my knowledge and coach people whenever I can. Besides IT, I am also an avid competitive gamer! 🎮`,
  paragraphTwo: `Some of the technologies I use: JavaScript, Node, Express, Elasticsearch, HTML5/CSS3, Polymer/lit-element, SPA, Websockets, GitHub Actions, MySQL, DynamoDB, AWS, GCP and the list keeps going on...`,
  paragraphThree:
    'Projects listed below are some of the open source work I did. I also contributed on closed source apps which unfortunately cannot be shown here.',
  resume: 'https://drive.google.com/file/d/1QbBljYzuB8ZiMicjKK7GEyUE-ffRlat5/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'collmex-client.png',
    title: 'Collmex client',
    info: `JavaScript client allowing developers to integrate the Collmex (german ERP) API into their Node backend. This package is kept in sync with the official Collmex API documentation using a web-scrapper.`,
    info2: 'Technologies: JavaScript, Node, GitHub Actions, Puppeteer, Chai + Mocha, Standard',
    url: 'https://www.npmjs.com/package/collmex-client',
    repo: 'https://github.com/kaskadi/collmex-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fs-file-manager.png',
    title: 'Flora-soul file manager',
    info: `Web App allowing Klimapartner's employees to manage files on a remote server. Also developped a closed source version which includes Cloud support (AWS S3). This app is limited to our employees so only the source code is visible.`,
    info2: 'Technologies: JavaScript, Node, Express, lit-element, Websockets, RestAPI, HTML5/CSS3',
    url: 'https://github.com/kaskadi/flora-soul-website/tree/master/admin',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mws-client.png',
    title: 'MWS API wrapper',
    info: `JavaScript client wrapping the Amazon Marketplace Web Services (MWS) API. This allows developers to query the Amazon marketplace API directly from their Node backend.`,
    info2: 'Technologies: JavaScript, Node, XML parsers, Chai + Mocha, Standard',
    url: 'https://www.npmjs.com/package/mws-client',
    repo: 'https://github.com/kaskadi/mws-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kaskadi-docs-gen.png',
    title: 'Kaskadi documentation generator',
    info: `GitHub Action allowing developers to auto-generate documentation for their projects. Since this is a GitHub Action, the showcase link shows a repository using this action to generate its documentation.`,
    info2: 'Technologies: GitHub Actions, JavaScript, Node, Chai + Mocha, Standard',
    url: 'https://github.com/kaskadi/kaskadi-textbox',
    repo: 'https://github.com/kaskadi/action-generate-docs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'git-assist.png',
    title: 'GitHub assistant',
    info: `git-assist is a personal project that simplifies the interaction with GitHub for novice users. This is intended to be used in cases where a company would like to use GitHub as a content management system where non-developer employees with limited knowledge of GitHub would be included. This supports feature like clone, push, pull, auto-pull, SSH/GPG key generation and also provides configuration ability and local logging for easier debugging.`,
    info2:
      'Technologies: JavaScript, Node, CLI development, process/threat management, logging/configuration, Standard',
    url: 'https://www.npmjs.com/package/git-assist',
    repo: 'https://github.com/alexlemaire/git-assist', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'alexis.lemaire94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alexis-lemaire-089b1b109/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alexlemaire',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
