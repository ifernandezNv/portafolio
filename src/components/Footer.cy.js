import React from 'react'
import Footer from './Footer'
import '../styles/globals.css';

describe('<Footer />', () => {
  it('renders', () => {
    cy.mount(<Footer />)
    cy.get('a').should('have.a.property', 'href', 'tel: +52 6271328212')
  })
})