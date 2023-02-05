import React from 'react'
import Home from './index'
import '../styles/globals.css'
describe('<Home />', () => {
  it('Comprobar contenido del header', () => {
    cy.mount(<Home />)
    cy.get('h1').should('have.text', 'Hola, Soy Isaac Fernández')
    cy.get('[data-cypress=profesion]').should('have.text', 'Desarrollador Front-End')
  });
  it('Testing a los botones de la navegación y al contenido mostrado', ()=>{
    cy.mount(<Home />)
    cy.get('[data-cypress=proyectos]').click()
    cy.get('[data-cypress=aboutme]').click()
    cy.get('[data-cypress=cv]').click()
  })

  it('Testing a la sección Mis Proyectos', ()=>{
    cy.mount(<Home/>)
    cy.get('[data-cypress=headingproyectos]').should('have.text', 'Mis Proyectos')
  })
})