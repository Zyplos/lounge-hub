import Image from "next/image";
import Divider from "../Divider";
import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles["navbar-wrapper"]}>
      <Image src="/images/emblem.png" alt={"Logo"} width={64} height={64} />
      <Divider />
      <Link href="/" className={styles["nav-item"]}>
        <Image src="/images/icons/home-icon.png" alt="Home Icon" width={32} height={32} />
      </Link>
      <Link href="/" className={styles["nav-item"]}>
        <Image src="/images/icons/wiki-icon.png" alt="Wiki Icon" width={32} height={32} />
      </Link>
      <Link href="/" className={styles["nav-item"]}>
        <Image src="/images/icons/block-icon.png" alt="Minecraft Icon" width={32} height={32} />
      </Link>
      <Link href="/" className={styles["nav-item"]}>
        <Image src="/images/icons/player-icon.png" alt="Player Icon" width={32} height={32} />
      </Link>
      <Link href="/" className={styles["nav-item"]}>
        <Image src="/images/icons/compass-icon.png" alt="Compass Icon" width={32} height={32} />
      </Link>
      <Divider />
      <Image src="/images/icons/server-vanilla-icon.png" alt="Vanilla Server Icon" width={32} height={32} className={styles["nav-item"]} />
      <Image src="/images/icons/server-modded-icon.png" alt="Modded Server Icon" width={32} height={32} className={styles["nav-item"]} />
    </nav>
  );
}
