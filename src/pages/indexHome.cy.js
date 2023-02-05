import React from 'react'
import Home from './index'
import '../styles/globals.css'
describe('<Home />', () => {
  it('Comprobar contenido de la página principal', () => {
    cy.mount(<Home />)
    cy.get('h1').should('have.text', 'Hola, Soy Isaac Fernández')
    cy.get('[data-cypress=profesion]').should('have.text', 'Desarrollador Front-End')
  })
})