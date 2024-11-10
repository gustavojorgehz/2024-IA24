const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.gallery img')

galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close()
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    galleryContent.innerHTML = `<img src="${img.src}">`
    galleryImageModal.showModal()
  })
})

const galleryBtNext = galleryImageModal.querySelector('.bt-next')
let nextImg = null

galleryBtNext.addEventListener('click', () => {
  galleryImageModal.close()
  nextImg.click()
})

galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close()
})

imgs.forEach(img => {
  img.addEventListener('click', () => {
    nextImg = img.parentNode.nextElementSibling.querySelector('img')
    galleryContent.innerHTML = `<img src="${img.src}">`
    galleryImageModal.showModal()
  })
})