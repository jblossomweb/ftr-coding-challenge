import { History, createBrowserHistory } from 'history';

let history: History | null = null;

const getHistory: () => History = () => history ? history : createBrowserHistory();

export default getHistory;
