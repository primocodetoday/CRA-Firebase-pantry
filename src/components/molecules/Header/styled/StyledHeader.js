﻿import styled from 'styled-components';
import { Title, SubTitle } from 'components/atoms';

export const Wrapper = styled.header`
  width: 100%;
  margin: 25px 0;

  @media (max-width: ${({ theme }) => theme.mediaBreaks.mobile}px) {
    text-align: center;
  }
`;

export const Text = styled(Title)`
  color: white;
`;
export const SubText = styled(SubTitle)`
  color: white;
  margin-top: 17px;
`;
