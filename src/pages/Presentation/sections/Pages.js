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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="LOCATION"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            HEAD OFFICE
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {/* The easiest way to get started is to use one of our
            <br /> pre-built. */}
            METLAND CILEUNGSI JL. ASTELIA 1 BLOK AB NO. 15/15,
            PASIR ANGIN, CILEUNGSI, BOGOR, JABAR 16820 PH. 021 82482827
          </MKTypography>
        </Grid>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.087873687345!2d106.99346897777097!3d-6.382658858433272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69958b9c9f3f49%3A0x99173dea2eff6188!2sJl.%20Astelia%201%20Blok%20AB%20No.10%2C%20Pasir%20Angin%2C%20Kec.%20Cileungsi%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016820!5e0!3m2!1sid!2sid!4v1704815390890!5m2!1sid!2sid" width="100%" height="250" style={{ border: 0 }} allowfullscreen loading="lazy" aria-hidden="false" ></iframe>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="LOCATION WORKSHOP"
                container
                sx={{ mb: 2 }}
              />
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Workshop 1
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                {/* Our capabilites are here to deliver on site support in the mining area. We have
                crafted an extensive portfolio of products, services, and specialized projects
                designed to cater to our customers storage tank nedds. Our storage tank are
                extremely durable, which means that our tanks have a longer life. */}
                Jl. Narogong Raya Km. 16.5 Cileungsi
              </MKTypography>
              {/* <Container sx={{ mt: { xs: 2, lg:  } }}> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126884.30150631366!2d106.9698054!3d-6.376643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69940f7ba54b61%3A0x1d54466bdcc16e78!2sWorkshop%20PT.%20Buana%20Megah%20Teknik!5e0!3m2!1sid!2sid!4v1704814125729!5m2!1sid!2sid" width="100%" height="300" style={{ border: 0 }} allowfullscreen loading="lazy" aria-hidden="false"  ></iframe>
              {/* </Container> */}
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Workshop 2
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Jl. MT Haryono no. 53, Setu - Bekasi
              </MKTypography>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126884.30150631366!2d106.9698054!3d-6.376643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69940f7ba54b61%3A0x1d54466bdcc16e78!2sWorkshop%20PT.%20Buana%20Megah%20Teknik!5e0!3m2!1sid!2sid!4v1704814125729!5m2!1sid!2sid" width="100%" height="300" style={{ border: 0 }} allowfullscreen loading="lazy" aria-hidden="false"  ></iframe>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
