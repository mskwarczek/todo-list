import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

test('Should render without errors', () => {
  render(<Button label={'Mock label'} />);
  const button = screen.getByLabelText('Mock label');

  expect(button).toBeInTheDocument();
});

test('Should render props.text as TextContent', () => {
  render(<Button label={'Mock label'} text={'Mock text'} />);
  const button = screen.getByLabelText('Mock label');

  expect(button).toHaveTextContent('Mock text');
});

test('Should execute onClick function when clicked', () => {
  const mockOnClick = jest.fn();
  render(<Button label={'Mock label'} handleClick={mockOnClick} />);
  const button = screen.getByLabelText('Mock label');

  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});

test('Should not execute onClick function when disabled', () => {
  const mockOnClick = jest.fn();
  render(<Button label={'Mock label'} onClick={mockOnClick} disabled={true} />);
  const button = screen.getByLabelText('Mock label');

  fireEvent.click(button);
  expect(mockOnClick).not.toHaveBeenCalled();
});
