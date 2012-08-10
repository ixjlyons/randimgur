var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var string_length = 5;
var hash = '';
var imgWidth;
var windowWidth;
var urls = [];

function generateHash() {
    hash = '';
    for (var i = 0; i < string_length; i++) {
    	var rnum = Math.floor(Math.random() * chars.length);
    	hash += chars.substring(rnum, rnum+1);
    }
}

function loadImage() {
    generateHash();
    imgurl = "http://i.imgur.com/" + hash + ".jpg";
    request_string = "http://api.imgur.com/2/image/" + hash + ".json";

    var image = new Image();
    image.src = imgurl;
    image.onload = function() {
        imgWidth = image.width;
        windowWidth = window.innerWidth;
        
        if (imgWidth == 161){
            loadImage();
        }
        else { 
            var imageElement = document.getElementById("picture");

            document.getElementById("stat").innerHTML = "<p>Now viewing: <b> " + hash + "</b></p>";

            if (imgWidth > 0.75*windowWidth) {
                imgWidth = 0.75*windowWidth;
            }
            imageElement.width = imgWidth;
            imageElement.src = imgurl;

            for (var i = 4; i > 0; i--) {
                urls[i] = urls[i-1];
            }
            urls[0] = imgurl;
        }
    }
}

loadImage();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("header").addEventListener('click', function() {
        document.getElementById("stat").innerHTML = "<p>Loading...</p>";
        loadImage();
    });

    document.addEventListener('keypress', function(evt) {
        if (evt.charCode == 110) { // 'n' 
            document.getElementById("stat").innerHTML = "<p>Loading...</p>";
            loadImage();
        }
    });
});
