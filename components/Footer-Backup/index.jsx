import React from "react";
import { Box, Typography } from "@material-ui/core";
import ArrowRightIcon from "./../icons/arrowRight";
import Image from "next/image";
import { useStyles } from "./styles";
import FacebookIcon from "./../icons/facebook";
import TwitterIcon from "../icons/twitter";
// import InstagramIcon from "../icons/instagram";
// import YoutubeIcon from "./../icons/youtube";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { LinkedinIcon, WhatsappIcon } from "react-share";
import { 
   TO_ABOUT_PAGE,
   TO_HOME_PAGE,
   TO_CONTACTUS_PAGE,
   To_Testimonials_PAGE,
   TO_BookResearch_PAGE,
   TO_FeedBack_PAGE,
   TO_FAQ_PAGE } from "../constants";
import Link from "next/link";

const Social = () => {
  const classes = useStyles();

  return (
    <Box className={classes.socialWrapper}>
      <Box>
        <Image src="/main-logo.png" className={classes.mainLogo} alt="cheapbookdeals.com" width={340} height={60} />
      </Box>
      <Typography variant="body1" style={{ width: "227px" }}>
      {/* cheap textbooks,used books,books used,books for cheap,books sell online,cheapusedbooks,sellyour textbooks,sell textbooks online,used books to sell.{" "} */}
      {/* SDSU Library,Briggs Library,SDSU Library Database,SDBOR Jobs,d2l sbor edu,Go Jacks,SDSU Logo,Jackrabbit Store,SDSU Bookstore Hours,South Dakota State University Bookstore.{} */}
      Helping Students and Book Reads to Buy,Sell,Swap or Donate Books/Textbooks Directly to People Near You. Use Cheapbookdeal Live Chat to Connect 100% Free.{}
 
         {/* We Help You To Buy and Sell Their Books Directly to People. Our Aim Is To Get People Maximum Return of Money for Their Books and Help Those Who Needs Books for Affordable Prices.{" "} */}
      </Typography>
      <Box className={classes.socialIcons}>
        <FacebookShareButton url="https://www.cheapbookdeals.com/">
          <FacebookIcon />
        </FacebookShareButton>
        <LinkedinShareButton />
        <TwitterShareButton url="https://www.cheapbookdeals.com/">
          <TwitterIcon />
        </TwitterShareButton>
      </Box>
    </Box>
  );
};

const OurCompany = () => {
  const classes = useStyles();

  const data = {
    title: "Company Info",
    links: [
      {label:"Home", slug:TO_HOME_PAGE},
      {label:"About Us", slug:TO_ABOUT_PAGE},
      {label:"Testimonials", slug:To_Testimonials_PAGE},
      {label:"FAQ", slug:TO_FAQ_PAGE},
      {label:"BookReaserch", slug:TO_BookResearch_PAGE},
      {label:"Contact Us", slug:TO_CONTACTUS_PAGE},
      {label:"Feedback", slug:TO_FeedBack_PAGE}
    ],
      
  };

  return (
    <Box className={classes.linksWrapper}>
      <Typography variant="h4">{data.title}</Typography>
      {data.links.map((link) => {
        return (
          <Box className={classes.link} key={link} style={{cursor:"pointer"}}>
            {/* <ArrowRightIcon /> */}
            <Link href={link.slug} passHref >
            <Typography variant="body2" >{link.label}</Typography>
                {/* <a className={classes.btn}>Home</a> */}
              </Link>
            {/* <Typography variant="body2">{link.label}</Typography> */}
          </Box>
        );
      })}
    </Box>
  );
};

const Links = () => {
  const data = {
    title: "Learn More",
    links: [
      "Pricing",
      "Licensing",
      "Terms of Use",
      "Privacy Policy"
    ],
  };
  const classes = useStyles();

  return (
    <Box className={classes.linksWrapper}>
      <Typography variant="h4">{data.title}</Typography>
      {data.links.map((link) => {
        return (
          <Box className={classes.link} key={link}>
            {/* <ArrowRightIcon /> */}
            <Typography variant="body2">{link}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

const ContactInfo = () => {
  const classes = useStyles();

  const data = {
    title: "Need Help",
    links: [
      //{label:"Contact Us", slug:TO_CONTACTUS_PAGE},
      { text: "99 Address XYZ. USA", icon: "/location.svg" },
      { text: "(1234) 654-00000", icon: "/phone.svg" },
      { text: "support@cheapbookdeals.com", icon: "/inbox.svg" },
      { text: "Mon - Sat 09:00 - 17:00", icon: "/time.svg" },
    ]
  };

  return (
    <Box className={classes.linksWrapper} style={{ maxWidth: "250px" }}>
      <Typography variant="h4">{data.title}</Typography>
      {data.links.map((link) => {
        return (
          <Box className={classes.link} style={{ marginBottom: "21px" }} key={link.text}>
            <Box className={classes.icon}>
              <Image src={link.icon} alt={link.text} style={{ marginRight: "10px" }} width={25} height={25} />
            </Box>
            <Typography variant="body2">{link.text}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.wrapper}>
          <Social />
          <OurCompany />
          <Links />
          <ContactInfo />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
