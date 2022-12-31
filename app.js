function toggleSettings() {
  document.querySelector(".settings--modal").classList.toggle("modal--open");
  document.querySelector('main').style.opacity = 0;
}
function removeOpacity(){
    document.querySelector('main').style.opacity = 1;
    document.querySelector('.settings--modal').classList.remove('modal--open');
}
