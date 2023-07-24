const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panels.addEventListener('click', ()=>{
        panel.classList.add('active')
    })
})