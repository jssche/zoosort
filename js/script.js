$(document).ready(function () {

    //Expand & collapse activity booking options - date, time and number of guests on activity booking pages
    $(".activity-booking").click(function (event) {
        event.preventDefault();
        $(this).parent().toggleClass("visible");
    });

    //Switch between different live cameras on animals page when users makes a selection
    $(".video-button-1").click(function (event) {
        event.preventDefault();
        document.getElementById('live-video').src = "https://www.youtube.com/embed/c4C1c4z8hTQ?controls=0&rel=0&autoplay=1&mute=1";
    });

    $(".video-button-2").click(function (event) {
        event.preventDefault();
        document.getElementById('live-video').src = "https://www.youtube.com/embed/sDgWnw3YPjs?controls=0&rel=0&autoplay=1&mute=1";
    });

    $(".video-button-3").click(function (event) {
        event.preventDefault();
        document.getElementById('live-video').src = "https://www.youtube.com/embed/xG1fcT7BC1A?controls=0&rel=0&autoplay=1&mute=1";
    });

    $(".video-button-4").click(function (event) {
        event.preventDefault();
        document.getElementById('live-video').src = "https://www.youtube.com/embed/MKAPtmKCu2E?controls=0&rel=0&autoplay=1&mute=1";
    });

    // ScrollClass Plugin
    $('.list-page-product').scrollClass();

    $('.list-page-product').scrollClass({
        delay: 10,
        threshold: 1,
        offsetTop: 80,
        callback: function () {
            console.log('Callback fired!');
        }
    });

    $('.review-details').scrollClass();

    $('.review-details').scrollClass({
        delay: 10,
        threshold: 20,
        offsetTop: 50,
        callback: function () {
            console.log('Callback fired!');
        }
    });

    $('#scroll-down').scrollClass({
        delay: 10,
        threshold: 20,
        offsetTop: 50,
        callback: function () {
            console.log('Callback fired!');
        }
    });

    //Modal 

    var popup = document.getElementById('popup');

    // Find the name of the html page for the close button link   
    var url = window.location.href;
    var filename = url.substring(url.lastIndexOf('/') + 1, url.length);


    $("#book-now").click(function (event) {
        event.preventDefault();

        // Check if the modal has been added to the page
        if (popup === null) {

            // Add the content to the modal to html page
            var content =
                '<div id="popup">\
                <section class="modal">\
                    <figure>\
                        <div class="img-wrapper">\
                            <img src="./images/adult-balcony-beverage-1230665-2.jpg" alt="girl-take-a-break">\
                        </div>\
                    </figure>\
                    \
                    <section id="book">\
                        <form>\
                            <div id="booking-form">\
                            <div class="form-item">\
                                <label for="form-arrival-date">Arrival Date</label><br>\
                                <input type="date" id="form-arrival-date">\
                            </div>\
                    \
                            <div class="form-item">\
                                    <label for="form-depature-date">Depature Date</label><br>\
                                    <input type="date" id="form-depature-date">\
                                </div>\
                    \
                            <div class="form-item">\
                                <label for="form-number-of-guest">Guest</label><br>\
                                <input type="number" id="form-number-of-guest" min="1" max="4">\
                            </div>\
                    \
                            <div class="form-item">\
                                    <label for="form-room_type">Room Type</label><br>\
                                    <select name="form-room_type" id="form-room_type">\
                                        <option></option>\
                                        <option>Underwater Room</option>\
                                        <option>Wetland Room</option>\
                                        <option>Cave Room</option>\
                                        <option>Grassland Room</option>\
                                    </select>\
                            </div>\
                    \
                            <div class="form-item">\
                                <input type="button" id="form-availability" value="Book" onclick="window.alert(\'Your room has been booked.\')">\
                            </div>\
                            </div>\
                        </form>\
                        \
                    </section>\
                    \
                    <nav class="close-button">\
                            <a href="' + filename + '">Close</a>\
                    </nav>\
                </section>\
            </div>';

            $("main").append(content);
        };

    });



    $("#activity-planner").click(function displayPlanner(event) {
        event.preventDefault();
        //Get the booked activity details in local storage and update them in the activity planner
        var activity_name = localStorage.getItem("activity_name");
        var activity_date = localStorage.getItem("activity_date");
        var activity_time = localStorage.getItem("activity_time");
        var activity_guests = localStorage.getItem("activity_guests") + ' Guest(s)';

        localStorage.setItem(activity_name, activity_date + ' ' + activity_time + ' ' + activity_guests);

        // Check if the modal has been added to the page
        if (popup === null) {

            // Add planner modal to html page. !! If the planner doesn't update, please go to another page or refresh the page before checking it again. !!
            var content =
                '<div id="popup">\
            <section class="modal">\
                <figure>\
                    <div class="img-wrapper">\
                        <img src="./images/adult-balcony-beverage-1230665-2.jpg" alt="girl-take-a-break">\
                    </div>\
                </figure>\
                \
                <section class="planner">\
                    <h1>Your Planned Activities</h1>\
                    <div id="planner-wrapper">\
                        \
                        <section class="planner-details">\
                            <p class="planner-details-name">Safari Tour</p>\
                            <p>' + localStorage.getItem("Safari Tour") + '</p>\
                            <p class="planner-details-name">Animal Encounter</p>\
                            <p>' + localStorage.getItem("Animal Encounter") + '</p>\
                            <p class="planner-details-name">Zookeeper Experience</p>\
                            <p>' + localStorage.getItem("Zookeeper Experience") + '</p>\
                            <p class="planner-details-name">Wildlife Hospital Tour</p>\
                            <p>' + localStorage.getItem("Wildlife Hospital Tour") + '</p>\
                        </section>\
                        \
                        <input id="confirm-booking-button" value="Book" type="button" onclick="window.alert(\'Your planned activities have been booked.\')">\
                        <input id="clear-booking-button" value="Delete All" type="button" onclick="localStorage.clear();location.reload();">\
                        \
                    </div>\
                    \
                </section>\
                \
                <nav class="close-button">\
                        <a href="' + filename + '">Close</a>\
                </nav>\
            </section>\
        </div>';

            $("main").append(content);
        };

    });



    $("#contact-us").click(function (event) {
        event.preventDefault();

        // Check if the modal has been added to the page
        if (popup === null) {

            // Add the content to the modal to html page
            var content =
                '<div id="popup">\
                <section class="modal">\
                    <figure>\
                        <div class="img-wrapper">\
                            <img src="./images/adult-balcony-beverage-1230665-2.jpg" alt="girl-take-a-break">\
                        </div>\
                    </figure>\
                    \
                    <section class="contact">\
                        <h1>Contact</h1>\
                        <div id="contact-wrapper">\
                            \
                            <section class="contact-details">\
                                <p>Av. Ludovico da Riva Neto, 2364 - Centro, Alta Floresta, Brazil</p>\
                                <p>+55 66 3521-7342</p>\
                                <p>info@zoosort.com</p>\
                                <div id="social-media-wrapper">\
                                    <a href="#"><img src="./images/facebook-icon.png" alt="Facebook"></a>\
                                    <a href="#"><img src="./images/ins-icon.png" alt="Instagram"></a>\
                                    <a href="#"><img src="./images/snapchat-icon.png" alt="Snapchat"></a>\
                                </div>\
                            </section>\
                            \
                            <div id="map">\
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4049348.574142338!2d-55.8579652308951!3d-7.632858401333177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x924fcad295c76693%3A0xe90e597a16c9af3e!2sJuruena%20National%20Park!5e0!3m2!1sen!2sau!4v1572325153280!5m2!1sen!2sau" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>\
                            </div>\
                        </div>\
                        \
                    </section>\
                    \
                    <nav class="close-button">\
                        <a href="' + filename + '">Close</a>\
                    </nav>\
                    </section>\
                </div>';

            $("main").append(content);
        };

    });

    $("#reference").click(function (event) {
        event.preventDefault();

        // Check if the modal has been added to the page
        if (popup === null) {

            // Add the content to the modal to html page
            var content =
                '<div id="popup">\
                <section class="modal">\
                    <figure>\
                        <div class="img-wrapper">\
                            <img src="./images/adult-balcony-beverage-1230665-2.jpg" alt="girl-take-a-break">\
                        </div>\
                    </figure>\
                    \
                    <section class="reference">\
                        <h1>Reference</h1>\
                        <div id="reference-wrapper">\
                            \
                            <section class="reference-details">\
                                <p>[1]  Cycle2. [Online]. Available: http://jquery.malsup.com/cycle2/</p>\
                                <p>[2]	scrollClass. [Online]. Available: https://github.com/virgiliud/scrollClass.js?files=1</p>\
                                <p>[3]	jQuery. [Online]. Available: https://jquery.com/download/</p>\
                                <p>[4]	monkik, Flaticon. [Icon]. Available: https://www.flaticon.com/authors/monkik.</p>\
                                <p>[5]	G. Ware. [Icon]. Available: https://www.flaticon.com/authors/good-ware.</p>\
                                <p>[6]	F. Videos, Pexels. [Video]. Available: https://www.pexels.com/video/stingray-underwater-1246254/.</p>\
                                <p>[7]	Coverr, Pexels. [Video]. Available: https://www.pexels.com/video/lions-at-the-wild-853900/.</p>\
                                <p>[8]	A. Marques, Pexels. [Video]. Available: https://www.pexels.com/video/bird-feeding-on-grass-2087654/.</p>\
                                <p>[9]	F. Ungaro, Pexels. [Video]. Available: https://www.pexels.com/video/a-giraffe-feeding-on-leaves-2178545/.</p>\
                                <p>[10]	Explore. [Stream Video]. Available: https://explore.org/livecams/african-wildlife/african-animal-lookout-camera.</p>\
                            </section>\
                            \
                        </div>\
                        \
                    </section>\
                    \
                    <nav class="close-button">\
                        <a href="' + filename + '">Close</a>\
                    </nav>\
                    </section>\
                </div>';

            $("main").append(content);
        };

    });



















});