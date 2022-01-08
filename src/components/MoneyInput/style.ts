import styled from 'styled-components';
import NumberInput from 'react-number-format';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  border: ${({ theme }) =>
    `${theme.borders.width.sm} solid ${theme.colors.blueGray['50']}`};
  border-radius: ${({ theme }) => theme.borders.radius.sm};

  img {
    position: absolute;
    top: 50%;
    left: ${({ theme }) => theme.spacings.xs};
    transform: translateY(-50%);
  }
`;

const Input = styled(NumberInput)`
  width: 100%;
  height: 100%;
  border: 0;
  font-family: ${({ theme }) => theme.font.families.heading};
  color: ${({ theme }) => theme.colors.blueGray['600']};
  font-size: ${({ theme }) => theme.font.sizes.md};
  font-weight: ${({ theme }) => theme.font.weights.medium};
  padding: ${({ theme }) => `0.875rem ${theme.spacings.xxs}`};
  padding-left: 2.75rem;
`;

export { Wrapper, Input };
