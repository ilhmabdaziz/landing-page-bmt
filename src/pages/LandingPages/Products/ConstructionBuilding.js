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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Products page sections
import Profile from "pages/LandingPages/Products/sections/Profile";
import Posts from "pages/LandingPages/Products/sections/Posts";
import Contact from "pages/LandingPages/Products/sections/Contact";
import Footer from "pages/LandingPages/Products/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/BMT/img-use/construction-building/1.JPG";
import DefaultFooter from "examples/Footers/DefaultFooter";

import img1 from "assets/images/BMT/img-use/construction-building/1.JPG";
import img2 from "assets/images/BMT/img-use/construction-building/2.JPG";
import img3 from "assets/images/BMT/img-use/construction-building/3.JPG";
import img4 from "assets/images/BMT/img-use/construction-building/IMG_5055.JPG";

function ConstructionBuilding() {
  const title = "Construction Building";
  const description = `Building construction means generally the construction of sheltered enclosures with walk-in access for the purpose of housing persons, machinery, equipment, or supplies. It includes all construction of such structures, the installation of utilities and the installation of equipment, both above and below grade level as well as incidental grading, utilities and paving, unless there is an established area practice to the contrary. Additionally, such structures need not be "habitable" to be building construction.`;
  const products = [
    {
      id: 1,
      img: img1,
      type: "img",
      title: "Rover raised $65 million",
      description:
        "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ...",
      lg: 3,
    },
    {
      id: 2,
      img: img2,
      type: "img",
      title: "MateLabs machine learning",
      description:
        "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
      lg: 3,
    },
    {
      id: 3,
      img: img3,
      type: "img",
      title: "Flexible work hours",
      description:
        "Rather than worrying about switching offices every couple years, you stay in the same place.",
      lg: 3,
    },
    {
      id: 4,
      img: img4,
      type: "img",
      title: "Framework",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      lg: 3,
    },
  ];
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      /> */}
      <DefaultNavbar
        routes={routes}
        action={{
          type: "logo",
          route: "/",
          // label: "free download",
          // color: "white",
          variant: "text",
        }}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile title={title} description={description} />
          <Posts data={products} />
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default ConstructionBuilding;
