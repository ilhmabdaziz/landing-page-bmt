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
import image1 from "../../../../assets/images/BMT/IMG1.JPG";
import image2 from "../../../../assets/images/BMT/img-use/HO.png";
import image3 from "../../../../assets/images/BMT/img-use/workshop-narogong.jpeg";
import image4 from "../../../../assets/images/BMT/img-use/Workshop-hayono.png";
import image5 from "../../../../assets/images/BMT/IMG2.jpg";
import image6 from "../../../../assets/images/BMT/tank1.png";
import image7 from "../../../../assets/images/BMT/tank2.png";
import image8 from "../../../../assets/images/BMT/img-use/construction-building/2.JPG";

// const imagesPrefix =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages";

export default [
  {
    // image: `${imagesPrefix}/about-us.jpg`,
    image: `${image1}`,
    name: "Workshop",
    // route: "/pages/landing-pages/about-us",
  },
  {
    // image: `${imagesPrefix}/contact.jpg`,
    image: `${image2}`,
    name: "Head Office",
    // route: "/pages/landing-pages/contact-us",
  },
  {
    // image:
    //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/signin-basic.jpg",
    image: `${image3}`,
    name: "Workshop Naragong",
    // route: "/pages/authentication/sign-in",
  },
  {
    // image: `${imagesPrefix}/author.jpg`,
    image: `${image4}`,
    name: "Workshop Haryono",
    // route: "/pages/landing-pages/author",
  },
  {
    // image: `${imagesPrefix}/contact.jpg`,
    image: `${image5}`,
    name: "Team",
    // route: "/pages/landing-pages/contact-us",
    route: "/about-us",
  },
  {
    // image:
    //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/account/signin-basic.jpg",
    image: `${image6}`,
    name: "Storage Tank",
    // route: "/pages/authentication/sign-in",
    route: "/product/storage-tank",
  },
  {
    // image: `${imagesPrefix}/author.jpg`,
    image: `${image7}`,
    name: "Storage Tank ",
    // route: "/pages/landing-pages/author",
    route: "/product/storage-tank",
  },
  {
    // image: `${imagesPrefix}/author.jpg`,
    image: `${image8}`,
    name: "Construction Building",
    // route: "/pages/landing-pages/author",
    route: "/product/construction-building",
  },
];
