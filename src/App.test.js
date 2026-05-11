// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuickSetup title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuickSetup/i);
    expect(titleElement).toBeInTheDocument();
});
