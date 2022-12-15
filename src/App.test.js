/* eslint-disable no-unused-expressions */
/* eslint-disable testing-library/no-node-access */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('render', async () => {
  jest.useRealTimers();
  jest.useFakeTimers();
  // jest.useFakeTimers({ advanceTimers: true, });
  // jest.useFakeTimers({ advanceTimers: 1 });
  // jest.useFakeTimers({ advanceTimers: 10 });
  // jest.useFakeTimers({ advanceTimers: 100 });
  // jest.useFakeTimers({ advanceTimers: 1000 });
  // jest.runAllTimers();

  render(<App />);
  expect(screen.getByTestId('name1')).toBeInTheDocument();
  expect(screen.getByTestId('name2')).toBeInTheDocument();
  expect(screen.getByTestId('name3')).toBeInTheDocument();

  await userEvent.type(screen.getByTestId('name1'), "something1");
  await userEvent.type(screen.getByTestId('name2'), "something2");
  await userEvent.type(screen.getByTestId('name3'), "something3");

  expect(screen.getByText('Open Modal')).toBeInTheDocument();
  await userEvent.click(screen.getByText('Open Modal'));
  await userEvent.keyboard('{esc}{esc}{esc}');
  await userEvent.click(screen.getByText('Open Modal'));
  await userEvent.keyboard('{esc}{esc}{esc}');
  await userEvent.click(screen.getByText('Open Modal'));
  await userEvent.keyboard('{esc}{esc}{esc}');
  await userEvent.click(screen.getByText('Open Modal'));
  await userEvent.keyboard('{esc}{esc}{esc}');
  await userEvent.click(screen.getByText('Open Modal'));
  await userEvent.keyboard('{esc}{esc}{esc}');
  await userEvent.click(screen.getByText('Open Modal'));

  expect(screen.getByText('Basic Modal')).toBeVisible();
  expect(screen.getByText('Basic Modal')).toBeInTheDocument();
  expect(screen.getByText('name1: something1')).toBeInTheDocument();
  expect(screen.getByText('name2: something2')).toBeInTheDocument();
  expect(screen.getByText('name3: something3')).toBeInTheDocument();
  expect(screen.getByText('Success Text')).toBeInTheDocument();
  expect(screen.getByText('Something here')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Something here'));
  expect(screen.getByRole('switch')).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /cancel/i })).toBeDisabled();
  expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();

  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));
  await userEvent.click(screen.getByRole('switch'));

  expect(screen.getByRole('button', { name: /cancel/i })).toBeEnabled();
  expect(screen.getByRole('button', { name: /ok/i })).toBeEnabled();

  await userEvent.click(screen.getByRole('button', { name: /ok/i }));

  expect(screen.getByText(/end of test/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('WHAT???')).toBeInTheDocument();
  });

  // jest.runAllTimers();
});
