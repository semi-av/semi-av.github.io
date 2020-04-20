// var tl = new TimelineLite,
//     mySplitText = new SplitText("#quote", {type:"lines"}),
//     lines = mySplitText.lines; //an array of all the divs that wrap each character
//     tl.staggerFrom(lines, 1, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
//
// TweenLite.set("#quote", {perspective:400});
//
// var tl2 = new TimelineLite,
//     mySplitText2 = new SplitText("#quote2", {type:"lines"}),
//     lines2 = mySplitText2.lines; //an array of all the divs that wrap each character
//     tl2.staggerFrom(lines2, 1.04, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
//
// // TweenLite.set("#quote", {perspective:400});
//
// var tl3 = new TimelineLite,
//     mySplitText3 = new SplitText("#quote3", {type:"lines"}),
//     lines3 = mySplitText3.lines; //an array of all the divs that wrap each character
//     tl3.staggerFrom(lines3, 1.08, {y:-80, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");
//
//
// const doInfo = function () {
//   const toggleTag = document.querySelector("h2.contact")
//   const sectionTag = document.querySelector("section.info-page")
//   const workTag = document.querySelector("a.work")
//
//
//
//
//   workTag.addEventListener("click", function () {
//     if (sectionTag.classList.contains("open")) {
//       sectionTag.classList.remove("open")
//     }
//   })
//
//   toggleTag.addEventListener("click", function () {
//     sectionTag.classList.toggle("open")
//
//
//     if (sectionTag.classList.contains("open")) {
//       toggleTag.innerHTML = "Close"
//       tl.restart();
//       tl2.restart();
//       tl3.restart();
//     } else {
//       toggleTag.innerHTML = "Info"
//       tl.reverse();
//       tl2.reverse();
//       tl3.reverse();
//     }
//   })
//
// }
//
// doInfo()
