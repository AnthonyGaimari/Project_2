$(document).ready(function () {

    // initRoutes();
    // $('.carousel').carousel()
    // allDogs();
    // $('.nav-all-dogs').onClick(function())

    //On load the app is in a login state
    router('login')


    //On-click functions for the nav bar that change the "page state"

    $('#view-dogs').click(function (e) {
        console.log('viewing dogs')
        e.stopImmediatePropagation()
        e.preventDefault();
        router("allDogs")
    })



    $('#favorites').click(function (e) {
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
        showAllDogs();

    }
    else if (id === 'showFavorites') {
        $('.view-container').addClass('hidden');
        $('#favorites-state-container').removeClass('hidden')
        // showFavorites();
    }

    else if (id === 'submit_dog') {
        $('.view-container').addClass('hidden');
        $('#submit-dog-state-container').removeClass('hidden')
    }
}


// ======================================================================================================

function showLogin() {
    console.log('show login now')
    $('#login-state-container').removeClass("hidden");


}

function showAllDogs() {
    // $('#content').empty();
    $('#allDogs').css('display', 'block')

    $("#allDogs-state-container").empty().prepend("<div class='card-deck'></div>");
    $.ajax({ url: "http://localhost:9000/api/dogs/", method: "GET" })
        .then(function (response) {
            console.log("running");
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].dog_id)
                console.log(response[i].dog_name)
                $(".card-deck").append("<div class='card'> <img src=" + response[i].dog_img_url + " class='card-img-top'> <div class='card-body'> <h5 class='card-title'>" + response[i].dog_name + "</h5> <p class='card-text'>" + response[i].dog_blurb + "</p> </div> </div>");
            }

        });

};

function submitDog(newDog) {
    console.log("FROM SUBMIT DOG FUNCTION: ")
    console.log(newDog)
    $.ajax({ url: "http://localhost:9000/api/dogs/", data: newDog, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);


        });

}


function signUp(newUser) {
    console.log("FROM SUBMIT USER FUNCTION: ")
    console.log(newUser)
    $.ajax({ url: "http://localhost:9000/api/users/", data: newUser, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);


        });
}

function userLogin(loginAttempt) {
    console.log("FROM USERLOGIN FUNCTION: ")
    console.log(loginAttempt)
    $.ajax({ url: "http://localhost:9000/api/user/login", data: loginAttempt, method: "POST" })
        .then(function (response) {
            console.log("running");
            console.log(response);

            if (response.message === "All good") {
                router('allDogs')
            } else{
                console.log("wrong credentials")

            }

        });
}




