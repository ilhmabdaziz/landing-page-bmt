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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

import img1 from "assets/images/BMT/img-use/storage-tank/IMG_5057.JPG";
import img2 from "assets/images/BMT/img-use/storage-tank/tower1.jpg";
import img3 from "assets/images/BMT/img-use/storage-tank/IMG_5057.JPG";
import img4 from "assets/images/BMT/img-use/storage-tank/tower1.jpg";

function Places(data) {
  const products = data.data;
  // console.log(products);
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check my latest products
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {products.map((data) =>
            data.type == "img" ? (
              <Grid item xs={12} sm={6} lg={data.lg} key={data.id}>
                <TransparentBlogCard
                  image={data.img}
                  title={data.title}
                  description={data.description}
                  action={
                    {
                      // type: "internal",
                      // route: "/pages/blogs/author",
                      // color: "info",
                      // label: "read more",
                    }
                  }
                />
              </Grid>
            ) : (
              <Grid item xs={12} sm={6} lg={data.lg} key={data.id}>
                <BackgroundBlogCard
                  image={data.img}
                  title={data.title}
                  description={data.description}
                  action={{
                    type: "internal",
                    // route: "/pages/blogs/author",
                    label: "read more",
                  }}
                />
              </Grid>
            )
          )}
          {/* <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img1}
              title="Rover raised $65 million"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={
                {
                  // type: "internal",
                  // route: "/pages/blogs/author",
                  // color: "info",
                  // label: "read more",
                }
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img2}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={
                {
                  // type: "internal",
                  // route: "/pages/blogs/author",
                  // color: "info",
                  // label: "read more",
                }
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={img3}
              title="MateLabs machine learning"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={img4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                // route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
