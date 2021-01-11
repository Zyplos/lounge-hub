import styled from "@emotion/styled";

const Stack = styled.div`
  display: grid;
  margin: 0px;
  gap: ${(props) =>
    props.theme.space[props.gap] + "px" || props.theme.space[3] + "px"};
`;

export default Stack;
