/** @jsxImportSource theme-ui */
import { Box, Container, Flex, Grid, Heading, Paragraph, Text, Button } from "theme-ui";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";
import InvitationSplashImage from "../../assets/invitation-splash.png";
import EmblemMCImage from "../../assets/emblem-mc.png";
import ChunkClaimImage from "../../assets/chunk-claim.png";
import CloudsMiscImage from "../../assets/clouds-misc.png";
import WorldgenPackImage from "../../assets/worldgen-pack.png";

import { keyframes } from "@emotion/react";
import MainLayout from "../../internals/MainLayout";
import Yourspace from "../../components/Yourspace";

import CID1 from "../../assets/ref/1.png";
import CID2 from "../../assets/ref/2.png";
import CID3 from "../../assets/ref/3.png";
import CID4 from "../../assets/ref/4.png";
import CID5 from "../../assets/ref/5.png";
import CID6 from "../../assets/ref/6.png";

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
          background: `url(${image.src}) center center no-repeat`,
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

function SignInButton() {
  return (
    <Button sx={{ cursor: "pointer" }} onClick={() => signIn("discord", { callbackUrl: "/mc" })}>
      Sign in with Discord
    </Button>
  );
}

const singlePixelShadow = "1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black ,1px -1px 0px black";

function MCHomeNotSignedIn() {
  return (
    <MainLayout noPadding>
      <div sx={{ fontSize: 4, color: "white" }}>
        <div
          sx={{
            background: `url(${InvitationSplashImage.src}) center no-repeat`,
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
          <div
            sx={{
              position: "absolute",
              width: ["200px", "350px", "500px"],
              opacity: "30%",
              animation: `${bounceAnimationSubtle} 2s ease-in-out alternate infinite`,
              display: "block",
            }}
          >
            <Image src={EmblemMCImage} alt="Emblem MC" layout="responsive" priority />
          </div>

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
                textShadow: "2px 2px 0px black, -2px 2px 0px black, -2px -2px 0px black ,2px -2px 0px black",
              }}
            >
              the lounge SMP server
            </Heading>
            <Text
              // as="h2"
              variant="display"
              sx={{
                textShadow: [singlePixelShadow, "5px 5px 0px black, -5px 5px 0px black, -5px -5px 0px black ,5px -5px 0px black"],
              }}
            >
              season 6
            </Text>

            <div sx={{ mt: 5 }}>
              <SignInButton />
            </div>

            <Text
              sx={{
                textShadow: "1px 1px 0px black, -1px 1px 0px black, -1px -1px 0px black ,1px -1px 0px black",
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
          <ModifiedH2>latest vanilla release</ModifiedH2>
          <Paragraph mb={4}>lounge mutuals only. Sign in to see if you're on the allowlist.</Paragraph>
          <SignInButton />

          <Paragraph mt={4}>Or ask for the IP from anyone you recognize below!</Paragraph>

          <Grid gap={4} columns={[1, 2, null, 3]} sx={{ justifyItems: "center", mb: 5 }}>
            <Image width="200px" height="200px" src={CID1} alt="1" layout="fixed" />
            <Image width="200px" height="200px" src={CID2} alt="2" layout="fixed" />
            <Image width="200px" height="200px" src={CID3} alt="3" layout="fixed" />
            <Image width="200px" height="200px" src={CID4} alt="4" layout="fixed" />
            <Image width="200px" height="200px" src={CID5} alt="5" layout="fixed" />
            <Image width="200px" height="200px" src={CID6} alt="6" layout="fixed" />
          </Grid>
        </CenterSectionBox>
      </div>
    </MainLayout>
  );
}

function MCHome() {
  const { data: session, status } = useSession();
  if (session) {
    return <Yourspace />;
  } else {
    return <MCHomeNotSignedIn />;
  }
}

export default MCHome;
