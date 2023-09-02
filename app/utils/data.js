// The name of the image is adjusted to the name of
// the file in the public folder
const dataAbout = {
  description: [
    "Hello there! My name is Nayla and I'm passionate about crafting engaging and dynamic digital experiences. I'm very passionate about technology and data research. My valuable skills include teamwork, problem solving, critical reasoning, creativity, and basic website development.",
    " I am familiar with HTML, CSS, and Javascript, and currently focusing on mastering Node.js and React.js technologies for more advanced web development. The desire to learn and adapt quickly is my strength, which allows me to overcome challenges in the ever-evolving world of technology as well as contributions that drive innovation in software development.  I believe that the fusion of creativity and technology can produce remarkable results, and I'm excited to be part of this transformative journey.",
    "Whether it's building responsive websites, diving into data-driven insights, or collaborating with fellow tech enthusiasts, I'm always ready for the next exciting project. Let's embark on this digital adventure together and make the web a more dynamic and engaging place!",
  ],
  techs: [
    'html',
    'css',
    'sass',
    'javascript',
    'php',
    'reactjs',
    'nodejs',
    'nextjs',
    'bootstrap',
    'tailwindcss',
    'mysql',
    'git',
    'github',
    'npm',
    'vscode',
    'figma',
    'blender'
  ],
  image: 'women.jpeg',
}

const dataNavbar = {
  title: '<Nayla/>',
  menuList: ['About', 'Experiences', 'Projects'],
}

// The name of the cvFile is adjusted to the name of
// the file in the public folder
const dataHeading = {
  intro: 'Hi, my name is',
  title: 'Nayla Nur A.',
  subtitle: [
    'Fascinated by Technology',
    'Intrigued by Interactive Webcraft',
    'Entranced by Digital Creativity',
    'Captivated by Interactive Experiences',
  ],
  description:
    'Undergraduate software engineering student in Telkom Vocational School Malang, software engineer specializing in front-end development. Currently developing websites with Node.js framework.',
  cvFile: 'newestcv.pdf',
}

const dataExperiences = [
  {
    title: 'Library Borrowing and Returning Facility - Perpustakaan Telkom (PUSTEL)',
    detail: {
      position: 'Library Borrowing and Returning Facility',
      place: 'Perpustakaan Telkom (PUSTEL)',
      time: 'March 2022 - Now',
      jobdesc: [
        'Integrated book search features based on titles, authors, or categories to facilitate access to information',
        'Implemented a notification system to alert users about book return deadlines and late fines.',
        'Managed the database of book borrowing and returning, including recording borrowing dates, return dates, and book statuses.',
      ],
    },
    active: true,
  },
  {
    title: 'Head of Public Relations - Community of Moklet English Debaters (COMET)',
    detail: {
      position: 'Head of Public Relations',
      place: 'Community of Moklet English Debaters (COMET)',
      time: 'November 2023 - Now',
      jobdesc: [
        'Interacted and coordinated with internal team members such as the President, Treasurer, and Secretary to ensure alignment of organizations messages and activities.',
        'Organized regular meetings with the team to coordinate tasks and develop new communication initiatives',
        'Participated in training sessions and routine meetings to enhance debate skills.',
      ],
    },
    active: false,
  },
  {
    title: 'Frontend Developer Trainee (Teaching Factory Telkom DBT) - PT Telkom Indonesia',
    detail: {
      position: 'Frontend Developer Trainee',
      place: 'PT Telkom Indonesia',
      time: 'March 2022 - March 2023',
      jobdesc: [
        'Acquired and mastered fundamental frontend development skills, including HTML, CSS, and JavaScript.',
        'Collaborated with development and design teams to transform designs into appealing and intuitive frontend code.',
        'Conducted testing and debugging to ensure optimal performance and functionality of websites.',
      ],
    },
    active: false,
  },
]

// The name of the thumbnail is adjusted to the name of
// the photo file in the public folder
const dataProjects = [
  {
    thumbnail: 'I-Door.png',
    title: 'Programming',
    description:
      'I-Door Homestay is a website that offers unique and comfortable accommodation services for travelers. I-Door Homestay website provides complete information about various homestay properties, including photos of the rooms and facilities provided.',
    technology: ['HTML', 'CSS', 'PHP', 'Javascript'],
    resourceLink: 'https://github.com/nylaam/i-Door-Tubes-TEFA.git',
  },
  
  {
    thumbnail: 'Fast Laundry.png',
    title: 'Programming',
    description:
      'Telkom Vocational School Malang Laundry Website Level Up Exam Project is an online platform specifically designed to assist customers in fulfilling their laundry needs. Users can access laundry services, place orders, and track the status orders.',
    technology: ['PHP', 'HTML', 'CSS'],
    resourceLink: 'https://github.com/nylaam/FastLaundry-11.git',
  },
  
  {
    thumbnail: 'Web Profile team.png',
    title: 'Programming',
    description:
      'The "Team Profile" website is an online platform specifically designed to introduce team members. Through this website, users can access both brief and detailed information about each team member, including their photos, information, and experience.',
    technology: ['Javascript', 'React', 'Tailwind'],
    productLink: 'http://profile-triplen.vercel.app/',
    resourceLink: 'https://github.com/nylaam/WEBPROFILE-TEAM.git',
  },
  {
    thumbnail: 'Calculator Web.png',
    title: 'Programming',
    description:
      'Creative Calculator is a website designed to help users calculate user requirements. Equipped with night and day modes that assist users in setting the screen display. Users can use it to calculate numbers in everyday math problems.',
    technology: ['React', 'Tailwind', 'Docker'],
    productLink: 'http://profile-triplen.vercel.app/',
    resourceLink: 'https://github.com/nylaam/TeamWebProfile-reactCal-new.git',
  },
  {
    thumbnail: 'ney florist.png',
    title: 'Programming',
    description:
      'DBT Trainee Assignment. A florist website is an online platform that helps users find, order flower arrangements for various purposes such as gifts, celebrations, special occasions or expressions of affection. Browsing and searching for flower.',
    technology: ['Javascript', 'Next.js', 'Tailwindcss'],
    productLink: 'https://neyflorist-next.vercel.app/',
    resourceLink: 'https://github.com/nylaam/NEFLORIST-NEXT-WEB.git',
  },
  {
    thumbnail: 'AyoMasak.png',
    title: 'UI Design',
    description:
      'Ayo Masak UI design is a visual and interactive element that allows users to explore and use Ayo Masak platform with ease. With an attractive and intuitive appearance, Ayo Masak UI design is designed to facilitate users in finding recipes and cooking food.',
    technology: ['Figma'],
    productLink: 'https://www.figma.com/file/6ZmGRFZISrGIFdZVit66Wb/Untitled?type=design&node-id=0%3A1&mode=design&t=Iivv9OI6PG8tvjdc-1',
  },
  {
    thumbnail: 'mobil 22.jpg',
    title: '3D Animation',
    description:
      '3D car animation is a stunning visual element created with blender software in graphic design subject. This 3D animation of a car object is used to provide a memorable experience to the creator regarding graphic design learning.',
    technology: ['Blender'],
  },
]

// The name of the logo is adjusted to the name of
// the file in the public folder
const dataSocialMedia = {
  data: [
    { link: 'mailto:naylanur.amalia06@gmail.com', logo: 'logos_gmail.svg' },
    { link: 'https://github.com/nylaam', logo: 'logos_github.svg' },
    { link: 'https://instagram.com/nayl.amalia', logo: 'logos_instagram.svg' },
    { link: 'https://www.linkedin.com/in/nayla-nur-amalia-a80397263', logo: 'logos_linkedin.svg' },
  ],
  email: 'naylanur.amalia06@gmail.com',
}

export {
  dataAbout,
  dataHeading,
  dataNavbar,
  dataExperiences,
  dataProjects,
  dataSocialMedia,
}
