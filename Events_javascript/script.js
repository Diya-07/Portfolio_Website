window.addEventListener("load", function () {

    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let random = document.getElementById("random");

    click1();
    click2();
    click3();
    image1.addEventListener("click", click1);
    image1.addEventListener("click", do_animation(image1));
    image2.addEventListener("click", click2);
    image2.addEventListener("click", do_animation(image2));
    image3.addEventListener("click", click3);
    image3.addEventListener("click", do_animation(image3));
    random.addEventListener("click", random3);

});
let no_of_clicks = 0;
function click1() {
    var random1 = Math.floor(Math.random() * 3) + 1;
    var randomImage1 = "images/heart" + random1 + ".png"
    var image1 = document.getElementById("image1");
    image1.src = randomImage1;
    no_of_clicks++;
    document.getElementById("clicks").innerHTML = `Image has updated ${no_of_clicks} times`;
    
    
} 
function click2() {
    var random2 = Math.floor(Math.random() * 3) + 1;
    var randomImage2 = "images/snowman" + random2 + ".png"
    var image2 = document.getElementById("image2");
    image2.src = randomImage2;
    no_of_clicks++;
    document.getElementById("clicks").innerHTML = `Image has updated ${no_of_clicks} times`;
}
function click3() {
    var random3 = Math.floor(Math.random() * 3) + 1;
    var randomImage3 = "images/rabbit" + random3 + ".gif"
    var image3 = document.getElementById("image3");
    image3.src = randomImage3;
    no_of_clicks++;
    document.getElementById("clicks").innerHTML = `Image has updated ${no_of_clicks} times`;
}
function random3()
{
    click1();
    click2();
    click3();
}
var seconds = 9;
var milliseconds = Math.floor(seconds/1000);
setInterval(timer, 1000);
function clock() {
    timeout = document.getElementById("counter").value;
    if (typeof timeout == "number") {
        if (timeout > 500 && timeout < 10000) {
            setInterval(timer, timeout);
        }
    }
}

function timer() {
    if (seconds == 9) {
        document.getElementById("timeclock").style.backgroundColor = "green";
        }
    else if (seconds == 6) {
        document.getElementById("timeclock").style.backgroundColor = "yellow";
        document.getElementById("timeclock").style.color = "black";
    }
    else if (seconds == 2) {
            document.getElementById("timeclock").style.backgroundColor = "red";
    }
    document.getElementById("timeclock").innerHTML = seconds + ":" + milliseconds;
    milliseconds--;
    if (milliseconds < 0) {
        seconds--;
        milliseconds = 9;
        if (seconds < 0) {
            seconds = 9;
            milliseconds = 9;
            random3();
            }
            
            
        }
    
}


function do_animation(event) {
    event.classList.add("spin");
    setTimeout(function(){ target.classList.remove("spin"); }, 500);

}
