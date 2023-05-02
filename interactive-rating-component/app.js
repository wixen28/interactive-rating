

const wholeContainer = document.querySelector('.whole-container')
const points = document.querySelectorAll('.point-div')
const button = document.querySelector('#button')
const thankPart = document.querySelector('.whole-container-thank')
const span = document.querySelector('span')
const toggle = document.querySelector('.toggle')
const icon = document.querySelector('i')
const header1 = document.querySelector('.header1')
const header2 = document.querySelector('.thankyou')
const p = document.querySelector('.desc1')
const desc2 = document.querySelector('.desc2')

points.forEach(function(point){
    point.addEventListener('click', function(e){

       const id = point.dataset.id
        point.style.backgroundColor = '#737d88' //or e.target.style,...

       button.addEventListener('click', function(e){
        e.preventDefault()
        wholeContainer.classList.add('hide-container')
        thankPart.classList.remove('default')
        span.innerHTML = `\u00A0${id}\u00A0`
        
       })
    })
})

// day mode
toggle.addEventListener('click', function(e){
   if(wholeContainer.getAttribute('data-theme') != "day") {
        wholeContainer.setAttribute('data-theme', "day")
        icon.setAttribute('class', "fas fa-moon")
        document.body.style.background = "rgba(255, 255, 255, 0.795)"
        header1.style.color = 'black'
        p.style.color = 'black'
        thankPart.style.backgroundColor = "#b6c6dc"
        desc2.style.color = 'black'
        header2.style.color = 'black'
    } else {
        icon.setAttribute('class', "fas fa-sun")
        wholeContainer.setAttribute('data-theme', "")
        document.body.style.background = "rgb(27, 24, 24)"
        header1.style.color = 'rgba(255, 255, 255, 0.795)'
        p.style.color = 'rgba(255, 255, 255, 0.795)'
    }

})
