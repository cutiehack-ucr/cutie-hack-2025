type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "Cutie Hack",
  short_name: "Cutie Hack",
  email: "citrushack@gmail.com",
  description: "beginner-friendly",
  length: 12,
  date: new Date("2025-11-15T07:00:00"),
  end: new Date("2025-11-15T19:00:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.cutiehack.com",
  instagram: "https://www.instagram.com/cutiehack_ucr",
  linkedin: "https://www.linkedin.com/company/cutie-hack",
  discord: "https://www.discord.gg/f55zEWTYj6",
  heart: "🤎",
};

export default data;
