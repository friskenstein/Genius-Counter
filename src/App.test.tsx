import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders the title "Genius Counter"', () => {
    render(<App />)
    const titleElement = screen.getByText(/Genius Counter/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('renders the Counter component', () => {
    render(<App />)
    const counterElement = screen.getByText(/Count:/i)
    expect(counterElement).toBeInTheDocument()
  })
})

