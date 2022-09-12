function go_about_me(){
  document.getElementById("about_me").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("exp").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("aff").style.display = "none";
}

function go_skills(){
  document.getElementById("about_me").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("courses").style.display = "none";
  document.getElementById("exp").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("aff").style.display = "none";
}

function go_courses(){
  document.getElementById("about_me").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("courses").style.display = "block";
  document.getElementById("exp").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("aff").style.display = "none";
}

function go_exp(){
  document.getElementById("about_me").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("exp").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("aff").style.display = "none";
}

function go_projects(){
  document.getElementById("about_me").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("exp").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("aff").style.display = "none";
}

function go_aff(){
  document.getElementById("about_me").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("exp").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("aff").style.display = "block";
}

function check_check(){
  checkedd = document.getElementById("content_show").checked;
  block_change = document.getElementById("right_block");
  block_change2 = document.getElementById("content");

  if (checkedd == true){
    block_change.style.height = "30%";
    block_change.style.overflow = "auto";
    block_change2.style.top = "30%";
  }else{
    block_change.style.height = "7%";
    block_change.style.overflow = "hidden";
    block_change2.style.top = "5%";
  }
}
