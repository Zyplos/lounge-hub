/** @jsxImportSource theme-ui */
import { useState, useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../../internals/MainLayout";
import LoadingFullBox from "../../components/LoadingFullBox";
import DiscordIcon from "../../assets/discord-icon.svg";
import CBOAIcon from "../../assets/cbOA-icon.svg";
import { Heading, Box, Text, Grid, Container, Message, Paragraph, Divider, Button } from "theme-ui";
import useSWR from "swr";
import MinecraftContext from "../../internals/MinecraftContext";
import MinecraftStatus from "../../components/MinecraftStatus";
import { keyframes } from "@emotion/react";

const SPECTRAAnimation = keyframes({
  from: { filter: "hue-rotate(0deg)" },
  to: { filter: "hue-rotate(-360deg)" },
});

import CID1 from "../../assets/ref/1.png";
import CID2 from "../../assets/ref/2.png";
import CID3 from "../../assets/ref/3.png";
import CID4 from "../../assets/ref/4.png";
import CID5 from "../../assets/ref/5.png";
import CID6 from "../../assets/ref/6.png";
import ThemedRouterButtonLink from "../../components/ThemedRouterButtonLink";
import FullBox from "../../components/FullBox";

const UHEX = {
  0: "#aaaaaa",
  1: "#9b6464",
  2: "#ff3e3e",
  3: "linear-gradient(148deg, rgba(251,176,59,1) 0%, rgba(255,62,62,1) 100%);",
  4: "linear-gradient(45deg, rgba(181, 212, 239, 1) 0%, rgba(213, 232, 191, 1) 25.28%, rgba(255, 251, 200, 1) 50%, rgba(253, 225, 212, 1) 75.84%, rgba(249, 201, 222, 1) 98.88%)",
};

const Bar = ({ l }) => {
  const styles = { width: "25%", height: "5px", background: UHEX[l] || "black", display: "inline-block", mx: "2px" };
  if (l === 4) styles.animation = `${SPECTRAAnimation} 1s infinite linear`;
  return <span sx={styles}></span>;
};

function DiscordHeader({ session, cbData }) {
  return (
    <Box color="white" bg="backgroundSecondary" mb={4}>
      <div
        sx={{
          // height: "300px",
          display: ["block", null, null, "flex"],
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          p: 5,
        }}
      >
        <div
          sx={{
            mr: 4,
            mb: 3,
            position: "relative",
            "& img": {
              border: `14px solid ${cbData?.hex || "#111"} !important`,
              borderRadius: "100%",
            },
          }}
        >
          <Image src={session.user.image} alt={"me's portrait"} width="200px" height="200px" layout="fixed" priority />
        </div>

        <Grid gap={2}>
          <Heading as="h1" variant="display2">
            {cbData?.friendlyName || session.user.name}
          </Heading>
          <Text sx={{ fontSize: 4 }}>
            <DiscordIcon
              sx={{
                height: (theme) => theme.fontSizes[5],
                width: (theme) => theme.fontSizes[5],
                fill: "white",
                verticalAlign: "text-bottom",
                mr: 2,
              }}
            />
            {session.user.name}
          </Text>

          <ThemedRouterButtonLink
            href={"/api/auth/signout"}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            sx={{ width: "fit-content" }}
          >
            Sign out
          </ThemedRouterButtonLink>
        </Grid>

        {cbData?.cb && (
          <div
            sx={{ display: "flex", width: "100%", background: "#111", borderRadius: "20px", justifyContent: "space-around", position: "absolute", bottom: 0, left: 0 }}
          >
            <Bar l={cbData.cb.U1} />
            <Bar l={cbData.cb.U3} />
            <Bar l={cbData.cb.U4} />
            <Bar l={cbData.cb.U5} />
          </div>
        )}
      </div>
    </Box>
  );
}

function Yourspace() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const { data: cbData, error: cbError } = useSWR(loading || !session ? null : "/api/cb/user", {
    refreshInterval: 0,
  });

  const minecraftData = useContext(MinecraftContext);
  const vanilla = minecraftData ? minecraftData.vanilla : null;
  const modded = minecraftData ? minecraftData.modded : null;

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <MainLayout noPadding>
        <FullBox useDims={true}>
          <Heading as="h1">yourspace</Heading>
          <p>
            {/* <Link
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <a>You must be signed in to view this page</a>
          </Link> */}
            <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
          </p>
        </FullBox>
      </MainLayout>
    );
  }

  if (cbError || cbData?.p?.v === "X") {
    return (
      <MainLayout noPadding>
        <DiscordHeader session={session} cbData={cbData} />

        <Container>
          <Heading as="h1">oops</Heading>
          <Paragraph>Either no connections could be found or an error occurred.</Paragraph>
          <Paragraph>Ask for the IP if you recognize any of the people below!</Paragraph>

          <Grid gap={4} columns={[1, 2, null, 3]} sx={{ justifyItems: "center", mb: 5 }}>
            <Image width="200px" height="200px" src={CID1} alt="1" layout="fixed" />
            <Image width="200px" height="200px" src={CID2} alt="2" layout="fixed" />
            <Image width="200px" height="200px" src={CID3} alt="3" layout="fixed" />
            <Image width="200px" height="200px" src={CID4} alt="4" layout="fixed" />
            <Image width="200px" height="200px" src={CID5} alt="5" layout="fixed" />
            <Image width="200px" height="200px" src={CID6} alt="6" layout="fixed" />
          </Grid>
        </Container>
      </MainLayout>
    );
  }

  if (!cbData) {
    return <LoadingFullBox text="Checking..." />;
  }

  // TODO youre right this could be better
  function PComponent() {
    if (cbData.p.v === "M") {
      return (
        <div>
          <Grid>
            <Paragraph variant="muted">&#47;&#47; zyfriend not found in the lounge</Paragraph>
            <Heading as="h1">
              <CBOAIcon height="32px" /> Hey!
            </Heading>
            <Paragraph>Seems it's been a while! Feel free to say hello, I'd love to reconnect! Always nice to see old friends.</Paragraph>
            <Text>- zy</Text>
          </Grid>
        </div>
      );
    } else if (cbData.p.v === "MJ") {
      return (
        <div>
          <Grid>
            <Paragraph variant="muted">&#47;&#47; user not found in the lounge</Paragraph>
            <Heading as="h1">
              <CBOAIcon height="32px" /> Hey!
            </Heading>
            <Paragraph>Seems it's been a while! Feel free to say hello, I'd love to reconnect! Always nice to see old friends.</Paragraph>
            <Paragraph>
              Feel free to join the lounge! It's seasonally active with Minecraft updates. I usually post server updates there and there's a channel that let's you chat
              ingame. <a href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORDINVITE}`}>Join here</a> if you'd like!
            </Paragraph>
            <Text>- zy</Text>
          </Grid>
        </div>
      );
    } else if (cbData.p.v === "J") {
      return (
        <div>
          <Grid>
            <Paragraph variant="muted">&#47;&#47; user not found in the lounge</Paragraph>
            <Heading as="h1">
              <DiscordIcon height="32px" fill="white" /> Hey!
            </Heading>
            <Paragraph>
              Feel free to join the lounge! It's seasonally active with Minecraft updates. I usually post server updates there and there's a channel that let's you chat
              ingame. <a href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORDINVITE}`}>Join here</a> if you'd like!
            </Paragraph>
            <Text>- zy</Text>
          </Grid>
        </div>
      );
    } else {
      return <p>what</p>;
    }
  }

  return (
    <MainLayout noPadding>
      <DiscordHeader session={session} cbData={cbData} />
      <Container pb={5}>
        <Message variant="primary" mb={3}>
          Under construction for 1.18.
        </Message>

        {cbData && cbData.p && <PComponent />}

        <Divider my={4} />

        <Paragraph>Feel free to join the server at:</Paragraph>
        <Heading as="h1" mb={3}>
          {process.env.NEXT_PUBLIC_MCIP}
        </Heading>
        <MinecraftStatus data={vanilla} ip="???" />

        <Paragraph mt={5}>Sometimes we'll have a modded server online. Join that at:</Paragraph>
        <Heading as="h1" mb={3}>
          {process.env.NEXT_PUBLIC_MCMODDEDIP}
        </Heading>
        <MinecraftStatus data={modded} ip="???" />
      </Container>
    </MainLayout>
  );
}

export default Yourspace;
