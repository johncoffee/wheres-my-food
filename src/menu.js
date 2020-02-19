/// menu stuff
Array.from(document.querySelectorAll('.page'))
  .forEach((el, idx) => el.classList.add(idx === 0 ? 'noop' : 'hide'))

Array.from(document.querySelectorAll('.pagelink'))
  .forEach(el => el.addEventListener('click', evt => {

    Array.from(document.querySelectorAll('.page'))
      .map(el2 => el2.classList.add('hide'))

    document.querySelector(`#${evt.target.getAttribute('data-page')}`)
      .classList.remove('hide')
  }))