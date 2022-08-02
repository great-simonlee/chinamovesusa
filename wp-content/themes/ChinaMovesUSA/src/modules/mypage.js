if (window.location.pathname === '/mypage/') {
  window.addEventListener('DOMContentLoaded', () => {
    const auth = firebase.auth();

    const mypageCateBtn = document.querySelectorAll('.mpcat-item');
    const mypageSection = document.querySelectorAll('.mypage-section');

    mypageCateBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        let index = [...mypageCateBtn].indexOf(el);
        mypageSection.forEach((ele) => {
          ele.style.display = 'none';
        });
        mypageSection[index].style.display = 'flex';
        mypageCateBtn.forEach((ele) => {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
        });
        mypageCateBtn[index].style.color = '#fff';
        mypageCateBtn[index].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
      });
    });

    if (window.location.search === '?mylist') {
      mypageSection.forEach((ele) => {
        ele.style.display = 'none';
      });
      mypageSection[2].style.display = 'flex';
      mypageCateBtn.forEach((ele) => {
        ele.style.backgroundColor = '#fff';
        ele.style.color = '#000';
      });
      mypageCateBtn[2].style.color = '#fff';
      mypageCateBtn[2].style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
    }
  });
}
