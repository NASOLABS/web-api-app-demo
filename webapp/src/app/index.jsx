/**
 * @module App
 */
import React, { Suspense } from 'react';
import { render } from 'react-dom';


// Set the DOM Element to attach the SPA
const root = document.getElementById('root');


/**
 * Main Application Render Method
 * @param {function} Component -- JSX Component being rendered
 * @memberof App
 */
export const renderer = (Component, dom) =>
  render(
    <>
    </>,
    dom
  );

// Call the render method with the App component
renderer(App, root);

// Setup the hot module reloading to replace components on disk-write with the new version
if (module.hot) {
  module.hot.accept('app', () => renderer(App, dom));
}
