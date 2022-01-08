import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.borders.width.sm} solid ${theme.colors.blueGray['50']}`};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  padding: ${({ theme }) => `${theme.spacings.xxxs} ${theme.spacings.xs}`};

  button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
  }

  input {
    display: none;
    visibility: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => `0 ${theme.spacings.md}`};

  strong,
  span {
    font-size: ${({ theme }) => theme.font.sizes.xs};
    line-height: ${({ theme }) => theme.font.lineHeights.lg};
  }

  strong {
    color: ${({ theme }) => theme.colors.blueGray['900']};
  }

  span {
    color: ${({ theme }) => theme.colors.blueGray['400']};
  }
`;

export { Wrapper, Content };
