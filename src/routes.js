/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";
import StorageTank from "layouts/pages/landing-pages/products/storage-tank";
import ConstructionBuilding from "layouts/pages/landing-pages/products/construction-building";
import PipingInstrument from "layouts/pages/landing-pages/products/piping-instrument";
import DuctingInsulation from "layouts/pages/landing-pages/products/ducting-insulation";
import SandblastingPainting from "layouts/pages/landing-pages/products/sandblasting-painting";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Tentang Kami",
    icon: <Icon>business</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Profil Kami",
        collapse: [
          {
            name: "Visi & Misi",
            // route: "/pages/landing-pages/about-us",
            route: "/about-us",
            component: <AboutUs />,
          },
          {
            name: "Struktur perusahaan",
            // route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Prestasi & Sertifikasi",
            // route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Peralatan",
            // route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Sertifikat ISO",
            // route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      // {
      //   name: "account",
      //   collapse: [
      //     {
      //       name: "sign in",
      //       route: "/pages/authentication/sign-in",
      //       component: <SignIn />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "Bisnis Kita",
    icon: <Icon>factory</Icon>,
    collapse: [
      {
        name: "produk",
        description: "Lihat semua produk",
        dropdown: true,
        collapse: [
          {
            name: "storage tank",
            // route: "/sections/page-sections/page-headers",
            // component: <PageHeaders />,

            // route: "/pages/landing-pages/author",
            route: "/product/storage-tank",
            component: <StorageTank />,
          },
          {
            name: "construction building",
            // route: "/sections/page-sections/features",
            // component: <Features />,
            route: "/product/construction-building",
            component: <ConstructionBuilding />,
          },
          {
            name: "piping & instrumen",
            // route: "/sections/page-sections/features",
            // component: <Features />,
            route: "/product/piping-instrumen",
            component: <PipingInstrument />,
          },
          {
            name: "ducting & insulation",
            // route: "/sections/page-sections/features",
            // component: <Features />,
            route: "/product/ducting-insulation",
            component: <DuctingInsulation />,
          },
          {
            name: "sandblasting & painting",
            // route: "/sections/page-sections/features",
            // component: <Features />,
            route: "/product/sandblasting-painting",
            component: <SandblastingPainting />,
          },
        ],
      },
      {
        name: "proyek",
        description: "Lihat semua proyek",
        dropdown: true,
        collapse: [
          {
            name: "proyek sekarang",
            // route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "proyek yang diselesaikan",
            // route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          // {
          //   name: "pagination",
          //   route: "/sections/navigation/pagination",
          //   component: <Pagination />,
          // },
        ],
      },
      {
        name: "layanan bisnis & rekondisi",
        description: "Lihat semua layanan bisnis & rekondisi",
        dropdown: true,
        collapse: [
          {
            name: "highway work ",
            // route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "civil work",
            // route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "power plan",
            // route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "sheet pilling",
            // route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "FGD civil work",
            // route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "temporary sctructure & shoring work",
            // route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "kemitraan",
        description: "Lihat semua kemitraan",
        dropdown: true,
        collapse: [
          {
            name: "klien kami",
            // route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          // {
          //   name: "modals",
          //   route: "/sections/attention-catchers/modals",
          //   component: <Modals />,
          // },
          // {
          //   name: "tooltips & popovers",
          //   route: "/sections/attention-catchers/tooltips-popovers",
          //   component: <TooltipsPopovers />,
          // },
        ],
      },
      // {
      //   name: "elements",
      //   description: "See all 32 examples",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "avatars",
      //       route: "/sections/elements/avatars",
      //       component: <Avatars />,
      //     },
      //     {
      //       name: "badges",
      //       route: "/sections/elements/badges",
      //       component: <Badges />,
      //     },
      //     {
      //       name: "breadcrumbs",
      //       route: "/sections/elements/breadcrumbs",
      //       component: <BreadcrumbsEl />,
      //     },
      //     {
      //       name: "buttons",
      //       route: "/sections/elements/buttons",
      //       component: <Buttons />,
      //     },
      //     {
      //       name: "dropdowns",
      //       route: "/sections/elements/dropdowns",
      //       component: <Dropdowns />,
      //     },
      //     {
      //       name: "progress bars",
      //       route: "/sections/elements/progress-bars",
      //       component: <ProgressBars />,
      //     },
      //     {
      //       name: "toggles",
      //       route: "/sections/elements/toggles",
      //       component: <Toggles />,
      //     },
      //     {
      //       name: "typography",
      //       route: "/sections/elements/typography",
      //       component: <Typography />,
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "Hubungi kami",
    icon: <Icon>contacts</Icon>,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "keamanan",
    icon: <Icon>engineering</Icon>,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
  },

  // {
  //   name: "pagest",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "about us",
  //           route: "/pages/landing-pages/about-us",
  //           component: <AboutUs />,
  //         },
  //         {
  //           name: "contact us",
  //           route: "/pages/landing-pages/contact-us",
  //           component: <ContactUs />,
  //         },
  //         {
  //           name: "author",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "account",
  //       collapse: [
  //         {
  //           name: "sign in",
  //           route: "/pages/authentication/sign-in",
  //           component: <SignIn />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "sections",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           route: "/sections/page-sections/features",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           route: "/sections/attention-catchers/alerts",
  //           component: <Alerts />,
  //         },
  //         {
  //           name: "modals",
  //           route: "/sections/attention-catchers/modals",
  //           component: <Modals />,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           route: "/sections/attention-catchers/tooltips-popovers",
  //           component: <TooltipsPopovers />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           route: "/sections/elements/breadcrumbs",
  //           component: <BreadcrumbsEl />,
  //         },
  //         {
  //           name: "buttons",
  //           route: "/sections/elements/buttons",
  //           component: <Buttons />,
  //         },
  //         {
  //           name: "dropdowns",
  //           route: "/sections/elements/dropdowns",
  //           component: <Dropdowns />,
  //         },
  //         {
  //           name: "progress bars",
  //           route: "/sections/elements/progress-bars",
  //           component: <ProgressBars />,
  //         },
  //         {
  //           name: "toggles",
  //           route: "/sections/elements/toggles",
  //           component: <Toggles />,
  //         },
  //         {
  //           name: "typography",
  //           route: "/sections/elements/typography",
  //           component: <Typography />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  // },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
