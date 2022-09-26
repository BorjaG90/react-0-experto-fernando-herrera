import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {
  const initialValue = 155;
  test('debe de hacer match con el snapshot', () => {
    const {container} = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('debe de incrementar con el botón +1', () => {
    render(<CounterApp value={initialValue} />);
    // fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', {name: "btn-add" }));
    expect(screen.getByText('156')).toBeTruthy();
  });

  test('debe de decrementar con el botón -1', () => {
    render(<CounterApp value={initialValue} />);
    // fireEvent.click(screen.getByText('-1'));
    fireEvent.click(screen.getByRole('button', {name: "btn-substract" }));
    expect(screen.getByText('154')).toBeTruthy();
  });

  test('debe de funcionar el botón de reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('159')).toBeTruthy();
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: "btn-reset" }));
    expect(screen.getByText('155')).toBeTruthy();
  });
});