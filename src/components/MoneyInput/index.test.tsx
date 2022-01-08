import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ThemeProvider from '../ThemeProvider';
import MoneyInput from '.';

describe('MoneyInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider>
        <MoneyInput id="money-input-test" />
      </ThemeProvider>
    );
    const component = tree.toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('when inputs a value', () => {
    it('should trigger onChange function', () => {
      const onChange = jest.fn();

      const component = mount(
        <ThemeProvider>
          <MoneyInput id="money-input-test" onChange={onChange} />
        </ThemeProvider>
      );

      component.find('input[data-id="money-input"]').simulate('focus');

      component
        .find('input[data-id="money-input"]')
        .simulate('change', { target: { value: '25000', focus: () => {} } });

      expect(onChange).toBeCalledWith(25000);
    });
  });
});
