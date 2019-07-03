$(document).ready(function () {

    // initRoutes();
    // $('.carousel').carousel()
    // allDogs();
    // $('.nav-all-dogs').onClick(function())
    router('login')

    $('#view-dogs').click(function(e){
        console.log('ohi')
        e.stopImmediatePropagation()
        e.preventDefault();
        router("allDogs")
    })



    $('#favorites').click(function(e){
        e.stopImmediatePropagation()
        e.preventDefault();
        router("showFavorites")
    })
    
});



function router(id){
    if(id === 'login' ) {
        console.log('here')
        showLogin()
    } 
    else if (id === 'allDogs') {
        // showAllDogs()
        console.log('alldogs')
        $('.view-container').addClass('hidden');
        $('#allDogs-state-container').removeClass('hidden')

        $("#allDogs-state-container").clear().prepend("<div class='card-deck'></div>");
        $.ajax({ url: "http://localhost:9000/api/dogs/", method: "GET" })
            .then(function (response) {
                console.log("running");
                console.log(response);
                for (var i =0; i <response.length; i++){
                    console.log(response[i].dog_id)
                    console.log(response[i].dog_name)
                    $(".card-deck").append("<div class='card'> <img src="+response[i].dog_img_url +" class='card-img-top' class='rounded-circle'> <div class='card-body'> <h5 class='card-title'>"+response[i].dog_name+"</h5> <p class='card-text'>"+response[i].dog_blurb+"</p> </div> </div>");
                }
        });
        
        
        // allDogsView()
    } 
    else if (id === 'showFavorites') {
        $('.view-container').addClass('hidden');
        $('#favorites-state-container').removeClass('hidden')
        // showFavorites();
    }
}

function showLogin() {
    console.log('show login now')
$('#login-state-container').removeClass("hidden");


}

function allDogs() {
    $('#content').empty();
$('#allDogs').css('display', 'block')


    $(".login-button").on("click", function (event) {
        event.preventDefault()
        console.log("hello!!!");

        // var loginAttempt= {
        //     username: $("#username").val(),
        //     password: $("#password").val()
        // }


        $("#big-container").empty().prepend("<div class='card-deck'></div>");
        $.ajax({ url: "http://localhost:9000/api/dogs/", method: "GET" })
            .then(function (response) {
                console.log("running");
                console.log(response);
                for (var i =0; i <response.length; i++){
                    console.log(response[i].dog_id)
                    console.log(response[i].dog_name)
                    $(".card-deck").append("<div class='card'> <img src="+response[i].dog_img_url +" class='card-img-top' class='rounded-circle'> <div class='card-body'> <h5 class='card-title'>"+response[i].dog_name+"</h5> <p class='card-text'>"+response[i].dog_blurb+"</p> </div> </div>");
                }


            });


    });

};





