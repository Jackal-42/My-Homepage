var user;

$.getJSON("https://api.github.com/users/Jackal-42", function(result){
  user = (result)
})

function declareStats(){
  try{
    document.getElementById("repos").innerHTML = user.public_repos;
    document.getElementById("followers").innerHTML = user.followers;
    document.getElementById("following").innerHTML = user.following;
  }catch{
    requestAnimationFrame(declareStats)
  }
}
declareStats()

function scrollDown(){
  document.getElementById("background").style.top = "-90%"
  document.getElementById("mainBody").style.top = "-80%"
  document.getElementById("lowerBody").style.top = "15%"
  document.getElementById("scrollButton").style.bottom = "82%";
  document.getElementById("scrollButton").setAttribute("onclick", "scrollUp()")
  document.getElementById("arrow").style.transform = "rotate(45deg)"
  document.getElementById("arrow").style.webkitTransform = "rotate(45deg)"
}

function scrollUp(){
  document.getElementById("background").style.top = "0%"
  document.getElementById("mainBody").style.top = "10%"
  document.getElementById("lowerBody").style.top = "100%"
  document.getElementById("scrollButton").style.bottom = "5%";
  document.getElementById("scrollButton").setAttribute("onclick", "scrollDown()")
  document.getElementById("arrow").style.transform = "rotate(-135deg)"
  document.getElementById("arrow").style.webkitTransform = "rotate(-135deg)"
}