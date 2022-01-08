import styled from 'styled-components';

const Wrapper = styled.button`
  width: 100%;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: ${({ theme }) => theme.borders.radius.lg};
  color: ${({ theme }) => theme.colors.default};
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
  padding: 1.125rem;
`;

export { Wrapper };
