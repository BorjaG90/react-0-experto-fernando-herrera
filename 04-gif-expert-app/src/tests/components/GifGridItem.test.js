import {shallow} from 'enzyme'
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => { 
  const title = 'Un título';
  const url = 'http://localhost/algo.jpg';

  test('should de mostrar el componente correctamente', () => { 
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect ( wrapper ).toMatchSnapshot();
   })
 })