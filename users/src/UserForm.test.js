// Show two inputs and one button
// Enter a name + email then submitting the form causes the 'onUserAdd' callback to be called

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  expect(inputs).toHaveLength(3);
  expect(button).toBeInTheDocument();
});
