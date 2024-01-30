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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          {/* <Grid item xs={12} md={3}> */}
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              title="Proyek Selesai"
              // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description=""
            />
          </Grid>
          {/* <Grid item xs={12} md={3} display="flex"> */}
          {/* <Grid item xs={12} md={3}> */}
          {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
          {/* <DefaultCounterCard
              count={80}
              suffix="+"
              title="Current Projects"
              // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description=""
            /> */}
          {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}
          {/* </Grid> */}
          <Grid item xs={12} md={6}>
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Karyawan"
              // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description=""
            />
          </Grid>
          {/* <Grid item xs={12} md={3} display="flex"> */}
          {/* <Grid item xs={12} md={3}> */}
          {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
          {/* <DefaultCounterCard
              count={50}
              suffix="+"
              title="Certifications"
              // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description=""
            /> */}
          {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
