import imovie from '../assets/projects/tvshow desktop.png';
import bookStore from '../assets/projects/bookstore.png';
import manage from '../assets/projects/manage.png';
import country from '../assets/projects/country-info.png';

export const ProjectDetails = [
  {
    id: 0,
    name: 'Imovies',
    description:
      'Imovies is a webapp that allows users to see a list of movies and also like and comment on movies of their choice. It pulls the moives from the tvmaze api.',
    image: imovie,
    link: 'https://othniel2471.github.io/tvshows/',
    stacks: ['javascript', 'webpack', 'css', 'html'],
  },
  {
    id: 1,
    name: 'bookstore',
    description:
      'Book store is an app (desktop view only) built with react, that uses Redux and gives the users the ability to add and delete books and also gives users the ability to select the category to which they want to place the books. I used the project to practice using redux and react.',
    image: bookStore,
    link: 'https://bookstore-8oqw.onrender.com/',
    stacks: ['react', 'redux', 'css', 'html'],
  },
  {
    id: 2,
    name: 'Manage Landing Page',
    description:
      'This is a solution to the Manage landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    image: manage,
    link: 'https://deft-druid-0382f9.netlify.app/',
    stacks: ['javascript', 'tailwind css', 'html'],
  },
  {
    id: 3,
    name: 'Country Info',
    description:
      'Country Details is an app built with react, the uses redux to fetch the details of countries from an API then displays them for users to have access to.',
    image: country,
    link: 'https://countryinfo-3kif.onrender.com/',
    stacks: ['react', 'redux', 'css', 'html'],
  },
];
