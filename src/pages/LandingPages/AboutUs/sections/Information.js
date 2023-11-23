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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import bgImage from "assets/images/BMT/img-use/las1.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          {/* <Grid item xs={12} lg={6} > */}
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              {/* <Grid item xs={12} md={6} > */}
              <Grid item xs={12} md={12}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="domain"
                    title="TENTANG PERUSAHAAN"
                    description="PT. BUANA MEGAH TEKNIK berdiri pada tanggal 15 Agustus 2011, berlokasikan Perum. Metland Blok AB No. 15/15 Cileungsi -Bogor Berawal dari sebuah operasi dengan skala kecil kami selalu ber-motivasi dan ber-keinginan membangun visi dan misi kami sehingga kami dapat berkembang dan mampu bersaing di Era Globalisasi. Dengan berberapa pengalaman yang dimiliki oleh sejumlah karyawan, PT. BMT mampu menjawab tantangan dan berinovasi dalam melayani pembangunan nasional.PT. BMT berdiri untuk menjawab tantangan perkembangan dunia industri Indonesia dibidang jasa konstruksi karena semakin maraknya kebutuhan dalam pembangunan nasional khususnya dibidang konstruksi, kami berupaya semaksimal mungkin untuk mengkonstribusikan jasa kami untuk melaksanakan pembangunan. Seiring waktu dan perjalanan pengalaman kami, berbagai perbaikan dilakukan dalam rangka untuk terus bertumbuh dan memberikan konstribusi untuk membangun bangsa dengan memberikan jasa konstruksi diseluruh negeri.Selalu fokus dan pada jasa konstruksi yang menjadi kegiatan utama PT. BMT. Antusiasme kami untuk satu langkah didepan dibidang rekayasa, pengadaan dan konstruksi besi dan baja."
                  />
                </MKBox>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Payments functionality"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Prebuilt components"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
              {/* <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Improved platform"
                    description="We get insulted by others, lose trust for those We get back freezes"
                  />
                </MKBox>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              // image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              image={bgImage}
              title="Get insights on Search"
              description="Today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
