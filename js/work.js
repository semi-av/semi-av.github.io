const doWork = function () {


const p01Tag = document.getElementById("p01")
const p02Tag = document.getElementById("p02")
const p03Tag = document.getElementById("p03")
const p04Tag = document.getElementById("p04")
const xTag = document.getElementById("divX")
const xTagOne = document.getElementById("xOne")
const workTag = document.getElementById("work-name")
const container = document.querySelector("div.container")
const sections = document.querySelectorAll("section.work-page")
const clientTag = document.querySelector("h2.about")
const footerTag = document.querySelector("div.footer-work")
const descriptionTag = document.querySelector("div.description")
const toggleTag = document.querySelector("h2.contact")
const sectionTag = document.querySelector("section.info-page")
const tagsTag = document.querySelector("h2.tags")
const bioTag = document.querySelector("h2.bio")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const footerHeight = footerTag.getBoundingClientRect().height
const infoTag = document.querySelector("div.work-info")
const seeProj = document.querySelector("div.seeProj")
const seeProjA = document.getElementById("seeProjA")
const seeProjA3 = document.getElementById("seeProjA3")
const clientTag3 = document.querySelector("h2.about3")
const footerTag3 = document.querySelector("div.footer-work-mobile")
const descriptionTag3 = document.querySelector("div.description3")
const tagsTag3 = document.querySelector("h2.tags3")
const bioTag3 = document.querySelector("h2.bio3")
const workTag3 = document.getElementById("work-name3")
const xTag3 = document.getElementById("divX3")
const xTagOne3 = document.getElementById("xOne3")
let downScroll = false
let upScroll = false


const tween = TweenMax.to(seeProj, .5, {rotation: 360})

// inView('.view')
//   .on('enter', view => {
//     if(upScroll){
//       view.classList.add('in-view-up')
//     }
//     if(downScroll){
//       view.classList.add('in-view-down')
//     }
//   })
//   .on('exit', view => {
//     if(upScroll){
//       view.classList.remove('in-view-up')
//     }
//     if(downScroll){
//       view.classList.remove('in-view-down')
//     }
//   })

  inView('.proj')
    .on('enter', proj => {
      tween.restart()
    })

  inView.offset(500);

  var lastScrollTop = 0;
  document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      downScroll = true
      upScroll = false
   } else {
      upScroll = true
      downScroll = false
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// function flipSee(project, callback) {
//   project.classList.add("flip");
//   callback();
// }


  document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset

    const pageHeight = bodyTag.getBoundingClientRect().height

    const totalScrollDis = pageHeight - window.innerHeight

    const percentage = pixels / totalScrollDis

    progressTag.style.width = `${percentage * 100}%`

    sections.forEach(section => {
      if(section.offsetTop - 400 <= pixels) {
        clientTag.innerHTML = section.getAttribute("data-client")
        tagsTag.innerHTML = section.getAttribute("data-tags")
        bioTag.innerHTML = section.getAttribute("data-bio")
        clientTag3.innerHTML = section.getAttribute("data-client")
        tagsTag3.innerHTML = section.getAttribute("data-tags")
        bioTag3.innerHTML = section.getAttribute("data-bio")
        // flipSee(seeProj, function() {
        //   seeProj.classList.remove("flip" )
        // })
        // moreTag.href = "work.html#alexSectio
        seeProjA.href = section.getAttribute("data-url")
        seeProjA3.href = section.getAttribute("data-url")
        if(section.hasAttribute("data-no-project")){
          seeProj.classList.add("no-project")
        }else{
          seeProj.classList.remove("no-project")
        }


        if (section.hasAttribute("data-seen-1")) {
        p01Tag.classList.add("move")
      } else {
        p01Tag.classList.remove("move")
      }

        if (section.hasAttribute("data-seen-2")) {
        p02Tag.classList.add("move")
      } else {
        p02Tag.classList.remove("move")
      }

      if (section.hasAttribute("data-seen-3")) {
      p03Tag.classList.add("move")
    } else {
      p03Tag.classList.remove("move")
    }

    if (section.hasAttribute("data-seen-4")) {
    p04Tag.classList.add("move")
  } else {
    p04Tag.classList.remove("move")
  }

      }
    })

  })



// scrolling between projects ============================

function smoothScroll(target, duration) {
  const targetTag = document.querySelector(target);
  let targetPosition = targetTag.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if(startTime === null ) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0,run);
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

function ease(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

  requestAnimationFrame(animation)
}

p01Tag.addEventListener("click", function() {
  smoothScroll('section.fnup', 800)
})

p02Tag.addEventListener("click", function() {
  smoothScroll('section.cameron', 800)
})

p03Tag.addEventListener("click", function() {
  smoothScroll('section.truax', 800)
})

p04Tag.addEventListener("click", function() {
  smoothScroll('section.romero', 800)
})

// Info ============================================
let footerSmall = false

var tl = new TimelineLite,
    mySplitText = new SplitText("#quote", {type:"lines"}),
    lines = mySplitText.lines; //an array of all the divs that wrap each character
    tl.staggerFrom(lines, 1, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");

TweenLite.set("#quote", {perspective:400});

var tl2 = new TimelineLite,
    mySplitText2 = new SplitText("#quote2", {type:"lines"}),
    lines2 = mySplitText2.lines; //an array of all the divs that wrap each character
    tl2.staggerFrom(lines2, 1.04, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");

// TweenLite.set("#quote", {perspective:400});

var tl3 = new TimelineLite,
    mySplitText3 = new SplitText("#quote3", {type:"lines"}),
    lines3 = mySplitText3.lines; //an array of all the divs that wrap each character
    tl3.staggerFrom(lines3, 1.08, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");

  toggleTag.addEventListener("click", function () {
    sectionTag.classList.toggle("open")

    if(sectionTag.classList.contains("open")){
      footerTag.classList.add("openFoot")
    }

    if(footerTag.classList.contains("openFoot")){
      xTagOne.classList.add("clicked")

    }else{
        xTagOne.classList.remove("clicked")
    }

    if(footerTag.classList.contains("openFoot")){
      infoTag.style.paddingBottom= "40px"
      // footerSmall = true
    }else{
      infoTag.style.paddingBottom= `${footerHeight}px`
      // footerSmall = false
    }

    if (sectionTag.classList.contains("open")) {
      toggleTag.innerHTML = "Close"
      tl.restart();
      tl2.restart();
      tl3.restart();
    } else {
      toggleTag.innerHTML = "Info"
      tl.reverse();
      tl2.reverse();
      tl3.reverse();
    }

    // Mobile footer ==================

    if(sectionTag.classList.contains("open")){
      footerTag3.classList.add("openFoot")
    }

    if(footerTag3.classList.contains("openFoot")){
      xTagOne3.classList.add("clicked")

    }else{
        xTagOne3.classList.remove("clicked")
    }

    if(footerTag3.classList.contains("openFoot")){
      descriptionTag3.classList.add("view")
    }else{
      descriptionTag3.classList.remove("view")
    }


  })

// footer ----------------------------

if(footerSmall){
  infoTag.style.paddingBottom= `0px`
}else{
  infoTag.style.paddingBottom= `${footerHeight}px`
}

workTag.addEventListener("mouseover", function () {
  if(xTagOne.classList.contains("clicked")){
    xTag.classList.add("moveX")
  } else {
    xTag.classList.add("moveX180")
  }

})

workTag.addEventListener("mouseout", function () {
  xTag.classList.remove("moveX")
  xTag.classList.remove("moveX180")

})

workTag3.addEventListener("mouseover", function () {
  if(xTagOne3.classList.contains("clicked")){
    xTag3.classList.add("moveX")
  } else {
    xTag3.classList.add("moveX180")
  }

})

workTag3.addEventListener("mouseout", function () {
  xTag3.classList.remove("moveX")
  xTag3.classList.remove("moveX180")

})

workTag.addEventListener("click", function () {
  xTagOne.classList.toggle("clicked")
})

workTag3.addEventListener("click", function () {
  xTagOne3.classList.toggle("clicked")
})


clientTag.addEventListener("click", function () {
  footerTag.classList.toggle("openFoot")
  // descriptionTag.classList.toggle("view")
  if(footerTag.classList.contains("openFoot")){
    descriptionTag.classList.add("view")
  }else{
    descriptionTag.classList.remove("view")
  }

  if(footerTag.classList.contains("openFoot")){
  }else{
    sectionTag.classList.remove("open")
  }

  if(footerTag.classList.contains("openFoot")){
    infoTag.style.paddingBottom= "40px"
    // footerSmall = true
  }else{
    infoTag.style.paddingBottom= `${footerHeight}px`
    // footerSmall = false
  }

  if (sectionTag.classList.contains("open")) {
    toggleTag.innerHTML = "Close"}else{
      toggleTag.innerHTML = "Info"
    }

})

clientTag3.addEventListener("click", function () {
  footerTag3.classList.toggle("openFoot")
  // descriptionTag3.classList.toggle("view")

  if(footerTag3.classList.contains("openFoot")){
    descriptionTag3.classList.add("view")
  }else{
    descriptionTag3.classList.remove("view")
  }

  if(footerTag3.classList.contains("openFoot")){
  }else{
    sectionTag.classList.remove("open")
  }

  if (sectionTag.classList.contains("open")) {
    toggleTag.innerHTML = "Close"}else{
      toggleTag.innerHTML = "Info"
    }
})



}


doWork()
