import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  float: left;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  background: #23292d;
  overflow: hidden;
  background-repeat: no-repeat;

  .img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    transition: 0.5s;
    cursor: pointer;
    object-fit: contain;
  }

  .img:hover {
    transform: scale(1.1);
  }
`;
