import leftscroll from "@/public/tracks/leftscroll.svg";
import midscroll from "@/public/tracks/midscroll.svg";
import rightscroll from "@/public/tracks/rightscroll.svg";

export const tracksData = [
  {
    label: "1st",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: midscroll,
    imageClass: "w-[38%] top-[32%] left-[31.5%]",
    labelClass: "top-[35%] text-6xl md:text-7xl lg:text-8xl",
    descClass: "top-[75%] w-[58%]",
  },
  {
    label: "2nd",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "w-[40%] top-[35%] -left-[10%]",
    labelClass:
      "left-[24%] top-[23%] text-5xl md:text-6xl lg:text-8xl [transform:rotate(-10deg)]",
    descClass: "left-[24.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "3rd",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[40%] top-[35%] left-[71%]",
    labelClass:
      "left-[32%] top-[23%] text-6xl md:text-7xl lg:text-8xl [transform:rotate(10deg)]",
    descClass: "top-[62%] left-[16%] w-[60%] [transform:rotate(10deg)]",
  },
  {
    label: "Best Hardware",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "font-bold w-[40%] top-[65%] -left-[10%]",
    labelClass:
      "top-[38%] left-[48%] text-2xl md:text-3xl lg:text-4xl  rotate-[-10deg]",
    descClass: "left-[24.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "Best UI/UX",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: midscroll,
    imageClass: "font-bold w-[38%] top-[65%] left-[31.5%]",
    labelClass: "top-[36%] text-2xl md:text-3xl lg:text-4xl",
    descClass: "top-[75%] w-[58%]",
  },
  {
    label: "Best Beginner",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "font-bold w-[40%] top-[65%] left-[71%]",
    labelClass:
      "left-[22%] top-[28%] w-[60%] text-2xl md:text-3xl lg:text-4xl [transform:rotate(10deg)]",
    descClass: "top-[62%] left-[16%] w-[60%] [transform:rotate(10deg)]",
  },
  {
    label: "Most Sustainable",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "font-bold w-[40%] top-[95%] -left-[10%]",
    labelClass:
      "top-[35%] left-[47.5%] text-1xl md:text-2xl lg:text-3xl rotate-[-10deg]",
    descClass: "left-[24.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "Most on Theme",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: midscroll,
    imageClass: "font-bold w-[38%] top-[95%] left-[31.5%]",
    labelClass: "top-[33%] text-2xl md:text-3xl lg:text-4xl",
    descClass: "top-[75%] w-[58%]",
  },
  {
    label: "Best Social Impact",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "font-bold w-[40%] top-[95%] left-[71%]",
    labelClass:
      "left-[20%] top-[26%] w-[64%] text-1xl md:text-2xl lg:text-4xl [transform:rotate(10deg)]",
    descClass: "top-[62%] left-[14%] w-[62%] [transform:rotate(10deg)]",
  },
];

export const tracksMobileData = [
  {
    label: "1st",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[70%] -top-[5%]",
    labelClass: "top-[20%] left-[36%] [transform:rotate(10deg)] text-[15vw]",
    descClass: "top-[60%] w-[60%] left-[16%] [transform:rotate(10deg)]",
  },
  {
    label: "2nd",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "w-[70%] top-[30%] left-[30%]",
    labelClass: "left-[25%] top-[20%] text-[15vw] [transform:rotate(-10deg)]",
    descClass: "left-[25.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "3rd",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[70%] top-[65%]",
    labelClass: "left-[34%] top-[20%] text-[15vw] [transform:rotate(10deg)]",
    descClass: "top-[60%] w-[60%] left-[16%] [transform:rotate(10deg)]",
  },
  {
    label: "Best Beginner",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "w-[70%] top-[100%] left-[30%]",
    labelClass:
      "left-[19%] top-[28%] w-[60%] text-[6vw] font-bold [transform:rotate(-10deg)]",
    descClass: "left-[25.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "Best Hardware",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[70%] top-[135%]",
    labelClass:
      "top-[25%] left-[23%] text-[6vw] w-[60%] font-bold [transform:rotate(10deg)]",
    descClass: "top-[60%] w-[60%] left-[16%] [transform:rotate(10deg)]",
  },
  {
    label: "Best UI/UX",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "w-[70%] top-[170%] left-[30%]",
    labelClass:
      "left-[23%] top-[27%] w-[50%] text-[6vw] font-bold [transform:rotate(-10deg)]",
    descClass: "left-[25.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "Most on Theme",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[70%] top-[205%]",
    labelClass:
      "top-[25%] left-[23%] text-[6vw] w-[60%] font-bold [transform:rotate(10deg)]",
    descClass: "top-[60%] w-[60%] left-[16%] [transform:rotate(10deg)]",
  },
  {
    label: "Best Social Impact",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: leftscroll,
    imageClass: "w-[70%] top-[240%] left-[30%]",
    labelClass:
      "left-[18%] top-[28%] w-[60%] text-[6vw] font-bold [transform:rotate(-10deg)]",
    descClass: "left-[25.5%] w-[58%] top-[62%] [transform:rotate(-10deg)]",
  },
  {
    label: "Most Sustainable",
    desc: "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: rightscroll,
    imageClass: "w-[70%] top-[275%]",
    labelClass:
      "top-[25%] left-[23%] text-[6vw] w-[60%] font-bold [transform:rotate(10deg)]",
    descClass: "top-[62%] left-[14%] w-[62%] [transform:rotate(10deg)]",
  },
];
