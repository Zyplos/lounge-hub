/** @jsxImportSource theme-ui */
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Paragraph,
  Text,
} from "theme-ui";
import { Link } from "react-router-dom";
import InvitationSplashImage from "../../assets/invitation-splash.png";
import EmblemMCImage from "../../assets/emblem-mc.png";
import ChunkClaimImage from "../../assets/chunk-claim.png";
import CloudsMiscImage from "../../assets/clouds-misc.png";
import WorldgenPackImage from "../../assets/worldgen-pack.png";

import CID1 from "../../assets/ref/1.png";
import CID2 from "../../assets/ref/2.png";
import CID3 from "../../assets/ref/3.png";
import CID4 from "../../assets/ref/4.png";
import CID5 from "../../assets/ref/5.png";
import CID6 from "../../assets/ref/6.png";

import { keyframes } from "@emotion/react";

const bounceAnimation = keyframes({
  from: { bottom: "32px" },
  to: { bottom: "48px" },
});

const bounceAnimationSubtle = keyframes({
  from: { transform: "translateY(-5px)" },
  to: { transform: "translateY(5px)" },
});

function ModifiedH2({ children }) {
  return (
    <Heading variant="styles.h1" as="h2" mb={4}>
      {children}
    </Heading>
  );
}

function SectionBox({ heading, image, children, isAlt, ...props }) {
  return (
    <Flex bg="#16161b" sx={{ flexWrap: "wrap" }} {...props}>
      <Grid
        sx={{
          width: ["100%", null, "50%"],
          py: [5, 6],
          px: 5,
          order: [2, null, !isAlt ? 1 : 2],
        }}
      >
        <Heading variant="styles.h1" as="h2">
          {heading}
        </Heading>
        {children}
      </Grid>
      <div
        sx={{
          background: `url(${image}) center center no-repeat`,
          backgroundSize: "cover",
          flexGrow: "1",
          width: ["100%", null, "auto"],
          height: ["300px", null, "auto"],
          order: [1, null, !isAlt ? 2 : 1],
        }}
      ></div>
    </Flex>
  );
}

function CenterSectionBox({ children }) {
  return (
    <Box py={5} px={4} bg="#131313" sx={{ textAlign: [null, "center"] }}>
      <Container>{children}</Container>
    </Box>
  );
}

const singlePixelShadow =
  "1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black ,1px -1px 0px black";

function MCHome() {
  return (
    <div sx={{ fontSize: 4, color: "white" }}>
      <div
        sx={{
          background: `url(${InvitationSplashImage}) center no-repeat`,
          backgroundSize: "cover",
          position: "relative",
          padding: 5,

          display: "flex",
          flexDirection: "column",
          height: "100vh",
          maxHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={EmblemMCImage}
          alt="Emblem MC"
          sx={{
            position: "absolute",
            width: ["200px", "350px", "500px"],
            opacity: "30%",
            animation: `${bounceAnimationSubtle} 2s ease-in-out alternate infinite`,
          }}
        />
        <div
          sx={{
            fontFamily: "Minecraft,monospace",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Heading
            as="h1"
            sx={{
              textShadow:
                "2px 2px 0px black, -2px 2px 0px black, -2px -2px 0px black ,2px -2px 0px black",
            }}
          >
            the lounge SMP server
          </Heading>
          <Text
            // as="h2"
            variant="display"
            sx={{
              textShadow: [
                singlePixelShadow,
                "5px 5px 0px black, -5px 5px 0px black, -5px -5px 0px black ,5px -5px 0px black",
              ],
            }}
          >
            season 5
          </Text>

          <Text
            sx={{
              textShadow:
                "1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black ,1px -1px 0px black",
              position: "absolute",
              bottom: 4,
              left: "50%",
              transform: "translateX(-50%)",
              mx: "auto",
              fontSize: 5,
              animation: `${bounceAnimation} 1s ease-in-out alternate infinite`,
            }}
          >
            scroll down!
          </Text>
        </div>
      </div>

      <CenterSectionBox>
        <ModifiedH2>You're invited!</ModifiedH2>
        <Paragraph>
          This season we're inviting friends of friends to join us with one of
          Minecraft's most impactful updates! We've got some stuff lined up for
          season 5.
        </Paragraph>
      </CenterSectionBox>

      <SectionBox
        heading="Mojang's 1.18 Worldgen Pack"
        image={WorldgenPackImage}
        isAlt
      >
        <Text>
          Ready to go with the prototype worldgen that will be in 1.18. Have fun
          building with the new height limits!
        </Text>
      </SectionBox>

      <SectionBox heading="Land Claims" image={ChunkClaimImage}>
        <Text>
          Let others know who owns the land by claiming chunks in the world!
          Your claims will show up to people who walk into your territory, on{" "}
          <Link to="/mc/player/Zyplos">your profile</Link>, and can be viewed by
          players on the server map.{" "}
          <Link to="/mc/chunk/7b1803e0-1cfa-443d-9948-ebaebd2b73e7/-1/21">
            A visitor's log
          </Link>{" "}
          is kept that you can view at any time.
        </Text>
      </SectionBox>

      <SectionBox heading="The Aether" image={CloudsMiscImage} isAlt>
        <Text>
          We added a new dimension! Feel free to explore a sky dimension full of
          floating islands. Build bases, set spawnpoints, and claim chunks as
          you wish.
        </Text>
      </SectionBox>

      <CenterSectionBox>
        <ModifiedH2>Ready to join?</ModifiedH2>

        <Paragraph>
          Reach out to any of the people below if you recognize them, they have
          the IP!
        </Paragraph>
        <Grid
          gap={4}
          columns={[1, 2, null, 3]}
          sx={{ justifyItems: "center", mb: 5 }}
        >
          <Image width="200px" src={CID1} alt="1" />
          <Image width="200px" src={CID2} alt="2" />
          <Image width="200px" src={CID3} alt="3" />
          <Image width="200px" src={CID4} alt="4" />
          <Image width="200px" src={CID5} alt="5" />
          <Image width="200px" src={CID6} alt="6" />
        </Grid>
        <Paragraph pb={[4, 6]}>
          The server opens as soon as the update releases, June 8th.
        </Paragraph>
      </CenterSectionBox>
    </div>
  );
}

export default MCHome;
