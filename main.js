let audio = new Audio('Select.mp3');
let musicButton = document.getElementsByClassName('nes-btn');
let shortButton = document.getElementsByClassName('short');
let longButton = document.getElementsByClassName('long');
let musicOffButton = document.getElementsByClassName('off-btn');
let count = 0;
document.getElementById('longParagraph').style.display = "none";


getMusic(musicButton)
setRemoveShortParagraph(shortButton);
setRemoveLongParagraph(longButton);
getMuteMusic();

window.setInterval(function(){
    getRandomText()
}, 2500);

function setRemoveShortParagraph(shortButton){
    Array.from(shortButton).forEach(function(shortButton){
        shortButton.addEventListener('click', function(e){
            document.getElementById("shortParagraph").style.display = "none";
            document.getElementById("longParagraph").style.display = "block";
        })
    })
}

function setRemoveLongParagraph(longButton){
    Array.from(longButton).forEach(function(longButton){
        longButton.addEventListener('click', function(e){
            document.getElementById("longParagraph").style.display = "none";
            document.getElementById("shortParagraph").style.display = "block";
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
                musicOffButton.innerHTML = "Sound On"
                Array.from(musicButton).forEach(function(musicButton){
                    musicButton.addEventListener('click', function(e){
                    audio.play()
                });
              }); 
                
            } else {
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
