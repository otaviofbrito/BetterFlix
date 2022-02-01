const card = document.getElementsByClassName('qa_card')
const toggle = document.getElementsByClassName('qa_bt')

for (i = 0; i<toggle.length; i++){
  toggle[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}