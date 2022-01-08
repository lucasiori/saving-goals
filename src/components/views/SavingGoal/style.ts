import styled from 'styled-components';
import theme from '../../../styles/theme';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings.xxlg};

  h2 {
    font-family: ${({ theme }) => theme.font.families.content};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.sizes.sm};
    font-weight: ${({ theme }) => theme.font.weights.regular};
    text-align: center;
    margin: ${({ theme }) => `0 ${theme.spacings.sm} ${theme.spacings.md}`};

    strong {
      font-weight: ${({ theme }) => theme.font.weights.semiBold};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    padding-top: ${({ theme }) => theme.spacings.lg};
  }
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  padding: ${({ theme }) => `2.25rem ${theme.spacings.xlg}`};
`;

const ContentBoxHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${({ theme }) => theme.spacings.sm};

    h3 {
      color: ${({ theme }) => theme.colors.blueGray['900']};
      font-size: ${({ theme }) => theme.font.sizes.md};
      margin-bottom: ${({ theme }) => theme.spacings.xxxs};
      line-height: ${({ theme }) => theme.font.lineHeights.md};
    }

    span {
      color: ${({ theme }) => theme.colors.blueGray['400']};
      font-size: ${({ theme }) => theme.font.sizes.xs};
      line-height: ${({ theme }) => theme.font.lineHeights.lg};
    }
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    h3 {
      color: ${({ theme }) => theme.colors.blueGray['900']};
      font-size: ${({ theme }) => theme.font.sizes.sm};
    }

    span {
      font-size: ${({ theme }) => theme.font.sizes.xxs};
    }
  }
`;

export { Wrapper, ContentBox, ContentBoxHeader };
