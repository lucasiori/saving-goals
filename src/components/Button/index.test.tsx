import renderer from 'react-test-renderer';
import ThemeProvider from '../ThemeProvider';
import Button from '.';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider>
        <Button>Hello World</Button>
      </ThemeProvider>
    );
    const component = tree.toJSON();

    expect(component).toMatchSnapshot();
  });
});
