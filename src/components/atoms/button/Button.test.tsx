import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('renders button with a correct label', () => {
    render(<Button data-testid="btn" label="Submit" />)
    const button = screen.getByTestId('btn')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/^Submit$/)
  })

  test('allows for onClick handler to be passed in', () => {
    const onButtonClick = jest.fn()

    render(<Button data-testid="btn" label="Submit" onClick={onButtonClick} />)
    const button = screen.getByTestId('btn')
    fireEvent.click(button)

    expect(onButtonClick).toHaveBeenCalled()
  })

  test('can be disabled', () => {
    render(<Button data-testid="btn" label="Submit" disabled />)
    const button = screen.getByTestId('btn')

    expect(button).toBeDisabled()
  })
})
