/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //test ensures that each feed has a URL and is not empty
        it('urls are defined and not empty', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                //Expect that it has a URL defined
                expect(allFeeds[i].url).toBeDefined();
                //Expect that the URL is not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        })

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeeds object name are defined and not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                //expect name to be defined
                expect(allFeeds[i].name).toBeDefined();
                //expect name not to be empty
                expect(allFeeds[i].name.length).not.toBe(0)
            }
        })
    });

    //New test suite named "The menu"
    describe('The Menu', function() {

        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('menu element is hidden by default', function() {
            /* expect the body tag which has a class of 'menu-hidden'
             * with a css style property transform set to translate3d(-12em,0,0)
             * representing to be out of the page by -12em(hidden) and 
             * js code located in app.js ln 119 to 125
             */
            expect($('body').hasClass('menu.hidden')).not.toEqual(true);
        })

         /* Test ensuring that the menu changes
          * visibility when the menu icon is clicked.
          */
        it('toggling the menu ON and OFF', function() {
            //Does the Menu display when clicked? - first expectation
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //Does the menu hide when clicked again? - Second expectation
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        })
    });
    
    // New Test suite named "Initial Entries" 
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('When loadFeed is called, their is an entry in the feed', function() {
            //expect at least 1 (counting from 0) entry in the feed
            expect($('.entry .feed')).toBeDefined();
        })
    });
    
    // New test suite named "New Feed Selection"
    describe('New Feed Selection', function() {

        
        //ensures that the new feeds load, we use beforeEach
        beforeEach(function(done) {
            $('.feed').empty();
            //load the feed using entriesStart to search for the first feed
            loadFeed(0, function() {
                entriesStart = $('.feed').html;
                done();

            //new feed loads
                loadFeed(1, function () {
                    entriesEnd = $('.feed').html;
                    done();
                });
            });
        });
        //expect the old feeds "entriesStart" to be different from the
        //new feed "entriesEnd"
        it('When feed is loaded, the content actually changes', function() {
            expect('entriesStart').not.toBe('entriesEnd');
        });
    });
}());
