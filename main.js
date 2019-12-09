let audio = new Audio('Select.mp3');
let musicButton = document.getElementsByClassName('nes-btn');
let shortButton = document.getElementsByClassName('short');
let longButton = document.getElementsByClassName('long');
let portfolioButton = document.getElementsByClassName('portfolio');
let musicOffButton = document.getElementsByClassName('off-btn');
let count = 0;
document.getElementById('longParagraph').style.display = "none";
document.getElementById("portfolio-project").style.display = "none";


getMusic(musicButton);
setRemoveShortParagraph(shortButton);
setRemoveLongParagraph(longButton);
setRemovePortfolio(portfolioButton);
getMuteMusic();
IEdetection();

window.setInterval(function(){
    getRandomText()
}, 2500);

function setRemoveShortParagraph(shortButton){
    Array.from(shortButton).forEach(function(shortButton){
        shortButton.addEventListener('click', function(e){
            document.getElementById("shortParagraph").style.display = "none";
            document.getElementById("portfolio-project").style.display = "none";
            document.getElementById("longParagraph").style.display = "block";
            document.getElementsByClassName('nes-container')[0].style = "block";
            document.getElementsByClassName('is-centered')[0].style.display = "block"; 
        })
    })
}

function setRemoveLongParagraph(longButton){
    Array.from(longButton).forEach(function(longButton){
        longButton.addEventListener('click', function(e){
            document.getElementById("longParagraph").style.display = "none";
            document.getElementById("portfolio-project").style.display = "none";
            document.getElementById("shortParagraph").style.display = "block";
            document.getElementsByClassName('nes-container')[0].style = "block";
            document.getElementsByClassName('is-centered')[0].style.display = "block";
        })
    })
}

function setRemovePortfolio(portfolioButton){
    Array.from(portfolioButton).forEach(function(portfolioButton){
        portfolioButton.addEventListener('click', function(e){
            document.getElementById("longParagraph").style.display = "none";
            document.getElementById("shortParagraph").style.display = "none";
            document.getElementsByClassName('remove-article')[0].style = "none";
            document.getElementsByClassName('nes-container')[0].style = "none";
            document.getElementsByClassName('with-title')[0].style = "none";
            document.getElementsByClassName('is-centered')[0].style.display = "none";
            document.getElementById("portfolio-project").style.display = "block";
        })
    })
}


function getMusic(musicButton){
    Array.from(musicButton).forEach(function(musicButton){
        musicButton.addEventListener('click', function(e){
        audio.play()
    });
  });  
};

function getRandomText(){
    let text = [
        "Systems Administrator in Los Angeles",
        "Software Developer in Los Angeles",
        "Web Developer in Los Angeles",
        "I provide software solutions to problems"
    ];
    let elem = document.getElementById("changeText");
    let random = Math.floor(Math.random() * text.length)
    return elem.innerHTML = text[random];
}

function getMuteMusic(){
    Array.from(musicOffButton).forEach(function(musicOffButton){
        musicOffButton.addEventListener('click', function(e){
            count++
            if (count % 2 ==0){
                console.log(count % 2)
                console.log("Music On");
                musicOffButton.innerHTML = "Sound On"
                Array.from(musicButton).forEach(function(musicButton){
                    musicButton.addEventListener('click', function(e){
                    audio.play()
                });
              }); 
                
            } else {
                console.log(count % 2)
                console.log("Music Off");
                musicOffButton.innerHTML = "Sound Off"
                Array.from(musicButton).forEach(function(musicButton){
                    musicButton.addEventListener('click', function(e){
                    audio.pause()
                });
              }); 
                
            }
        });
    });
};

function IEdetection() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older, return version number
        alert('You are using '+'Internet Explorer ' + parseInt(ua.substring(
          msie + 5, ua.indexOf('.', msie)), 10)+". Please use Google Chrome or FireFox for best functionality.");
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11, return version number
        var rv = ua.indexOf('rv:');
        alert('You are using '+'Internet Explorer ' + parseInt(ua.substring(
          rv + 3, ua.indexOf('.', rv)), 10)+". Please use Google Chrome or FireFox for best functionality.");
    }
}
