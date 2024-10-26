import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('integration test: increments and decrements count correctly', () => {
	render(<App />)

	const incrementButton = screen.getByRole('button', { name: /increment/i })
	const decrementButton = screen.getByRole('button', { name: /decrement/i })

	expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()

	fireEvent.click(incrementButton)
	expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()

	fireEvent.click(decrementButton)
	expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()

	expect(decrementButton).toBeDisabled()
})
