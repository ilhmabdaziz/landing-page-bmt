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
import bgImage from "assets/images/BMT/img-use/ducting-insulation/IMG_5052.JPG";
import DefaultFooter from "examples/Footers/DefaultFooter";

import img1 from "assets/images/BMT/img-use/ducting-insulation/IMG_5050.JPG";
import img2 from "assets/images/BMT/img-use/ducting-insulation/IMG_5051.JPG";
import img3 from "assets/images/BMT/img-use/ducting-insulation/IMG_5052.JPG";
import img4 from "assets/images/BMT/img-use/ducting-insulation/IMG_5053.JPG";

function DuctingInsulation() {
  const title = "Ducting & Insulation";
  const description = `The fibrous glass duct system is used to conserve heating
and cooling energy and to control duct-borne noise in
commercial, institutional, or residential heating, ventilating,
and air-conditioning ductwork operating in the range of + 2
in. w.g. (+ 500 Pa) static pressure, up to at least 5,000 fpm
(25.4 m/sec) internal air velocity, and internal air
temperature between 40˚F (4˚C) and 250˚F (121˚C). Ducts
are only for indoor use and should be located in areas
where ambient temperature does not exceed 150˚F (66˚C).
The fibrous glass duct system is normally made up of
nominal four foot (1.2m) modules fabricated from 1, 11
/2,
or 2 in. (25, 38, or 51mm) thick, flat fibrous glass duct
board stock having a factory-applied reinforced aluminum
exterior air barrier finish. Duct system modules are
fabricated using either specially designed hand tools or
grooving and closure machines. Duct fittings such as tees,
offsets, elbows, and transitions are also fabricated from
these modules or from flat duct board stock.`;
  const products = [
    {
      id: 1,
      img: img1,
      type: "img",
      title: "Fibrous glass duct system",
      description:
        "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ...",
      lg: 3,
    },
    {
      id: 2,
      img: img2,
      type: "img",
      title: "Sheet metal ducts lined ",
      description:
        "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ...",
      lg: 3,
    },
    {
      id: 3,
      img: img4,
      type: "img",
      title: "Flexible Blanket",
      description:
        "Rather than worrying about switching offices every couple years, you stay in the same place.",
      lg: 2.3,
    },
    {
      id: 4,
      img: img3,
      type: "img",
      title: "Insulation Boards",
      description: "Duct board products are available with coated or faced airstream surfaces.",
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

export default DuctingInsulation;
