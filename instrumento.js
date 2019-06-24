/*Musica*/
let botao=document.querySelector('#solo');
botao.addEventListener('click',function(){
  let audio=document.querySelector('audio');
  audio.currentTime=19
  audio.play();
audio.controls();
  audio.pause();
});
