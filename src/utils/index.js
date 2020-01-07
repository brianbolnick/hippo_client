import client from '../apolloClient';

let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:3001';
} else {
  backendHost = 'https://hungryhippo-api.herokuapp.com';
}

export const API_URL = `${backendHost}/api/${apiVersion}`;
export const jwt = JSON.parse(localStorage.getItem('jwt'));
const sub = jwt && JSON.parse(jwt.sub);
export const userId = jwt && sub.id;
export const familyId = jwt && sub.family_id;
export const token = localStorage.getItem('auth_token');
export const signOut = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('auth_token');
  client.resetStore();
  window.location.replace('/');
};

const errorMap = {
  401: 'Invalid credentials.',
  400: 'User not found.',
  500: 'Something went wrong. Please try again.'
};

export const DISH_TYPE_ICON_MAP = {
  beverage: 'drink',
  soup: 'dish',
  appetizer: 'cheese',
  main: 'main',
  side: 'fries',
  dessert: 'dessert',
  salad: 'salad',
  breakfast: 'breakfast',
  bread: 'bread'
};

export const handleNetworkErrors = err => {
  return (
    errorMap[err.response.status] || `Something unexpected occurred: ${err}`
  );
};

export const timeShortener = timeString => {
  if (!timeString) return '';
  const normalizedTimeString = timeString.toLowerCase();
  if (normalizedTimeString === 'minutes') return 'Min';
  if (normalizedTimeString === 'seconds') return 'Sec';
  if (normalizedTimeString === 'hours') return 'Hr';
  return timeString;
};

export const AVAILABLE_DOMAINS = ['foodnetwork', 'allrecipes', 'damndelicious'];

export { default as recipeScraper } from './scrapers';
