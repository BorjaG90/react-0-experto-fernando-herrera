import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas de <GifItem />', () => {
  const title = 'Saitama';
  const url = 'http://one-punch.com/saitama.jpg'
  test('debe de hacer match el snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});