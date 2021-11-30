/** @jsxImportSource theme-ui */
import { Flex, Heading, Text } from "theme-ui";
import Link from "next/link";
import Image from "next/image";

function WikiCard({ link, image, gradient, heading, description }) {
  return (
    <Link href={link} passHref>
      <a sx={{ display: "block", color: "white", textDecoration: "none" }}>
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
          <Image src={image} alt={heading} height="128px" width="128px" />
          <div sx={{ ml: 3 }}>
            <Heading as="h2" sx={{ fontSize: 5, mb: 2 }}>
              {heading}
            </Heading>
            <Text>{description}</Text>
          </div>
        </Flex>
      </a>
    </Link>
  );
}
export default WikiCard;
