import {render, screen} from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 
  const title = 'Hola soy Goku';
  const subtitle = 'Soy un subtitulo'

  test('debe de hacer match con el snapshot', () => { 
    const {container} = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug()
  });

  test('debe de mostrar el titulo en un h2', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});