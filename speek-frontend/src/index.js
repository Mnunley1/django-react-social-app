import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProfileBadgeComponent } from './profiles'
import { PostComponent, PostDetailComponent, FeedComponent } from './posts'
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}
const e = React.createElement
const postsEl = document.getElementById("speek-app")
if (postsEl) {
  ReactDOM.render(
    e(PostComponent, postsEl.dataset), postsEl);
}

const postsFeedEl = document.getElementById("speek-app-feed")
if (postsFeedEl) {
  ReactDOM.render(
    e(FeedComponent, postsFeedEl.dataset), postsFeedEl);
}

const postDetailElements = document.querySelectorAll(".speek-app-detail")

postDetailElements.forEach(container => {
  ReactDOM.render(
    e(PostDetailComponent, container.dataset),
    container);
})

const userProfileBadgeElements = document.querySelectorAll(".speek-app-profile-badge")

userProfileBadgeElements.forEach(container => {
  ReactDOM.render(
    e(ProfileBadgeComponent, container.dataset),
    container);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
