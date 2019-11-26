import styled from 'styled-components';
import { rem } from 'polished';
import palette from 'app/palette';
import * as constants from './constants';

export const Wrapper = styled.div``;

export const Header = styled.div`
  color: ${palette.dark};
  .ui.menu {
    height: ${rem(constants.menuHeight)};
    overflow: visible;
  }
  .ui.menu .item:first-child {
    border-left: 0 !important;
  }
  .ui.menu .item img {
    height: ${rem(constants.menuHeight - 4)};
    width: auto;
  }
`;

export const Content = styled.div`
  color: ${palette.dark};
  margin-top: ${rem(constants.menuHeight + 8)};
`;
