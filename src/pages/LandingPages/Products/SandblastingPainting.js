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
import bgImage from "assets/images/BMT/img-use/sandblasting-painting/IMG_5048.JPG";
import DefaultFooter from "examples/Footers/DefaultFooter";

import img1 from "assets/images/BMT/img-use/sandblasting-painting/IMG_5046.JPG";
import img2 from "assets/images/BMT/img-use/sandblasting-painting/IMG_5047.JPG";
import img3 from "assets/images/BMT/img-use/sandblasting-painting/IMG_5048.JPG";
import img4 from "assets/images/BMT/img-use/sandblasting-painting/IMG_5049.JPG";

function SandblastingPainting() {
  const title = "Sandblasting & Painting";
  const description = `Sandblasting and painting involves a little more work and includes pre-treatment, application and curing. Sandblasting cleans the surface of the project to remove any debris, grease or previous paint coatings, using an abrasive medium. This technique creates small scratches in the surface, which helps paint cover and bond with the material. Without sandblasting, paint may be more prone to chips and cracks. Sandblasting also strips the rust off of steel, giving it a clean slate for the next protective coating.`;
  const products = [
    {
      id: 1,
      img: img1,
      type: "img",
      title: "Sandblasting and Painting",
      description:
        "Chemical resistance: Certain chemicals can wreak havoc on your finish, but sandblasted and painted finishes are resistant to chemicals and are less likely to chip, crack or wear from contact.",
      lg: 3.1,
    },
    {
      id: 2,
      img: img2,
      type: "img",
      title: "Painting Alone",
      description:
        "Speed: Pieces that are sandblasted and painted dry faster than wet paint, so the entire process happens more quickly. Once the pieces cool, they’re ready to be handled or machined as well, so there’s less downtime.",
      lg: 2.53,
    },
    {
      id: 3,
      img: img3,
      type: "img",
      title: "Powder Coating",
      description:
        "Cost-effective: The sophisticated system of sandblasting and painting prevents overspray, so you get more yield from your paint and waste less.",
      lg: 3.31,
    },
    {
      id: 4,
      img: img4,
      type: "img",
      title: "Flexible work hours",
      description:
        "Resistant to corrosion: Because of the precise primer and paint application, a single coat offers the protection of several coats of traditional paint, without the risk of chips and cracks. Because of this, a sandblasted and painted piece can better withstand the extreme outdoor environment than traditional paint",
      lg: 2.87,
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

export default SandblastingPainting;
