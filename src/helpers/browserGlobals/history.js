import { createBrowserHistory } from 'history';
import window from './window';

const supportsHistory = window.history && 'pushState' in window.history;

const history = window.history ? createBrowserHistory({ forceRefresh: !supportsHistory }) : {};

export default history;
