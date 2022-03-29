import renderWithRouter from '../Helpers/renderWithRouter';
import App from './App';

describe('Testa renderização do componente Header', () => {
  it('xlablau', () => {
    const { history } = renderWithRouter(App);
    console.log(history);
  });
});
