import {shallow} from 'enzyme'
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => { 
  const title = 'Un título';
  const url = 'http://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('debe de mostrar el componente correctamente', () => { 
    expect ( wrapper ).toMatchSnapshot();
  })

  test('debe de tener un párrafo con el texto', () => { 
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('debe de tener la imagen igual al url y alt de los props', () => { 
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('debe de tener la clase de animación correspondiente', () => { 
    const animation = 'animate__bounce';
    const div = wrapper.find('div');

    expect(div.hasClass(animation)).toBe(true);
  })
})