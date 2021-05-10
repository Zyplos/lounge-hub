/** @jsxImportSource @theme-ui/core */
import { Grid } from "@theme-ui/components";
const SmallCardGrid = ({ width = "260px", ...props }) => (
  <Grid
    {...props}
    sx={{
      gridTemplateColumns: `repeat(auto-fill, minmax(${width}, 1fr) )`,
      gridAutoRows: "1fr",
      "& > div": {
        bg: "cardBg",
        p: 3,
        borderRadius: "10px",
      },
    }}
  />
);

export default SmallCardGrid;
