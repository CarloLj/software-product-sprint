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
function addRandomGreeting() {
  const greetings =
      ['Bienvenido a mi portafolio', 'Welcome to my portfolio', 'Bienvenue dans mon portfolio'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover', () => {
            portfolioItem.childNodes[1].classList.add('img-darken');
        });
        portfolioItem.addEventListener('mouseout', () => {
            portfolioItem.childNodes[1].classList.remove('img-darken');
        });
    });

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.img-container').css({
        filter: "blur(" + (scroll/35) + "px)"
    })
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

