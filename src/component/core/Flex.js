import { styled } from "@mui/material";

const Flex = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "direction" &&
    prop !== "justifyContent" &&
    prop !== "alignItems" &&
    prop !== "sx",
  name: "Flex",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.direction === "column" && styles.directionColumn,
    props.justifyContent === "space-between" && styles.spaceBetween,
    props.justifyContent === "flex-start" && styles.flexStart,
    props.justifyContent === "flex-end" && styles.flexEnd,
    props.alignItems === "flex-start" && styles.alignStart,
    props.alignItems === "center" && styles.alignCenter,
    props.alignItems === "end" && styles.alignEnd,
  ],
})({
  display: "flex",
});

export default Flex;
