
(function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/carousal/Yala_7.jpg", 
      "images/carousal/Yala_11.jpg",
      "images/carousal/Yala_8.jpg",
      "images/carousal/Yala_2.jpg",
      "images/carousal/Yala_13.jpg",
      "images/carousal/Yala_1.jpg",
      "images/carousal/Yala_4.jpg",
      "images/carousal/Yala_3.jpg",
      "images/carousal/Yala_5.jpg",
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);

/* Exclutions expand paragraphs */
  document.addEventListener("DOMContentLoaded", function () {
    var gratuitiesItem = document.getElementById("gratuities-item");
    var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

    gratuitiesItem.addEventListener("click", function () {
        // Toggle the visibility of the paragraph
        hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
      });
});

document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("park-entry-fees-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Meals-and-Refreshments-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Safari-Extensions-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});

/* Inclutions expand paragraphs */
document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Expert-Safari-Guide-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Private-Safari-Trucks-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Complimentary-Pick-Up-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var gratuitiesItem = document.getElementById("Customizable-Duration-item");
  var hiddenParagraph = gratuitiesItem.querySelector(".hidden-paragraph");

  gratuitiesItem.addEventListener("click", function () {
      // Toggle the visibility of the paragraph
      hiddenParagraph.style.display = (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") ? "block" : "none";
  });
});





