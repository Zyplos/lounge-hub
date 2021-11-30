import { Button, Link as ThemedLink } from "theme-ui";
import Link from "next/link";

function ThemedRouterButtonLink({ href, children, ...props }) {
  return (
    <Link href={href} passHref>
      <Button {...props} as={ThemedLink}>
        {children}
      </Button>
    </Link>
  );
}

export default ThemedRouterButtonLink;
