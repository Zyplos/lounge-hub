import { Grid, Text, Link, Heading, Message } from "theme-ui";
import Image from "next/image";
import ArticleLayout from "../../internals/ArticleLayout";
import FabricInstallerScreenshot from "../../assets/fabric-installer-screenshot.png";
import CurseforgePlasmoPage from "../../assets/curseforge-plasmo-page.png";
import RunScreenshot from "../../assets/run-screenshot.png";
import LauncherScreenshot from "../../assets/launcher-screenshot.png";

function ProximityChat() {
  return (
    <ArticleLayout title="Proximity Voice Chat">
      <Grid>
        <Text>
          The vanilla server has a feature that allows players to voice chat with each other within a certain radius. This is enabled by{" "}
          <Link href="https://www.curseforge.com/minecraft/mc-mods/plasmo-voice-client" target="_blank">
            Plasmo Voice
          </Link>
          , a mod available for both Fabric and Forge. This page will guide you through the process of setting up Fabric and Plasmo Voice on your client. The process is
          relatively simple and should not take more than a few minutes.
        </Text>

        <Heading>Installing Fabric</Heading>
        <Text>
          Head on over to <Link href="https://fabricmc.net/use/">fabricmc.net/use</Link> to get the Fabric Installer. Download the Windows installer (or the universal
          installer if you're on any other platform) and open the file. You should be greeted by something that looks like this:
        </Text>
        <Image src={FabricInstallerScreenshot} alt="Screenshot of the Fabric installer" layout="responsive" />
        <Message variant="primary">
          The Fabric installer will list the default location where Minecraft is usually installed. This is usually fine unless you've manually changed it. Regardless,
          copy this text containing the install location, you'll need it later.
        </Message>
        <Text>The default options should be fine. Make sure the Minecraft version is the same as what the server is on. Click install.</Text>
        <Text>
          Congrats! You now have Fabric installed. Fabric has plenty of neat and useful clientside mods you can install, but for now we'll be focusing on Plasmo Voice.
        </Text>

        <Heading>Downloading Plasmo Voice</Heading>
        <Text>
          Go to the{" "}
          <Link href="https://www.curseforge.com/minecraft/mc-mods/plasmo-voice-client" target="_blank">
            Plasmo Voice mod page
          </Link>{" "}
          to download the mod. The download button for the mod should be on the right side of the page. You might have to scroll a bit down. Click the orange button next
          to the file name. Make sure it corresponds to the Minecraft version the server is running.
        </Text>
        <Image src={CurseforgePlasmoPage} alt="Screenshot of the Plasmo Voice mod page" layout="responsive" />
        <Text>You should have downloaded a .jar file. This file will have to be moved to the "mods" folder in your Minecraft appdata folder.</Text>
        <Text>
          For Windows users, a quick way to get there is through the "Run" dialog. You can press <kbd>WINDOWS KEY</kbd> + <kbd>R</kbd> to bring this up. Paste the install
          location from the previous step into the dialog and press "OK".
        </Text>
        <Text>
          If you don't have this text in your clipboard, you can also type <code>%appdata%/.minecraft</code> into the dialog to get there (assuming you haven't messed
          with Minecraft's default install location and that you installed Fabric there).
        </Text>
        <Image src={RunScreenshot} alt="Screenshot of the Run dialog" layout="responsive" />
        <Text>
          You should be in the directory where Fabric was installed. There should also be a folder called "mods" in that directory. If there isn't one, create it. Move
          the Plasmo Voice .jar file into that folder.
        </Text>
        <Text>Congrats! You now have Plasmo Voice installed. You can now start using proximity voice chat on the server.</Text>

        <Heading>Using Plasmo Voice</Heading>
        <Text>Open the Minecraft Launcher, making sure you're using the Fabric profile that should have automatically have been made.</Text>
        <Image src={LauncherScreenshot} alt="Screenshot of the Launcher" layout="responsive" />
        <Text>
          Once you're in the vanilla server you can configure Plasmo Voice by pressing <kbd>V</kbd>. Change settings as you wish.
        </Text>
        <Text>
          Push to talk is on by default, the default key being <kbd>LEFT ALT</kbd>. You can mute your mic by pressing <kbd>M</kbd>.
        </Text>
        <Text>
          One thing of note is the sound occlusion setting. As the mod page states, enabling this option will muffle the sound of players if blocks are in the way.
        </Text>
        <Text>Once you're all set, other players with the client installed will be able to talk to you if you're within a close radius of them.</Text>
      </Grid>
    </ArticleLayout>
  );
}

export default ProximityChat;
