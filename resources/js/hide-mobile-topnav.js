// When scrolls down 40px from the top, slide down mobile topnav
// When scrolls to the top, slide up the mobile topnav (50px out of the top view)
window.onscroll = function() {smartScrollFunction()};

function smartScrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
}