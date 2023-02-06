describe('Testing a mi portafolio', () => {
  it('Visitando el index', () => {
    cy.visit('http://localhost:3000')
  })
  it('Interactuando con la navegación', ()=>{
    cy.visit('http://localhost:3000')
    cy.contains('proyectos').click()
  })
})
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })