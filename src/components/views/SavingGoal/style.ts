import styled from 'styled-components';
import theme from '../../../styles/theme';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.xxlg} 0`};

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

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacings.lg};
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
  align-items: stretch;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.default};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  padding: ${({ theme }) =>
    `${theme.spacings.lg} ${theme.spacings.xlg} ${theme.spacings.xlg}`};

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    padding: ${({ theme }) =>
      `${theme.spacings.md} ${theme.spacings.md} ${theme.spacings.xlg}`};
  }
`;

const ContentBoxHeader = styled.header`
  display: flex;
  flex: 1;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
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

const InputsGroup = styled.section`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: stretch;
  margin-top: 1.75rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      flex: 1;
    }

    &:last-child {
      margin-left: ${({ theme }) => theme.spacings.xs};
    }
  }

  label {
    color: ${({ theme }) => theme.colors.blueGray['900']};
    font-size: ${({ theme }) => theme.font.sizes.xxs};
    font-weight: ${({ theme }) => theme.font.weights.regular};
    line-height: ${({ theme }) => theme.font.lineHeights.lg};
    margin-bottom: ${({ theme }) => theme.spacings.xxxs};
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    > div {
      &:last-child {
        flex: 1;
        margin-top: ${({ theme }) => theme.spacings.xs};
        margin-left: 0;
      }
    }
  }
`;

const MonthlyAmount = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border: ${({ theme }) =>
    `${theme.borders.width.lg} solid ${theme.colors.blueGray['10']}`};
  border-radius: ${({ theme }) => theme.borders.radius.md};
  margin-top: ${({ theme }) => theme.spacings.md};

  > div {
    padding: ${({ theme }) => `${theme.spacings.md} ${theme.spacings.lg}`};
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    div {
      padding: ${({ theme }) => theme.spacings.md};
    }
  }
`;

const MonthAmountValue = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-family: ${({ theme }) => theme.font.families.content};
    color: ${({ theme }) => theme.colors.blueGray['900']};
    font-size: ${({ theme }) => theme.font.sizes.sm};
    font-weight: ${({ theme }) => theme.font.weights.regular};
  }

  strong {
    font-family: ${({ theme }) => theme.font.families.heading};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.font.sizes.lg};
    font-weight: ${({ theme }) => theme.font.weights.medium};
    word-break: break-all;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    h5 {
      font-size: 1.125rem;
    }

    strong {
      font-size: ${({ theme }) => theme.font.sizes.md};
    }
  }
`;

const MonthlyAmountDisclaimer = styled.div`
  background-color: ${({ theme }) => theme.colors.blueGray['10']};

  p {
    color: ${({ theme }) => theme.colors.blueGray['900']};
    font-size: ${({ theme }) => theme.font.sizes.xxxs};
    line-height: ${({ theme }) => theme.font.lineHeights.lg};

    strong {
      font-weight: ${({ theme }) => theme.font.weights.semiBold};
      word-break: break-all;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    p {
      text-align: center;
    }
  }
`;

export {
  Wrapper,
  ContentBox,
  ContentBoxHeader,
  InputsGroup,
  MonthlyAmount,
  MonthAmountValue,
  MonthlyAmountDisclaimer,
};
