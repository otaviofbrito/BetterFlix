const getBtn = document.querySelectorAll('.qa_bt')
const card = document.querySelectorAll('.qa_card')

for (const btn of getBtn) {
  btn.addEventListener('click', function(){
    card.classList.remove('active')
  })
}