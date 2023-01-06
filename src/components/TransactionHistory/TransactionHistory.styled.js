import { default as styled } from 'styled-components';

export const Transactions = styled.table`
  max-width: 320px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 3px 1px rgba(33, 33, 33, 0.21);
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: 10px;
  background-color: #8FBC8F;
  color: #F0F8FF;
`;

export const TransactionRow = styled.tr`
  transition: transform;
  :focus-within,
  :hover {
    transform: scale(1.03);
  }
  :nth-child(even) {
    background-color: #00FFFF;
  }
  :nth-child(odd) {
    background-color: #F0F8FF;
  }
`;

export const TransactionData = styled.td`
  padding: 10px;
  :first-of-type {
    padding-left: 3px;
    text-align: left;
    text-transform: capitalize;
  }
  :nth-of-type(2) {
    text-align: right;
    padding-right: 6px;
  }
`;