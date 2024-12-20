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