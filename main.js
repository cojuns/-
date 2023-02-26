/* html안에 있는 클래쓰 노드 중에 (navbar_toggleBtn)을 toggleBtn에 연결  */
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

/* toggleBtn 클릭시 class에 active가 있다면 빼주고 없으면 추가  */
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
