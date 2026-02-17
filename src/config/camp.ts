export const campConfig = {
  season: 2026,
  startDate: "2026-06-28",
  endDate: "2026-08-21",
  hours: {
    start: "9:00 AM",
    end: "4:00 PM",
    beforeCare: "8:00 AM",
    afterCare: "6:00 PM",
  },

  weeks: [
    { number: 1, start: "June 29", end: "July 3" },
    { number: 2, start: "July 6", end: "July 10" },
    { number: 3, start: "July 13", end: "July 17" },
    { number: 4, start: "July 20", end: "July 24" },
    { number: 5, start: "July 27", end: "July 31" },
    { number: 6, start: "August 3", end: "August 7" },
    { number: 7, start: "August 10", end: "August 14" },
    { number: 8, start: "August 17", end: "August 21" },
  ],

  pricing: {
    regular: [
      { label: "Buy 1 Week", weeks: "1", price: 659, discount: 0 },
      { label: "Buy 2–3 Weeks", weeks: "2–3", price: 629, discount: 30 },
      { label: "Buy 4–5 Weeks", weeks: "4–5", price: 599, discount: 60 },
      { label: "Buy 6–8 Weeks", weeks: "6–8", price: 569, discount: 90 },
    ],
    cit: [
      { label: "Buy 1 Week", weeks: "1", price: 559, discount: 0 },
      { label: "Buy 2–3 Weeks", weeks: "2–3", price: 529, discount: 30 },
      { label: "Buy 4–5 Weeks", weeks: "4–5", price: 499, discount: 60 },
      { label: "Buy 6–8 Weeks", weeks: "6–8", price: 469, discount: 90 },
    ],
    siblingDiscount: 5,
    paymentDeadline: "6/20/26",
  },

  programs: [
    {
      name: "Early Program",
      ages: "Ages 5–6",
      grades: "Kindergarten",
      slug: "early-program",
    },
    {
      name: "Lower Camp",
      ages: "Grades 1–3",
      grades: "Grade 1–3",
      slug: "lower-camp",
    },
    {
      name: "Middle Camp",
      ages: "Grades 3–5",
      grades: "Grade 3–5",
      slug: "middle-camp",
    },
    {
      name: "Upper Camp",
      ages: "Grades 5–8",
      grades: "Grade 5–8",
      slug: "upper-camp",
    },
    {
      name: "CIT Program",
      ages: "Ages 14–16",
      grades: "Entering 8th–11th Grade",
      slug: "cit-program",
    },
  ],

  activities: [
    {
      name: "Aquatics",
      description:
        "Dive into the aquatic wonders of our camp! With an on-campus pool, our certified swim instructors lead engaging instructional swim sessions and delightful swim play activities every day. At our camp, we prioritize safety and ensure an enjoyable water experience for all campers.",
      image: "/images/activities/aquatics.jpg",
    },
    {
      name: "Athletics",
      description:
        "Unleash your athletic prowess with our dynamic sports lineup! Whether you're into classics like Baseball and Basketball or prefer the fast-paced action of Lacrosse and Soccer, our camp offers a variety of sports to suit every interest. From Wiffle Ball showdowns to intense matches on the tennis court, get ready to elevate your game and embrace the spirit of competition at camp.",
      items: ["Baseball", "Basketball", "Lacrosse", "Soccer", "Wiffle Ball", "Tennis"],
      image: "/images/activities/athletics.jpg",
    },
    {
      name: "Games",
      description:
        "Dive into a world of thrilling camp adventures! From classics like Catch and Cornhole to exciting challenges like Nuke 'Em and Home Run Derby, our lineup ensures every moment is filled with excitement and camaraderie. Join the fun with Giant Games, Obstacle Course, and more – where unforgettable memories are made on the playground!",
      items: ["Catch", "Cornhole", "Nuke 'Em", "Home Run Derby", "Giant Games", "Obstacle Course"],
      image: "/images/activities/games.jpg",
    },
    {
      name: "Arts",
      description:
        "Unleash your creativity in our vibrant Art Zone! From the meditative strokes of Ceramics to the rhythmic expressions of Dance, our camp offers a spectrum of artistic endeavors. Dive into the world of self-expression with Coloring and Drawing or craft your masterpiece in Jewelry and Painting. With Music as your muse, explore the boundless realms of creativity at camp's dedicated Art section!",
      items: ["Ceramics", "Dance", "Coloring", "Drawing", "Jewelry", "Painting", "Music"],
      image: "/images/activities/arts.jpg",
    },
    {
      name: "STEM",
      description:
        "Embark on an exciting journey in our STEM zone, where campers explore the realms of Computers, Games, Science, Technology, Engineering, and Mathematics. Our innovative activities inspire curiosity, foster creativity, and provide hands-on learning experiences, making STEM an integral part of our camp adventure.",
      items: ["Computers", "Games", "Science", "Technology", "Engineering", "Mathematics"],
      image: "/images/activities/stem.jpg",
    },
  ],

  faq: [
    {
      question: "How long does my child need to commit to camp?",
      answer:
        "The minimum amount of time that you need to register your child is for 1 week of fun!",
    },
    {
      question: "Do you offer any discounts?",
      answer: "We offer both an early bird discount and a multi week discount.",
    },
    {
      question: "Do you have payment plans?",
      answer:
        "Yes. The first payment is due upon registration and the following are the 1st of every month.",
    },
    {
      question: "What are the hours of camp?",
      answer:
        "Our camp day begins at 9:00 AM and goes until 4:00 PM! That's right, an entire day of fun! We also provide flexible before care and after care.",
    },
    {
      question: "Do we have transportation?",
      answer:
        "Campers will be dropped off and picked up by their parents/guardians at Knox School 541 Long Beach Rd, St James, NY 11780. Flexible early drop-off and late pick-up will be available by special request.",
    },
    {
      question: "Do you offer before and after care?",
      answer:
        "Yes! We offer a flexible before care that's as early as 8 AM and an after care program as late as 6 PM for a small fee.",
    },
    {
      question: "What happens in the event of weather?",
      answer:
        "Camp will always run! With extensive indoor space throughout the entire campus, camp is open rain or shine!",
    },
    {
      question: "Do we offer lunch?",
      answer:
        "Yes! A professional caterer provides us with lunch and snacks daily. A weekly camp menu will be sent out prior to the start of camp.",
    },
    {
      question: "Are we nut-free?",
      answer:
        "Yes. And we ask that if you participate in bringing your own lunch and snack that you be respectful of our 'nut-free' atmosphere.",
    },
    {
      question: "Can I bring my own lunch?",
      answer:
        "Yes! As long as the lunch is 'nut-free'. We recommend a nutritious sandwich and healthy snacks. No refrigeration is available for packed lunches.",
    },
    {
      question: "What should we pack?",
      answer:
        "All campers should arrive with a backpack that includes a water bottle, sunscreen, towel and one of their favorite nut free snacks.",
    },
    {
      question: "What should we wear to camp?",
      answer:
        "All campers should be ready to play when they arrive. Please drop your campers off with sunscreen applied, athletic apparel and athletic footwear.",
    },
  ],

  leadSources: [
    "Returning Family",
    "Friend",
    "Social Media",
    "Town of Smithtown",
    "Email",
    "Other",
  ],
} as const;
