# Feedreader testing with Jasmine 2.1.2

Udacity Front End Web Nanodegree project 4. This project demonstrates browser based testing using Jasmine 2.1.2. I Practiced how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Table of Contents

* [Project Overview](#project-overview)
* [Installation](#installation)
* [Task](#task)
* [Contributing](#contributing)
* [License](#license)
* [Credit](#credit)

## Project Overview

In this project I was given a web-based application that reads RSS feeds. I was to write a test suits using [Jasmine](http://jasmine.github.io/). 


## Installation
Clone or download this repository and open the `index.html` file in your browser.


## Task
 * Tests for allFeeds variable has been defined and that it is not empty.
    ```
    describe('RSS Feeds', function() {
            
            it('are defined', function() {
                expect(allFeeds).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            });
    ```
 * Test loops through each feed in the `allFeedsobject` and ensuring if allFeeds have a url also that the url is not empty.
    ```
     it('urls are defined and not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
    //Expect that it has a URL defined
                expect(allFeeds[i].url).toBeDefined();
    //Expect that the URL is not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        })
    ```
 * Test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
    ```
    it('allFeeds object name are defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                //expect name to be defined
                expect(allFeeds[i].name).toBeDefined();
                //expect name not to be empty
                expect(allFeeds[i].name.length).not.toBe(0)
            }
        })
    ```
 * Write a new test suite named "The menu".  Analyzing the HTML, CSS file to determine how we're performing the hiding/showing of the menu element.
    ```
     describe('The Menu', function() {
         it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu.hidden')).not.toEqual(true);
        })
     });
    ```
 * Write a test that ensures the menu changes visibility when the menu icon is clicked.
    ```
    it('toggling the menu ON and OFF', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        })
    ```
 * Write a test that ensures when the loadFeedfunction is called and completes its work.
    ```
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('When loadFeed is called, their is an entry in this feed', function() {
            expect($('.entry .feed')).toBeDefined();
        })
    ```
 * Write a test that ensures when a new feed is loaded by the `loadFeedfunction` that the content actually changes. Tests to see if two entries are not equal.
    ```
    beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                entriesStart = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function () {
                entriesEnd = $('.feed').find(allFeeds.url);
                done();
            });
    });
        
        it('When feed is loaded, the content actually changes', function() {
            expect('entriesStart').not.toBe('entriesEnd');
        });
    });
    ```

When complete all tests should pass.

![Test Passed](/img/passed.jpg)

## Contributing

This repository is a copy of the master commit in Udacity repository as part of the project of FRONT END WEB NANODEGREE Program. It is a work of a beginner programmer and reviews are welcomed and should be directed [Here](mailto:sixtus.nnamdi@gmail.com). 
If you wish to contribute to this project, kindly fork it, and push to a new branch of the master repo https://github.com/sislinigeria/Udacity-Feedreader-Testing

## License

This project was submitted by [Sixtus Nnamdi](www.linkedin.com/in/sixtus-nnamdi) as part of the Front End Web Nanodegree program at Udacity.

As part of Udacity Honor code, your submissions must be your own work, hence submitting this project as yours will cause you to break the Udacity Honor Code and the suspension of your account.

Me, the author of the project (*basically, all the feed assets was provided, I only coded JavaScript for the testing using [Jasmine](http://jasmine.github.io/) - feedreader.js file*), allow you to check the code as a reference, but if you submit it, it's your own responsibility if you get expelled.

Besides the above notice, the following license applies and this license notice must be included in all works derived from this project. - ![Creative Commons](https://openaid.se/wp-content/uploads/2015/03/pdm-cc0-.png)

##  Credit

Credit to this work goes to
* [Udacity](https://udacity.com)
* [Google](https://developers.google.com/)
* [Jasmine Documentation](https://jasmine.github.io/tutorials/your_first_suite)
* Youtube Video by Ryan Boris [P4 Walkthrough: Feed Reader Jasmine Unit Tests](https://youtu.be/7kOBXPbDmyw)
* ["Using Jasmine to test"](https://youtu.be/zdI_F7uSpqM) by Udacity
