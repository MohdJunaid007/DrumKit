s1=new Audio('sounds/crash.mp3');
s2=new Audio('sounds/kick-bass.mp3');
s3=new Audio('sounds/snare.mp3');
s4=new Audio('sounds/tom-1.mp3');
s5=new Audio('sounds/tom-2.mp3');
s6=new Audio('sounds/tom-3.mp3');
s7=new Audio('sounds/tom-4.mp3');

  function handleClick1()
{
    setTimeout(() => {
      s1.play();
    }, 0);
}

function handleClick2()
{
    setTimeout(() => {
      s2.play();
    }, 0);
}
function handleClick3()
{
    setTimeout(() => {
      s3.play();
    }, 0);
}
function handleClick4()
{
    setTimeout(() => {
      s4.play();
    }, 0);
}
function handleClick5()
{
    setTimeout(() => {
      s5.play();
    }, 0);
}
function handleClick6()
{
    setTimeout(() => {
      s6.play();
    }, 0);
}
function handleClick7()
{
    setTimeout(() => {
      s7.play();
    }, 0);
}

document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==87)
  {
    handleClick1();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==65)
  {
    handleClick2();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==83)
  {
    handleClick3();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==68)
  {
    handleClick4();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==74)
  {
    handleClick5();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==75)
  {
    handleClick6();
  }
}
document.onkeydown=function(e){
  console.log("The key code is "+e.keyCode);
  if(e.keyCode==76)
  {
    handleClick7();
  }
}

