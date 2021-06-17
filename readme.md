React is a JavaScript library that enables you to create the appearance of websites. Furthermore, by using the mobile version of React, React Native, you can create smartphone apps for both iOS and Android.

A module encapsulates a set of related functions and components semantically related with its own functional responsibility. They have all the assets they need to work on their own and can be tested independently of the rest of the application.

import React, { Component } from 'react'; -  here we import React and also import Component from the React package. This is called a named import and with its named import statement you can create a class without extending from React Component.

props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. Several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor ~  So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
