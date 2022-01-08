import renderer from 'react-test-renderer';
import ThemeProvider from '../ThemeProvider';
import Header from '.';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
    const component = tree.toJSON();

    expect(component).toMatchSnapshot();
  });
});
