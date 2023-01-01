//1. search
const serachEl = document.querySelector(".search");
    // const searchInputEl = document.querySelector(".search input");
const searchInputEl = serachEl.querySelector("input");

serachEl.addEventListener("click", function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function() {
  serachEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function() {
  serachEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//2. badge, fastmove
const badgeEl = document.querySelector("header .badges");
const toTop = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function() {
  console.log("window.scrollY");
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:"none",
    });

    //gsap scroll - 버튼보이기
    gsap.to("#to-top", .2, {
      x: 0,
    });


  } else{
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:"block",
    });

    //gsap scroll - 버튼보이기
    gsap.to(toTop, .2, {
      x: 100,
    });

  }
}, 300));


toTop.addEventListener("click", function() {
  gsap.to(window, .7, {
    scrollTo: 0 //scroll 위치를 0px 지점으로 이동시키겠다.
  });
});


//3. fadeIn
const fadeEls= document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,
    opacity:1,
  });
});

//4. swiper1
new Swiper(".notice-line .swiper", {
  direction:'vertical',
  autoplay:true,
  loop:true
});

//swiper2
new Swiper(".promotion .swiper", {
  slidesPerView:3,
  spaceBEtween:10,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay : 5000
  },

  pagination:{
    el:".promotion .swiper-pagination",
    clickable:true,
  },
  navigation:{
    prevEl:".promotion .swiper-prev",
    nextEl :".promotion .swiper-next"
  }
});

//swiper3
new Swiper(".awards .swiper", {
  autoplay:true,
  loop:true,
  spaceBEtween:30,
  slidesPerView:5,
  navigation: {
    prevEl:".awards .swiper-prev",
    nextEl:".awards .swiper-next"
  }
});

//5. toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function() {
  isHidePromotion = !isHidePromotion;

  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add("hide");
  } else{
    // 보임처리
    promotionEl.classList.remove("hide");
  }
});

//7. floating

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap의 to메소드는 첫번째로 선택자를 받을 것이고,
  // 두번째로 랜덤함수를 통해서 애니메이션의 동작시간을 실행할 것이고,
  // 세번째로 옵션을 지정할거다.
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo:true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//8. scrollevent
const spyEls=document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement:spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트 기준 0.8의 위치를 의미
    })
    // 토글할 클래스 요소, 토글 할 클래스 이름
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

//Date
const thisYear =  document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); 