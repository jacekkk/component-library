import React from 'react'
import { render, screen } from '@testing-library/react'
import { Image } from './Image'

describe('Image', () => {
  test('renders Image with required props', () => {
    render(<Image data-testid="img" src="image.png" alt="some image" />)
    const image = screen.getByTestId('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAccessibleName('some image')
    expect(image).toHaveAttribute('src', 'image.png')
  })

  test('renders Image with custom styles', () => {
    render(
      <Image
        data-testid="img"
        src="image.png"
        alt="some image"
        style={{ width: 100 }}
      />
    )
    const image = screen.getByTestId('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveStyle({ width: '100px' })
  })

  test('renders Image as a link', () => {
    render(
      <Image
        data-testid="img"
        src="image.png"
        alt="some image"
        link="https://dogtime.com/dog-breeds/golden-retriever"
      />
    )
    const image = screen.getByTestId('img')
    const ahref = screen.getByRole('link')

    expect(image).toBeInTheDocument()
    expect(ahref).toBeInTheDocument()
    expect(ahref).toHaveAttribute(
      'href',
      'https://dogtime.com/dog-breeds/golden-retriever'
    )
    expect(ahref).toContainElement(image)
  })
})
