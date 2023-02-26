import styled from 'styled-components';

export const TabExInContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 624px;
  }

  @media screen and (min-width: 1200px) {
    width: 746px;
  }
`;

export const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 342px;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f4f6fb;
  }
  &::-webkit-scrollbar-thumb {
    background: #FF751D;
    border-radius: 2px;
    height: 130px;
}
`;

export const Item = styled.li`
  
  @media screen and (min-width: 768px) {
    height: 40px;
    grid-template-columns: 89px 142px 199px 107px 87px;
    align-items: center;
    text-align:center;
    display: grid;
    font-size: 13px;
    font-weight: normal;
    color: #52555f;
    border-bottom: 2px solid #f4f6fb;
    border-right: 2px solid #f4f6fb;
    border-left: 2px solid #f4f6fb;
  }

  @media screen and (min-width: 1200px) {
    height: 38px;
    grid-template-columns: 126px 168px 216px 117px 119px;
  }
`;

export const Plug = styled.div`
  height: 38px;
  grid-template-columns: 126px 168px 216px 117px 119px;
  align-items: center;
  text-align:center;
  display: grid;
  font-size: 13px;
  font-weight: normal;
  color: #52555f;
  border-bottom: 2px solid #f4f6fb;
  border-right: 2px solid #f4f6fb;
  border-left: 2px solid #f4f6fb;
`;