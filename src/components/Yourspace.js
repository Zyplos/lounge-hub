/** @jsxImportSource theme-ui */
import { useState, useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import MainLayout from "../internals/MainLayout";
import LoadingFullBox from "./LoadingFullBox";
import DiscordIcon from "../assets/discord-icon.svg";
import CBOAIcon from "../assets/cbOA-icon.svg";
import { Heading, Box, Text, Grid, Container, Message, Paragraph, Divider, Button } from "theme-ui";
import useSWR from "swr";
import { useMinecraftData } from "../internals/MinecraftContext";
import MinecraftStatus from "./MinecraftStatus";

import CID1 from "../assets/ref/1.png";
import CID2 from "../assets/ref/2.png";
import CID3 from "../assets/ref/3.png";
import CID4 from "../assets/ref/4.png";
import CID5 from "../assets/ref/5.png";
import CID6 from "../assets/ref/6.png";
import InvitationSplashImage from "../assets/invitation-splash.png";
import ThemedRouterButtonLink from "./ThemedRouterButtonLink";
import FullBox from "./FullBox";

function DiscordHeader({ session, cbData }) {
  return (
    <Box
      color="white"
      mb={4}
      sx={{ background: `url(${session.user.banner || InvitationSplashImage.src}) center no-repeat`, backgroundSize: "cover", backdropFilter: "blur(10px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        sx={{
          // height: "300px",
          display: ["block", null, null, "flex"],
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          p: 5,
          zIndex: 5,
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
          <Image src={session.user.image} alt={"your profile picture"} width="200px" height="200px" layout="fixed" priority />
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

  const minecraftData = useMinecraftData();
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
            <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
          </p>
        </FullBox>
      </MainLayout>
    );
  }

  if (cbError || cbData?.cb?.p?.v === "X" || cbData?.cb.error) {
    return (
      <MainLayout noPadding>
        <DiscordHeader session={session} cbData={cbData.cb} />

        <Container>
          <Heading as="h1">oops</Heading>
          <Paragraph>Either no connections could be found or an error occurred.</Paragraph>
          <Paragraph>Ask for the IP from anyone you recognize below</Paragraph>

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
    if (!cbData.d) {
      if (cbData.cb.p.v === "M") {
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
      } else if (cbData.cb.p.v === "MJ") {
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
      } else if (cbData.cb.p.v === "J") {
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
    } else {
      return <></>;
    }
  }

  return (
    <MainLayout noPadding>
      <DiscordHeader session={session} cbData={cbData.cb} />
      <Container pb={5}>
        <Message variant="primary" mb={3}>
          indev
        </Message>
        {cbData && cbData.cb.p && <PComponent />}
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
