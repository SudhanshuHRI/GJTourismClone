$(document).ready(function () {
  $('.carousel').carousel();
});

let slde = document.getElementsByClassName("slde_background");
console.log(slde)







// carousel

$(document).ready(function () {
  $('.carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    pagination: false,
    autoplay: true,

    padding: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
})

// carousel

// parallax start
const parallax = document.getElementById("parallax");


window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";

});

// parallax end

// swapper carousel


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});



// swapper carousel end



// 3d carousel testing


(function ($) {
  $.fn.cascadeSlider = function (opt) {
    var $this = this,
      itemClass = opt.itemClass || 'cascade-slider_item',
      arrowClass = opt.arrowClass || 'cascade-slider_arrow',
      $item = $this.find('.' + itemClass),
      $arrow = $this.find('.' + arrowClass),
      itemCount = $item.length;

    var defaultIndex = 0;

    changeIndex(defaultIndex);

    $arrow.on('click', function () {
      var action = $(this).data('action'),
        nowIndex = $item.index($this.find('.now'));

      if (action == 'next') {
        if (nowIndex == itemCount - 1) {
          changeIndex(0);
        } else {
          changeIndex(nowIndex + 1);
        }
      } else if (action == 'prev') {
        if (nowIndex == 0) {
          changeIndex(itemCount - 1);
        } else {
          changeIndex(nowIndex - 1);
        }
      }

      $('.cascade-slider_dot').removeClass('cur');
     
    });

  
    for (var i = 0; i < itemCount; i++) {
      $('.cascade-slider_item').each(function (i) {
        $(this).attr('data-slide-number', [i]);
      });
    }

    // dots
    $('.cascade-slider_dot').bind('click', function () {
      // add class to current dot on click
      $('.cascade-slider_dot').removeClass('cur');
      $(this).addClass('cur');

      var index = $(this).index();

      $('.cascade-slider_item').removeClass('now prev next');
      var slide = $('.cascade-slider_slides').find('[data-slide-number=' + index + ']');
      slide.prev().addClass('prev');
      slide.addClass('now');
      slide.next().addClass('next');

      if (slide.next().length == 0) {
        $('.cascade-slider_item:first-child').addClass('next');
      }

      if (slide.prev().length == 0) {
        $('.cascade-slider_item:last-child').addClass('prev');
      }
    });

    function changeIndex(nowIndex) {
    
      $this.find('.now').removeClass('now');
      $this.find('.next').removeClass('next');
      $this.find('.prev').removeClass('prev');
      if (nowIndex == itemCount - 1) {
        $item.eq(0).addClass('next');
      }
      if (nowIndex == 0) {
        $item.eq(itemCount - 1).addClass('prev');
      }

      $item.each(function (index) {
        if (index == nowIndex) {
          $item.eq(index).addClass('now');
        }
        if (index == nowIndex + 1) {
          $item.eq(index).addClass('next');
        }
        if (index == nowIndex - 1) {
          $item.eq(index).addClass('prev');
        }
      });
    }
  };
})(jQuery);

$('#cascade-slider').cascadeSlider({
  itemClass: 'cascade-slider_item',
  arrowClass: 'cascade-slider_arrow'
});


const popup = document.getElementById('popup-content');
window.addEventListener('load', () => {
  popup.setAttribute("style", "display:block !important;")
})

const cross = document.getElementById('cross');
console.log(cross)
cross.addEventListener("click", () => {
  popup.setAttribute("style", "display:none !important;")

})

let caur = ["resources/caru1.jpg", "resources/caru6.jpg", "resources/caru3.png", "resources/caru5.jpg"]

let count = 0;
let background = document.getElementById("blur");
background.style.backgroundImage = `url(${caur[count]})`;

function bkg(num) {
  count = count + (num);

  if (count == 4) {
    count = 0;
  }
  if (count == -1) {
    count = 3;
  }
  let background = document.getElementById("blur");
  background.style.backgroundImage = `url(${caur[count]})`;

  console.log(count)







}
