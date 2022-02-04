const ac_btns = document.querySelectorAll('.qa_bt')
const ac_content = document.querySelectorAll('.qa_card')


ac_btns.forEach(btn => {
  btn.addEventListener('click', (e) =>{
    ac_content.forEach(acc => {
      if (
        e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
          acc.classList.remove('active');
          ac_btns.forEach((btn) => btn.classList.remove('active'));
        }
    })

    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    btn.classList.toggle('active')
  })
})

