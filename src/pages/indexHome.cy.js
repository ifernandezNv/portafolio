import React from 'react'
import Home from './index'
import '../styles/globals.css'
describe('Testing a la página principal', () => {
  it('Comprobar contenido del header', () => {
    cy.mount(<Home />)
    cy.get('h1').should('have.text', 'Hola, Soy Isaac Fernández')
    cy.get('[data-cypress=profesion]').should('have.text', 'Desarrollador Front-End')
  });

  it('Testing a los botones de la navegación', ()=>{
    cy.mount(<Home />)
    cy.get('[data-cypress=proyectos]').click()
    cy.get('[data-cypress=aboutme]').click()
    // cy.get('[data-cypress=cv]').click()
  });

  it('Testing al filtro de Proyectos', ()=>{
    cy.mount(<Home/>)
    cy.get('[data-cypress=headingproyectos]').should('have.text', 'Mis Proyectos')
    cy.get('p[data-cypress=categorias]').should('have.text', 'Categorías:')
    cy.get('[data-cypress=todos]').should('have.text', 'Todos').click()
    cy.get('[data-cypress=web]').should('have.text', 'Web').click()
    cy.get('[data-cypress=movil]').should('have.text', 'Móvil').click()
    cy.get('[data-cypress=design]').should('have.text', 'Diseño').click()
  });

  it('Comprobando la funcionalidad del filtro Proyectos Web', ()=>{
    cy.mount(<Home/>)
    cy.get('[data-cypress=web]').should('have.text', 'Web').click()
    cy.get('[data-cypress=cweb]').should('not.have.text', 'Áureos')
    cy.get('[data-cypress=cweb]').should('have.lengthOf', 2)
  })

  it('Comprobando la funcionalidad del filtro Proyectos Movil', ()=>{
    cy.mount(<Home/>)
    
    cy.get('[data-cypress=movil]').should('have.text', 'Móvil').click()

    cy.get('[data-cypress=cmovil]').should('not.have.text', 'UpTask')
    cy.get('[data-cypress=cmovil]')
      .click()
      .get('h3[data-cypress=Áureos]').should('have.text', 'Áureos')
    
    cy.get('[data-cypress=cmovil]').should('have.lengthOf', 1)
  })

  it('Comprobando la funcionalidad del filtro Proyectos Ux', ()=>{
    cy.mount(<Home/>)
    
    cy.get('[data-cypress=design]').should('have.text', 'Diseño').click()

    cy.get('[data-cypress=cdesign]').should('not.have.text', 'UpTask')
    
    cy.get('[data-cypress=cdesign]').should('have.lengthOf', 2)
  })
})