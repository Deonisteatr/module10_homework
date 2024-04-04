const btn = document.querySelector('.j-btn-test');
//const active = document.querySelector('.active');
//const disabled = document.querySelector('.disabled')
const icon01 = document.querySelector('.btn_icon-01');
const icon02 = document.querySelector('.btn_icon-02');

//console.log(icon01);


btn.addEventListener('click', () => {
    icon01.classList.toggle('active');
    icon02.classList.toggle('active');
    console.log(btn);
});