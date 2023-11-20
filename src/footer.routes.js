// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
// import logoCT from "assets/images/logo-ct-dark.png";
import logo from "assets/images/BMT/logo1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "PT Buana Megah Teknik",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "../presentation" },
        { name: "freebies", href: "/presentation" },
        { name: "premium tools", href: "/presentation" },
        { name: "blog", href: "/presentation" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "/presentation" },
        { name: "bits & snippets", href: "/presentation" },
        { name: "affiliate program", href: "/presentation" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/presentation" },
        { name: "knowledge center", href: "/presentation" },
        { name: "custom development", href: "/presentation" },
        { name: "sponsorships", href: "/presentation" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/presentation" },
        { name: "privacy policy", href: "/presentation" },
        { name: "licenses (EULA)", href: "/presentation" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="/presentation"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        PT Buana Megah Teknik
      </MKTypography>
      .
    </MKTypography>
  ),
};
