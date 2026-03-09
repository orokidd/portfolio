import projLibrary from '../assets/proj-library.png'
import projRockPaper from '../assets/proj-rock.png'
import projCalculator from '../assets/proj-calc.png'
import projLandingPage from '../assets/proj-business.png'
import projEtch from '../assets/proj-etch.png'
import projTicTac from '../assets/proj-tic.png'
import projRestaurant from '../assets/proj-restaurant.png'
import projBattleship from '../assets/proj-ship.png'
import projTodo from '../assets/proj-todo.png'
import projWeather from '../assets/proj-weather.png'
import projShoppingCart from '../assets/proj-shopping-cart.png'
import projCv from '../assets/proj-cv-creator.png'
import projCat from '../assets/proj-memory-game.png'
import projBookInventory from '../assets/proj-book-inventory.png'
import projFileUploader from '../assets/proj-file-uploader.png'
import projMembers from '../assets/proj-members-only.png'
import projBlog from '../assets/proj-blog-post.png'
import projPooh from '../assets/proj-pooh.png'


export type Projects = {
    id: number;
    name: string;
    tech: string[];
    links: {
        demo: string;
        github: string;
    };
    image: string;
};

export const projects:Projects[] = [
  {
    id: 1,
    name: "Book Collection",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://orokidd.github.io/library/",
      github: "https://github.com/orokidd/library",
    },
    image: projLibrary,
  },

  {
    id: 2,
    name: "Rock Paper Scissors",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://orokidd.github.io/rock-paper-scissors/",
      github: "https://github.com/orokidd/rock-paper-scissors",
    },
    image: projRockPaper,
  },

  {
    id: 3,
    name: "Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://orokidd.github.io/simple-calculator/",
      github: "https://github.com/orokidd/simple-calculator",
    },
    image: projCalculator,
  },

  {
    id: 4,
    name: "Business Landing Page",
    tech: ["HTML", "CSS"],
    links: {
      demo: "https://orokidd.github.io/landing-page/",
      github: "https://github.com/orokidd/landing-page",
    },
    image: projLandingPage,
  },

  {
    id: 5,
    name: "Etch a Sktech",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://orokidd.github.io/etch-a-sketch/",
      github: "https://github.com/orokidd/etch-a-sketch",
    },
    image: projEtch,
  },

  {
    id: 6,
    name: "Tic Tac Toe",
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "https://orokidd.github.io/tic-tac-toe/",
      github: "https://github.com/orokidd/tic-tac-toe",
    },
    image: projTicTac,
  },

  {
    id: 7,
    name: "Restaurant Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Webpack"],
    links: {
      demo: "https://orokidd.github.io/restaurant-page/",
      github: "https://github.com/orokidd/restaurant-page",
    },
    image: projRestaurant,
  },

  {
    id: 8,
    name: "Battleship Game",
    tech: ["HTML", "CSS", "JavaScript", "Webpack"],
    links: {
      demo: "https://orokidd.github.io/battleship/",
      github: "https://github.com/orokidd/battleship",
    },
    image: projBattleship,
  },

  {
    id: 9,
    name: "Todo List App",
    tech: ["HTML", "CSS", "JavaScript", "Webpack"],
    links: {
      demo: "https://orokidd.github.io/todo-list/",
      github: "https://github.com/orokidd/todo-list",
    },
    image: projTodo,
  },

  {
    id: 10,
    name: "Weather App",
    tech: ["HTML", "CSS", "JavaScript", "Webpack"],
    links: {
      demo: "https://orokidd.github.io/weather-app/",
      github: "https://github.com/orokidd/weather-app",
    },
    image: projWeather,
  },

  {
    id: 11,
    name: "Shopping Cart",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    links: {
      demo: "https://shopping-cart-orokidd.vercel.app/",
      github: "https://github.com/orokidd/shopping-cart",
    },
    image: projShoppingCart,
  },

  {
    id: 12,
    name: "CV Builder",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    links: {
      demo: "https://cv-builder-blond.vercel.app/",
      github: "https://github.com/orokidd/cv-builder",
    },
    image: projCv,
  },

  {
    id: 13,
    name: "Cat Memory Game",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    links: {
      demo: "https://memorygame-orokidd.vercel.app/",
      github: "https://github.com/orokidd/memory-game",
    },
    image: projCat,
  },

  {
    id: 14,
    name: "Book Inventory",
    tech: ["Node", "Express", "PostgreSQL", "EJS"],
    links: {
      demo: "https://book-inventory-mgqv.onrender.com/",
      github: "https://github.com/orokidd/book-inventory",
    },
    image: projBookInventory,
  },

  {
    id: 15,
    name: "File Uploader",
    tech: ["Express", "PostgreSQL", "EJS", "Prisma", "Supabase", "Passport"],
    links: {
      demo: "https://orokidd-file-uploader.onrender.com/",
      github: "https://github.com/orokidd/file-uploader",
    },
    image: projFileUploader,
  },

  {
    id: 16,
    name: "Members Post Board",
    tech: ["Node", "Express", "PostgreSQL", "EJS", "Prisma", "Passport"],
    links: {
      demo: "https://orokidd-members-only.onrender.com/",
      github: "https://github.com/orokidd/members-only",
    },
    image: projMembers,
  },

  {
    id: 17,
    name: "Blog Post",
    tech: ["React", "Express", "PostgreSQL","Prisma", "JWT Auth"],
    links: {
      demo: "https://orokidd-blog-client.vercel.app/",
      github: "https://github.com/orokidd/blog-client",
    },
    image: projBlog,
  },

  {
    id: 18,
    name: "Where's Pooh",
    tech: ["React", "Express", "PostgreSQL","Prisma"],
    links: {
      demo: "https://wheres-pooh.vercel.app/",
      github: "https://github.com/orokidd/wheres-pooh",
    },
    image: projPooh,
  },
];