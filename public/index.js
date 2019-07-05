var loggedInUser;

$(document).ready(function () {

    // initRoutes();
    // $('.carousel').carousel()
    // allDogs();
    // $('.nav-all-dogs').onClick(function())

    //On load the app is in a login state
    router('login')


    //========ON CLICK FUNCTIONS FOR NAVBAR===============================

    $('#view_dogs').click(function (e) {
        console.log('viewing dogs')
        e.stopImmediatePropagation()
        e.preventDefault();
        router("allDogs")
    })



    $('#view_favorites').click(function (e) {
        e.stopImmediatePropagation()
        e.preventDefault();
        router("showFavorites")
    })

    $('#dog_form').click(function (e) {
        e.stopImmediatePropagation()
        e.preventDefault();
        router("submit_dog")
    })

    $('#insert_dog').click(function (e) {
        e.stopImmediatePropagation()
        e.preventDefault();
        router("submit_dog")
    })

    $('#logout').click(function (e) {
        e.stopImmediatePropagation()
        e.preventDefault();
        loggedInUser = undefined
        console.log(loggedInUser)
        router("login")

    })

//==========ON CLICK FOR ALL FORM BUTTONS================================

    $('#submit_dog').on('click', function (event) {
        event.stopImmediatePropagation()
        event.preventDefault()
        console.log('submit dog');

        var newDog = {
            dog_name: $('#dog_name').val(),
            dog_breed: $('#dog_breed').val(),
            dog_age: $('#dog_age').val(),
            dog_img_url: $('#dog_img_url').val(),
            dog_blurb: $('#dog_blurb').val()
        }
        console.log(newDog)
        submitDog(newDog);
    });

    $('#signup_button').on('click', function (event) {
        event.stopImmediatePropagation()
        event.preventDefault()
        console.log('Sign UP');

        var newUser = {
            user_email: $('#new_user_email').val(),
            username: $('#new_username').val(),
            password: $('#new_user_password').val(),
        }
        console.log(newUser)
        signUp(newUser);
    });

    $('#login_button').on('click', function (event) {
        event.stopImmediatePropagation()
        event.preventDefault()
        console.log('Sign In');

        var loginAttempt = {
            username: $('#login_username').val(),
            password: $('#login_password').val(),
        }
        console.log(loginAttempt)
        userLogin(loginAttempt);
    });
});



//============='Page State' Controls============================================
//adding and removing .hidden controls what html is visible on the dom


function router(id) {
    if (id === 'login') {
        // console.log('here')
        showLogin()
    }
    else if (id === 'allDogs') {
        console.log('alldogs')
        $('.view-container').addClass('hidden');
        $('#allDogs-state-container').removeClass('hidden')
        console.log(loggedInUser+" LOGGED IN")
        showAllDogs();

    }
    else if (id === 'showFavorites') {
        $('.view-container').addClass('hidden');
        $('#favorites-state-container').removeClass('hidden')
        var currUser_id = 3;
        showFavorties(loggedInUser)
        }

    else if (id === 'submit_dog') {
        $('.view-container').addClass('hidden');
        $('#submit-dog-state-container').removeClass('hidden')
    }
}


// ==========FUNCTION FOR DEFAULT "PAGE STATE"=======================================

function showLogin() {
    console.log('show login now')
    $('#login-state-container').removeClass("hidden");

}

//=========AJAX CALLS==============================================================


function showAllDogs() {
    // $('#content').empty();
    $('#allDogs').css('display', 'block')

    $("#allDogs-state-container").empty().prepend("<div class='row'></div>");
    $.ajax({ url: "/api/dogs/", method: "GET" })
        .then(function (response) {
            console.log("running");
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].dog_id) 
                console.log(response[i].dog_name)
                $(".row").append("<div class='col-auto mb-3 mr-3'><div class='card' style='background-color:#28a745; width: 25rem;'> <img src=" + response[i].dog_img_url + " class='card-img-top'> <div class='card-body'> <h5 class='card-title'>" + response[i].dog_name + "</h5> <p class='card-text'>" + response[i].dog_blurb + "</p> </div> </div> </div>");
            }

        });

};

function submitDog(newDog) {
    console.log("FROM SUBMIT DOG FUNCTION: ")
    console.log(newDog)
    $.ajax({ url: "/api/dogs/", data: newDog, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);


        });

}


function signUp(newUser) {
    console.log("FROM SUBMIT USER FUNCTION: ")
    console.log(newUser)
    $.ajax({ url: "/api/users/", data: newUser, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);


        });
}

function userLogin(loginAttempt) {
    console.log("FROM USERLOGIN FUNCTION: ")
    console.log(loginAttempt)
    $.ajax({ url: "/api/user/login", data: loginAttempt, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);
            if (response.message === "All good") {
                console.log(response.currUser)
                loggedInUser = response.currUser
                router('allDogs')
            } else{
                console.log("wrong credentials")

            }

        });

        // return loggedInUser;
}


function showFavorties(loggedInUser){
    console.log("FROM SHOW FAVORITES FUNCTION: ")
    console.log(loggedInUser)
    $.ajax({ url: "/api/user/favorites/" + loggedInUser,  method: "GET" })
        .then(function (response) {
            console.log("running");
            console.log(response);
            $("#favorites-state-container").empty().prepend("<div class='card-deck'></div>");
            for (var i = 0; i < response.length; i++) {
                // console.log(response[i].dog_id)
                // console.log(response[i].dog_name)
                $(".card-deck").append("<div class='card'> <img src=" + response[i].dog_img_url + " class='card-img-top'> <div class='card-body'> <h5 class='card-title'>" + response[i].dog_name + "</h5> <p class='card-text'>" + response[i].dog_blurb + "</p> </div> </div>");
            }
            // if (response.message === "All good") {
            //     router('allDogs')
            // } else{
            //     console.log("wrong credentials")

            // }

        });}




