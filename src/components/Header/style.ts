import styled from 'styled-components';
import theme from '../../styles/theme';

const Header = styled.header`
  width: ${({ theme }) => theme.width.fluid};
  background: ${({ theme }) => theme.colors.default};

  div {
    max-width: ${({ theme }) => theme.width.maxWidth};
    display: flex;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacings.md} ${theme.spacings.xxxlg}`};
    margin: 0 auto;
  }

  img {
    width: 100px;
  }

  @media screen and (max-width: ${theme.breakpoints.xs}) {
    div {
      padding: ${({ theme }) => theme.spacings.sm};
    }

    img {
      width: 75px;
    }
  }
`;

export { Header };
