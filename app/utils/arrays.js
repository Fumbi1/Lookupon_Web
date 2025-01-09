const categories = [
  {
    id: "1",
    title: "Restaurant",
    image: "/restaurant.svg",
  },
  {
    id: "2",
    title: "Nightlife",
    image: "/nightlife.svg",
  },
  {
    id: "3",
    title: "Beauty",
    image: "/makeup.svg",
  },
  {
    id: "4",
    title: "Clothing",
    image: "/checkroom.svg",
  },
  {
    id: "5",
    title: "Photography",
    image: "/camera.svg",
  },
  {
    id: "6",
    title: "Jewelry",
    image: "/diamond.svg",
  },
  {
    id: "7",
    title: "Cofectionary",
    image: "/cake.svg",
  },
  {
    id: "8",
    title: "Games",
    image: "/controller.svg",
  },
  {
    id: "9",
    title: "Repair",
    image: "/restaurant.svg",
  },
  {
    id: "10",
    title: "More",
    image: "/moreIcon.svg",
  },
];

const cards = [
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/man.png",
    name: "Senami Signature",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Owambe wears, Corporate wears",
    comment:
      "“Delivery was on time. What I ordered was what i got. You deserve 10 stars sef!”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/thrift.png",
    name: "Davon’s Thriftstore",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Cargo Pants, Sweatshirt, Joggers, Trackpants, T-s...",
    comment:
      "“Best thriftstore in Ife. I love wearing vintage clothing and i was able to find good quality...”",
  },
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
];

const search_Results = [
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/cinnamon.png",
    name: "O’Chel Foods",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Pizza, Small Chops, Cinnamon Rolls, Donuts",
    comment:
      "“The pizza was yummy. I love the way ur delivery was fast o! More patronage to come dear.”",
  },
  {
    img: "/spag.png",
    name: "Hotsoup 'n' More",
    time: "Open 10:00 AM - 07:00 PM",
    menu: "Stir-fry Spaghetti, Noodles, Burgers, Swallow",
    comment:
      "“The stir-fry spaghetti was really worth it! Wish i could even give you more than 5 stars”",
  },
];

const openingHours = [
  {
    day: "Mon",
    time_range: "10:00 AM - 07:00 PM",
    open: "Open Now",
  },
  {
    day: "Tue",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
  {
    day: "Wed",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
  {
    day: "Thur",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
  {
    day: "Fri",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
  {
    day: "Sat",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
  {
    day: "Sun",
    time_range: "10:00 AM - 07:00 PM",
    open: "",
  },
];

const reviewSection = [
  {
    image: "/userImages.svg",
    name: "Ige Olaposi",
    date: "Jan 01, 2024",
    review_comment: `Came here for dinner with friends before a concert at The Warfield nearby. It was a Monday night so it was pretty quiet, there were only a few other parties dining at the same time.
    Our server was great. Very attentive, let us know we could adjust spice levels if needed, even offered to take a group photo for us!
    I tried the pineapple fried rice and my friends got the pad Thai and a salmon dish (can't remember the name). Everything was flavorful and delicious, and the portions were big without being too much to eat. I also got a blue margarita, which was really good but didn't taste like it had much alcohol in it. My friends felt the same about their cocktails, so if that matters to you then you might want to order something stronger.
    I've heard really good things about their brunch menu so that's next up on my list to try.
    Highly recommend stopping here for pre-concert dinner if you're seeing a show at The Warfield, since it's in walking distance.`,
    photo_evidence: ["/media.png", "/media.png", "/media.png", "/media.png"],
  },
  {
    image: "/userImages.svg",
    name: "Ige Olaposi",
    date: "Jan 01, 2024",
    review_comment: `Came here for dinner with friends before a concert at The Warfield nearby. It was a Monday night so it was pretty quiet, there were only a few other parties dining at the same time.
    Our server was great. Very attentive, let us know we could adjust spice levels if needed, even offered to take a group photo for us!
    I tried the pineapple fried rice and my friends got the pad Thai and a salmon dish (can't remember the name). Everything was flavorful and delicious, and the portions were big without being too much to eat. I also got a blue margarita, which was really good but didn't taste like it had much alcohol in it. My friends felt the same about their cocktails, so if that matters to you then you might want to order something stronger.
    I've heard really good things about their brunch menu so that's next up on my list to try.
    Highly recommend stopping here for pre-concert dinner if you're seeing a show at The Warfield, since it's in walking distance.`,
    photo_evidence: ["/media.png", "/media.png", "/media.png", "/media.png"],
  },
  {
    image: "/userImages.svg",
    name: "Ige Olaposi",
    date: "Jan 01, 2024",
    review_comment: `Came here for dinner with friends before a concert at The Warfield nearby. It was a Monday night so it was pretty quiet, there were only a few other parties dining at the same time.
    Our server was great. Very attentive, let us know we could adjust spice levels if needed, even offered to take a group photo for us!
    I tried the pineapple fried rice and my friends got the pad Thai and a salmon dish (can't remember the name). Everything was flavorful and delicious, and the portions were big without being too much to eat. I also got a blue margarita, which was really good but didn't taste like it had much alcohol in it. My friends felt the same about their cocktails, so if that matters to you then you might want to order something stronger.
    I've heard really good things about their brunch menu so that's next up on my list to try.
    Highly recommend stopping here for pre-concert dinner if you're seeing a show at The Warfield, since it's in walking distance.`,
    photo_evidence: ["/media.png", "/media.png", "/media.png", "/media.png"],
  },
];

const catalogueImages = [
  "/media-0.svg",
  "/media-1.svg",
  "/media-2.svg",
  "/media-3.svg",
  "/media-4.svg",
  "/media-5.svg",
  "/media-2.svg",
  "/media-3.svg",
  "/media-4.svg",
  "/media-5.svg",
]

const businessCategories = [
  "Active Life",
  "Automotive",
  "Beauty & Spas",
  "Food",
  "Home Services",
  "Shopping",
  "Education",
  "Professional Services",
  "Nightlife",
  "Restaurants",
  "Religious Organizations",
  "Health & Medical",
  "Pets",
  "Arts & Entertainment",
  "Financial Services",
  "Public Services & Government",
  "Event Planning & Services",
  "Bicycles",
  "Local Flavour",
  "Mass Media",
]

export { categories, cards, search_Results, openingHours, reviewSection, catalogueImages, businessCategories };
