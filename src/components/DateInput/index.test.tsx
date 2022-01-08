import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ThemeProvider from '../ThemeProvider';
import DateInput from '.';

describe('DateInput', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ThemeProvider>
        <DateInput id="date-input-test" />
      </ThemeProvider>
    );
    const component = tree.toJSON();

    expect(component).toMatchSnapshot();
  });

  describe('when there are not previous month', () => {
    it('should disabled previous button', () => {
      const component = mount(
        <ThemeProvider>
          <DateInput id="date-input-test" />
        </ThemeProvider>
      );

      expect(
        component.find('button[data-id="prev-button"]').prop('disabled')
      ).toBeTruthy();
    });
  });

  describe('when click on control buttons', () => {
    it('should trigger onChangeDate function', () => {
      const onChangeDate = jest.fn();

      const component = mount(
        <ThemeProvider>
          <DateInput id="date-input-test" onChangeDate={onChangeDate} />
        </ThemeProvider>
      );

      component.find('button[data-id="next-button"]').simulate('click');
      component.find('button[data-id="prev-button"]').simulate('click');

      // 1° / 2º call - render
      // 3° call - next
      // 4° call - prev

      expect(onChangeDate).toBeCalledTimes(4);
    });
  });

  describe('when click on left and right arrows', () => {
    it('should trigger onChangeDate function', () => {
      const onChangeDate = jest.fn();

      const component = mount(
        <ThemeProvider>
          <DateInput id="date-input-test" onChangeDate={onChangeDate} />
        </ThemeProvider>
      );

      component.find('input[data-id="date-input"]').simulate('focus');
      component
        .find('input[data-id="date-input"]')
        .simulate('keyup', { key: 'ArrowRight' });
      component
        .find('input[data-id="date-input"]')
        .simulate('keyup', { key: 'ArrowLeft' });

      // 1° / 2º call - render
      // 3° call - next
      // 4° call - prev

      expect(onChangeDate).toBeCalledTimes(4);
    });
  });
});
