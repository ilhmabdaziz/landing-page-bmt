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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/BMT/banner24.jpg";
// import bgBack from "assets/images/BMT/banner1.jpeg";
import bgFront from "assets/images/BMT/img-use/las1.jpg";
import bgBack from "assets/images/BMT/img-use/las2.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Visi
                    {/* <br /> */}
                    {/* Material Kit */}
                  </>
                }
                // description="All the MUI components that you need in a development have been re-design with the new look."
                description="Menjadi perusahaan yang terdepan dalam Industri Konstruksi."
              />
              <RotatingCardBack
                image={bgBack}
                title="Misi"
                description="Menciptakan nilai perusahaan dari hasil produk yang berkualitas, Mutu tinggi, modernisasi, dan dapat dibanggakan."
                action={{
                  type: "internal",
                  // route: "/sections/page-sections/page-headers",
                  route: "/about-us",
                  label: "check my about us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="diversity_3"
                  title="Kerja tim"
                  description="Membangun tim yang solid membutuhkan perasaan kesatuan, dari ketergantungan pada satu sama lain dan kekuatan yang akan didapatkan oleh adanya kesatuan"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="engineering"
                  title="Pembangunan berkelanjutan"
                  description="PT Buana Megah Teknik sukses dan mempunyai potensi besar untuk menangani berbagai proyek berskala besar dan memiliki deretan pelanggan setia yang terdiri dari sejumlah perusahaan besar yang secara terus-menerus dan berkelanjutan "
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Hemat Waktu & Uang"
                  description="meminimalkan sumber daya yang ada dalam pekerjan kompetitif, kerja sama tim yang bagus, produk  dapat berkualitas yang baik dan mengerjakan secara tepat waktu"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="task_alt"
                  title="Keunggulan"
                  description="Penyelesaian lehbih tepat waktu, kualitas yang baik, kemanan pekerja terjamin, dan harga yang kompetitif."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
