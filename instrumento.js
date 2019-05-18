/*Musica*/
let botao=document.querySelector('#solo');
botao.addEventListener('click',function(){
  let audio=document.querySelector('audio');
  audio.currentTime=10
  audio.controls;
  audio.play();
});
