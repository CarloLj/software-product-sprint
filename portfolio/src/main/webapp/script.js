// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
 function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function addRandomGreeting() {
  const greetings =
      ['Bienvenido a mi portafolio', 'Welcome to my portfolio', 'Bienvenue dans mon portfolio'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

$(window).scroll(function () {
    var text = $(".text");
    var scroll = $(window).scrollTop();
    $('.img-container').css({
        filter: "blur(" + (scroll/35) + "px)"
    })
    if (scroll >= 60) {
        text.removeClass("hidden");
    } else {
        text.addClass("hidden");
    }
})

$(window).resize(function() {
  var scroll = $(window).width();
  if (scroll < 600) {
     $('.nav-wrapper > .left-side > div').css("font-size", 0.6+"em")
  }
 else {
    $('.nav-wrapper > .left-side > div').css("font-size", 0.9+"em")
 }
});

if(isMobile.any() || isMobile.iOS()) {
    var x = document.cookie
    if(x===""){
        var d = new Date();
        d.setTime(d.getTime() + (60*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = "showedmessage=True;" + expires + ";path=/";
        alert("Check out the desktop version for a better experience! (This is showing because you're on mobile)");
    }
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    });
    const portfolioSubtitles = document.querySelectorAll('.img-text-wrapper .subtitle')
    portfolioSubtitles.forEach(portfolioSubtitle => {
        portfolioSubtitle.classList.remove('subtitle')
        portfolioSubtitle.classList.add('subtitle-darken')
    });
}else{
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add('img-darken');
        });
        portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove('img-darken');
        });
    });
}