/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage1 from "../../../../assets/images/BMT/img-use/las1.jpg";
import { Link } from "react-router-dom";

function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      minHeight="45vh"
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
            // )}, url(${bgImage})`,
          )}, url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by PT Buana Megah Teknik
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={20}>
            Engineering & Construction
          </MKTypography>
          {/* <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From colors, cards, typography to complex elements, you will find the full
            documentation. Play with the utility classes and you will create unlimited combinations
            for our components.
          </MKTypography> */}
          {/* <Link to={"/about-us"}> */}
          <MKTypography
            component="a"
            // href="../presentation"
            href="/about-us"
            // target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read more About us <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
          {/* </Link> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
