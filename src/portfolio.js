const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://emmanuelbitang.github.io/',
  title: 'eb.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Emmanuel Bitang',
  role: 'Full Stack Javascript Developer',
  description: `Hello! I'm a Manila-based Full Stack Web Developer. If I'm not freelancing for some businesses here in Philippines. I'm working remotely on projects for clients all over the world. I have a diverse set of skills, ranging from design, to HTML + CSS + Javascript, all the way to ReactJS and responsive websites. This also may include a CMS, API's or other integration. If you are interested in my work, let me help you get your idea into the world. For questions or inquiries you can call me at +63926-170-9017.`,
  resume: require('./contexts/Emmanuel_Bitang.pdf').default,
  social: {
    linkedin: 'https://www.linkedin.com/in/emmanuel-bitang-05614a141/',
    github: 'https://github.com/emmanuelbitang',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: `Selyn Make'em`,
    projectImage: require('./images/selynmakeem.jpg').default,
    description: `Design and created a responsive website for a makeup business with a 1k+ followers, boosting the brands visibility and increasing its personal care service offers for 30% more. Providing general information and a way for the makeup business to reach potential clients and customers locally through the site.`,
    stack: ['React', 'TypeScript', 'Javascript', 'JSX','Styled-components','Node JS'],
    sourceCode: 'https://github.com/emmanuelbitang/selynmakeem',
    livePreview: 'https://www.selynmakeem.site/',
  },
  {
    name: 'Jed Photography!',
    projectImage: require('./images/jedphotography.jpg').default,
    description: `Implemented, maintained, and designed a mobile friendly website for a photography business with a 1k+ followers. Through this site the business was able to attract 50% more followers and clients, reaching a wider audience for online promotion of services and offers, and establishing or enhancing brand recognition.`,
    stack: ['JSX', 'TypeScript', 'React', 'Node JS', 'Styled-components', 'CSS'],
    sourceCode: 'https://github.com/emmanuelbitang/jedphotography',
    livePreview: 'https://www.jed-photography.online/',
  },  
  {
    name: 'My Todo App',
    projectImage: require('./images/todoapp.jpg').default,
    description: `Created a to-do app using react hooks for writing things need to be done which helps reduce stress. This app increased my productivity for 50% more and get the feeling that I have control on my work and actions. By crossing items off gives me that sense of accomplishment and progress and helps me get motivated and keep going when things get tough`,
    stack: ['JSX', 'TypeScript', 'React', 'Material-UI'],
    sourceCode: 'https://github.com/emmanuelbitang/my-todo-app',
    livePreview: 'https://manuel-todo-list.netlify.app/',
  },
  {
    name: 'Cryptocurrency Tracker',
    projectImage: require('./images/crypto.jpg').default,
    description: `Created a cryptocurrency tracker web app to monitor the market value of each coin in real-time fetching data using API from api.coingecko.com. By making this tracker, I have a clear overview of my coin investments of live price in both Bitcoin and USD. Keeping an eye on the overall Rolling Profit/Loss summary on all my positions together.`,
    stack: ['React', 'TypeScript', 'CSS', 'Axios', 'JSX'],
    sourceCode: 'https://github.com/emmanuelbitang/cypto_tracker',
    livePreview: 'https://cryptocointracker.netlify.app/',
  },
  {
    name: 'Travel',
    projectImage: require('./images/travel.jpg').default,
    description: `Created and design a resource that shows the structure for the comprehensive layout and display features of a travel website for web template and marketing. It also helped make designing a lot easier. This website is designed using CSS, ReactJS and JSX`,
    stack: ['React', 'HTML', 'CSS', 'JSX', 'Node JS'],
    sourceCode: 'https://github.com/emmanuelbitang/travel',
    livePreview: 'https://travel-around.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux Saga',
  'React-Boilerplate',
  'Material UI',
  'Git',
  'CI/CD',
  'JSX',
  'Styled Components',
  'Loopback',
  'Oracle',
  'MongoDB',
  'SQL',
  'GitLab'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emmanuelbitang@gmail.com',
}

export { header, about, projects, skills, contact }
