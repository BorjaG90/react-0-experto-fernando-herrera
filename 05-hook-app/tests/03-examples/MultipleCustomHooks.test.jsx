import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Pruebas en <MultipleCustomHooks/>', () => {
  test('should de mostrar el componente por defecto', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));

    const nextButton = screen.getByRole('button', {name: 'Next quote'})
    
    expect(nextButton.disabled).toBeTruthy();
  });
});