import imovie from '../assets/projects/tvshow desktop.png';
import bookStore from '../assets/projects/bookstore.png';
import manage from '../assets/projects/manage.png';
import country from '../assets/projects/country-info.png';
import driveasy from '../assets/projects/home.PNG';
import budgetify from '../assets/projects/budgetify.PNG';
import trello from '../assets/projects/trello.png';

export const ProjectDetails = [
  {
    id: 0,
    name: 'Trello Clone',
    description:
      '(Desktop only)A Trello clone app, that creates a new task and allows users to re order tasks with drag and drop and also stores data in the local storage. This was a take home assignment for a frontend role',
    image: trello,
    link: 'https://feassignment.onrender.com/',
    git: 'https://github.com/Othniel2471/trello-clone',
    stacks: ['react', 'redux', 'material-ui', 'react-beautiful-dnd library'],
  },
  {
    id: 1,
    name: 'Imovies',
    description:
      'Imovies is a webapp that allows users to see a list of movies and also like and comment on movies of their choice. It pulls the moives from the tvmaze api.',
    image: imovie,
    link: 'https://othniel2471.github.io/tvshows/',
    git: 'https://github.com/Othniel2471/tvshows',
    stacks: ['javascript', 'webpack', 'css', 'html'],
  },
  {
    id: 2,
    name: 'bookstore',
    description:
      'Book store is an app (desktop view only) built with react, that uses Redux and gives the users the ability to add and delete books and also gives users the ability to select the category to which they want to place the books. I used the project to practice using redux and react.',
    image: bookStore,
    link: 'https://bookstore-8oqw.onrender.com/',
    git: 'https://github.com/Othniel2471/book-store',
    stacks: ['react', 'redux', 'css', 'html'],
  },
  {
    id: 3,
    name: 'Manage Landing Page',
    description:
      'This is a solution to the Manage landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    image: manage,
    link: 'https://deft-druid-0382f9.netlify.app/',
    git: 'https://github.com/Othniel2471/frontend_manage',
    stacks: ['javascript', 'tailwind css', 'html'],
  },
  {
    id: 4,
    name: 'Country Info',
    description:
      'Country Details is an app built with react, the uses redux to fetch the details of countries from an API then displays them for users to have access to.',
    image: country,
    link: 'https://countryinfo-3kif.onrender.com/',
    git: 'https://github.com/Othniel2471/country-details',
    stacks: ['react', 'redux', 'css', 'html'],
  },
  {
    id: 5,
    name: 'Budgetify',
    description:
      'The budget application is a rails-based app that enables users to input different categories and track their expenses within each category. It provides users with the functionality to monitor their spending on specific items.',
    image: budgetify,
    link: 'https://budget-app-u9ai.onrender.com/',
    git: 'https://github.com/Othniel2471/budget_app',
    stacks: ['ruby on rails', 'rspec-rails', 'css', 'html'],
  },
  {
    id: 6,
    name: 'Driveasy',
    description:
      'Driveasy: An app for adding and managing your cars, booking vehicles, and accessing detailed car information with ease',
    image: driveasy,
    link: 'https://driveasy.vercel.app/',
    git: 'https://github.com/batoolfatima2135/Driveasy',
    stacks: [
      'ruby on rails',
      'react',
      'redux',
      'tailwindCss',
      'html',
      'pair programming',
    ],
  },
];
