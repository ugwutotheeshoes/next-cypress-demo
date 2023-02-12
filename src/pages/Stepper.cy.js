import React from 'react'
import Stepper from './Stepper'

// describe('<Stepper />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(<Stepper />)
//   })
// })
it('when the increment button is pressed, the counter is incremented', () => {
  cy.mount(<Stepper />)
  cy.get('[data-cy=increment]').click()
  cy.get('[data-cy=counter]').should('have.text', '1')
})

it('when the decrement button is pressed, the counter is decremented', () => {
  cy.mount(<Stepper />)
  cy.get('[data-cy=decrement]').click()
  cy.get('[data-cy=counter]').should('have.text', '-1')
})