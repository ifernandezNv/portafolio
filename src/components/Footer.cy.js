import React from 'react'
import Footer from './Footer'
import '../styles/globals.css';

describe('<Footer />', () => {
  it('Primeros pasos con Component Testing', () => {
    cy.mount(<Footer />)
    cy.get('[data-cypress=correo]').should('have.text', 'ifernandeznv@gmail.com')
    cy.get('[data-cypress=copyright]').should('have.text', 'Todos los derechos reservados. © 2023')
    cy.get('[data-cypress=nombre]').should('have.text', 'Isaac Fernández Navarro')

  })
})