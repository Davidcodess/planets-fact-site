

const planetData = document.querySelectorAll('.planetFact')
const overviewBtn = document.getElementById('overviewButton')
const internalBtn = document.getElementById('internalButton')
const geologyBtn = document.getElementById('geologyButton')
const planetImg = document.querySelectorAll('.planetImg')


planetData.forEach( planetFact => {
    planetFact.style.display = "none"
    planetImg[1].style.display = "none"
    planetImg[2].style.display = "none"
})


function addActiveClass() {


    overviewBtn.addEventListener('click',() => {
        planetData[0].style.display = "block"
        planetData[1].style.display = "none"
        planetData[2].style.display = "none"

        planetImg[0].style.display ="block"
        planetImg[1].style.display ="none"
        planetImg[2].style.display = "none"
    
    })

    internalBtn.addEventListener('click',() => {

        planetData[1].style.display = "block"
        planetData[0].style.display = "none"
        planetData[2].style.display = "none"

        planetImg[1].style.display ="block"
        planetImg[0].style.display ="none"
        planetImg[2].style.display = "none"

    })

    geologyBtn.addEventListener('click',() => {
        planetData[0].style.display = "none"
        planetData[1].style.display = "none"
        planetData[2].style.display = "block"

        planetImg[0].style.display ="none"
        planetImg[2].style.display ="block"


    })

};

