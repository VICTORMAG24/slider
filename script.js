const sliders = [...document.querySelectorAll('.slider__body')]
const arrowAfter = document.querySelector('#after')
const arrowBefore = document.querySelector('#before')
let value;

arrowAfter.addEventListener('click', () => cambiarPosicionSlider(1))
arrowBefore.addEventListener('click', () => cambiarPosicionSlider(-1))

function cambiarPosicionSlider(cambiarAfterBefore) {
    currentElement = Number(document.querySelector('.slider__body--show').dataset.id)
    value = currentElement
    value += cambiarAfterBefore

    if (value === 0 || value === sliders.length + 1) {
        value = value === 0 ? sliders.length : 1
    }

    sliders[currentElement - 1].classList.toggle('slider__body--show')
    sliders[value - 1].classList.toggle('slider__body--show')
}