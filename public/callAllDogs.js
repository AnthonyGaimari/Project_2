var exports = module.exports; 


function callAllDogs() {
    event.preventDefault()
    $("div").empty();
    $('.navlist').show();
    var dogArray = ["Spot"];
    $.each(dogArray, function (index, value){
        console.log(value);
        $("#result").append(index + ": " + value + '<br>');
    });
};

module.exports = callAllDogs;