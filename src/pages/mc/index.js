import { Text } from "@theme-ui/components";
import { useEffect } from "react";
import FullBox from "../../components/FullBox";

function MCHome() {
  // https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  return (
    <FullBox useDims>
      <Text>still making the page have this in the meantime</Text>
      <blockquote class="twitter-tweet" data-theme="dark">
        <p lang="de" dir="ltr">
          mine craft Super msrio
        </p>
        &mdash; Punished L*nus (@LinusTechTip_){" "}
        <a href="https://twitter.com/LinusTechTip_/status/1245083702981464065?ref_src=twsrc%5Etfw">
          March 31, 2020
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </FullBox>
  );
}

export default MCHome;
