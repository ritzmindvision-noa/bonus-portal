export type Bonus = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const bonuses: Bonus[] = [
  {
    id: 1,
    title: "頑張ってる私が報われる奇跡のワーク",
    description:
      "日々の努力が報われる感覚を取り戻す、心を整えるワークシートです。",
    url: "https://worksheet-next.vercel.app/worksheet",
  },
  {
    id: 2,
    title: "3分でスカッと！「大人の関係」モヤモヤ成仏ワーク",
    description:
      "人間関係のモヤモヤを3分で手放し、心を軽くするワークです。",
    url: "https://detox-theta.vercel.app/worksheet",
  },
  {
    id: 3,
    title: "妻（夫）の機嫌が悪い！3つの処方箋",
    description:
      "パートナーの機嫌に振り回されないための、3つの心の処方箋です。",
    url: "https://bad-mood-seven.vercel.app/worksheet",
  },
  {
    id: 4,
    title: "「会いたい」と言われる男がやめた口癖7選",
    description:
      "女性から「会いたい」と言われる男性が手放した、7つの口癖を解説します。",
    url: "https://man-smoky.vercel.app/worksheet",
  },
  {
    id: 5,
    title: "「会いたい」と言われる女がやめた口癖7選",
    description:
      "男性から「会いたい」と言われる女性が手放した、7つの口癖を解説します。",
    url: "https://woman-rosy.vercel.app/worksheet",
  },
];
