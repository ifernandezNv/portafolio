describe('Testing a mi portafolio', () => {
  it('Visitando el index', () => {
    cy.visit('/')
  })
  it('Interactuando con la navegación', ()=>{
    cy.visit('/')
    cy.contains('proyectos').click()
  })
})
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })