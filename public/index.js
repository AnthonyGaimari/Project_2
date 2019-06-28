

$(document).ready(function () {
    $('.carousel').carousel()
    allDogs();
});

// $('.button').on('click', function () {
//     $('.navbar-nav').show();
// });


function allDogs() {
    $(".login-button").on("click", function (event) {
        event.preventDefault()
        console.log("hello");
        $('.navlist').show();
        // $.ajax({
        //     type: "POST",
        //     url: url,
        //     data: data,
        //     success: success,
        //     data:dataType 
        // });
    });

};

// function showNav() {
//     $('.navlist').show();
// };



