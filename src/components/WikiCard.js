/** @jsxImportSource @theme-ui/core */
import { Flex, Heading, Text } from "@theme-ui/components";
import { Link } from "react-router-dom";

function WikiCard({ link, image, gradient, heading, description }) {
  return (
    <Link
      to={link}
      sx={{ display: "block", color: "white", textDecoration: "none" }}
    >
      <Flex
        sx={{
          flexDirection: "row",
          background: `linear-gradient( 135deg, ${gradient.left} 10%, ${gradient.right} 100%)`,
          // backgroundColor: gradient.right,
          px: 4,
          py: 3,
          alignItems: "center",
          height: "100%",
          borderRadius: "10px",
          flexWrap: "wrap",
        }}
      >
        <img src={image} alt={heading} sx={{ height: "128px", mr: 3 }} />
        <div>
          <Heading as="h2" sx={{ fontSize: 5, mb: 2 }}>
            {heading}
          </Heading>
          <Text>{description}</Text>
        </div>
      </Flex>
    </Link>
  );
}
export default WikiCard;
