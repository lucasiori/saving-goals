import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-width: 215px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.borders.width.sm} solid ${theme.colors.blueGray['50']}`};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  padding: ${({ theme }) => `${theme.spacings.xxxs} ${theme.spacings.xs}`};

  &[data-focused='true'] {
    border: ${({ theme }) =>
      `${theme.borders.width.lg} solid ${theme.colors.dark}`};
  }

  input {
    position: absolute;
    width: ${({ theme }) => `calc(100% - (${theme.spacings.xs} * 2))`};
    opacity: 0;
    z-index: -1;
  }
`;

const ArrowControl = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
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

export { Wrapper, ArrowControl, Content };
