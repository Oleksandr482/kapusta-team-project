import styled from 'styled-components';

import imgTab from '../../../images/bgs/kapustaTab-bottom.svg';
import imgDesc from '../../../images/bgs/kapustaDesc-Bottom.svg';

export const BgBottom = styled.svg`
  @media screen and (min-width: 768px) {
    z-index: -1;
    position: fixed;
    bottom: 56px;
    right: 9%;
    background-repeat: no-repeat;
    background-image: url(${imgTab});
    width: 183px;
    height: 142px;
  }
  @media screen and (min-width: 1280px) {
    z-index: -1;
    bottom: 0;
    right: 0;
    background-image: url(${imgDesc});
    background-repeat: repeat;
    width: 100%;
    height: 23%;
  }
`;
