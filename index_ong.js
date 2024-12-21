function changeShape(id) {
    const element = document.getElementById(id);
    element.style.transition = '3s background-color ease'; // 확실히 설정
    setTimeout(() => {
        element.style.backgroundColor = 'white';
    }, 2000); // DOM 업데이트 후 10ms 지연
}

const freakinIdName =['head_o','tail_o',"vowel_o_blank1","vowel_o_blank2"]
for(i of freakinIdName){
    changeShape(i)
}

function logoAppear(){
    document.getElementById('logo').style.visibility = 'visible'
    document.getElementById('logo').style.opacity ='1'
}

setTimeout(() => {
    logoAppear()
}, 2500);

// 좌측 메뉴창 닫기
// function closeMenu(index){
//     document.getElementsByClassName('shutdown')[index].style.display = 'none'
// }

document.getElementsByClassName('shutdown')[0].addEventListener('click', function closeMenu(){
    document.getElementById('left_menu').style.display = 'none'
})

//메뉴창 열기 시봉방거
document.getElementById('freakinButton').addEventListener('click', function openMenu(){
    document.getElementById('left_menu').style.display = 'block'
})