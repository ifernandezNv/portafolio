import React from 'react'
import Footer from './Footer'
import '../styles/globals.css';

describe('<Footer />', () => {
  it('Primeros pasos con Component Testing', () => {
    cy.mount(<Footer />)
    cy.get('a[data-cypress]').should('have.text', 'ifernandeznv@gmail.com')
  })
})