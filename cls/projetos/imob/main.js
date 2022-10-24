// ===Tipos de dados====
// String (textos)
// Number (número)
// Boolean (true ou false)

// Objeto tem uma funcionalidade que modifica uma variavel ou propriedade dentro dessa funcionalidade.
// O '.' no javascript serve pra acessar um objeto dentro de um objeto ou variavel ou uma  propriedade.
// Em javascript quase tudo é objeto.

window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuCurrentSection(home)
  activateMenuCurrentSection(services)
  activateMenuCurrentSection(about)
  activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //  verificar se a seção passou da linha
  // quais dados vou precisar?
  // offsetTop vai me dar um numero.
  // quando você for fazer uma lógica de programação, voce precisa se perguntar quais os dados que vai utilzar naquela sequência logica.

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informações dos dados e da lógica

  // console.log(
  //   'o topo da seção chegou ou ultrapassou da linha?',
  //   sectionTopReachOrPassedTargetLine
  // )

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 700) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closedMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about header,
#about .content
`)

// function sayMyName(name) {
//   console.log(name)
// }

// sayMyName('Jorge')
// sayMyName('Mari')
// sayMyName('Sarah')
