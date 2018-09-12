# Feedreader testing with Jasmine 2.1.2

Udacity Front End Web Nanodegree project 4. This project demonstrates browser based testing using Jasmine 2.1.2.

## Project Overview

In this project we are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I come in.


## What we learn?

We learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


## Task
 * Tests for allFeeds variable has been defined and that it is not empty.
 * Test loops through each feed in the `allFeedsobject` and ensuring if allFeeds have a url also that the url is not empty.
 * Test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
 * Analyzing the HTML, CSS file to determine how we're performing the hiding/showing of the menu element.
 * Write a test that ensures the menu changes visibility when the menu icon is clicked.
 * Write a test that ensures when the loadFeedfunction is called and completes its work.
 * Write a test that ensures when a new feed is loaded by the `loadFeedfunction` that the content actually changes. Tests to see if two entries are not equal.

When complete all tests should pass.

## Installation
Clone or download this repository and open the `index.html` file in your browser.