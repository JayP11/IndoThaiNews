import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "shop",
    url: "/products",
  },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/contactus",
  },
];
export const linkss = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "shop",
    url: "/products",
  },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/contactus",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const BaseUrl = "https://plance.in/indothainews/api/";

//  user login-signup
export const user_login = BaseUrl + "user_login";
export const user_register = BaseUrl + "user_register";

export const news_categories = BaseUrl + "news_categories?";
export const popular_news_all = BaseUrl + "popular_news_all?";
export const latest_news = BaseUrl + "latest_news?";
export const contact_us = BaseUrl + "contact_us";
export const news_comments = BaseUrl + "news_comments";
export const news_comment = BaseUrl + "news_comment";


// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

// screen type
export const HOME_SCREEN = 101;
export const PROFILE_SCREEN = 102;
export const CHECKOUT_SCREEN = 103;
export const USER_SCREEN = 104;

// profile tab

export const USER_PROFILE_TAB = 201;
export const ADDRESS_TAB = 202;
export const MY_ORDER_TAB = 203;
export const RAISE_TICKET_TAB = 204;
export const NOTIFICAION_TAB = 205;

// google client id
export const WEB_CLIENT_ID =
  "643629890291-27gl333mpl92eekq7bp663qaslscglgl.apps.googleusercontent.com";
