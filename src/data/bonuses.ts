export type Bonus = {
  id: number;
  title: string;
  description: string;
  url: string;
  buttonLabel?: string;
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
    title: "妻（夫）の機嫌が気になる夫（妻）の５つのタイプ診断",
    description:
      "パートナーの機嫌に振り回される自分のタイプが分かる診断テストです。",
    url: "https://reaction-seven-theta.vercel.app/worksheet",
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
  {
    id: 6,
    title: "離婚の恐れはどこから？診断",
    description:
      "離婚への恐れがどこから来ているのかを整理し、自分の中にある不安のタイプを確認できる診断です。",
    url: "https://fearofdivorce.vercel.app/worksheet",
    buttonLabel: "診断をはじめる",
  },
  {
    id: 7,
    title: "コミュニケーションがうまくいかない５つのクセ診断",
    description:
      "言いたいことが伝わらない原因になっている、コミュニケーションの無意識のクセを確認できる診断です。",
    url: "https://communication5type.vercel.app/worksheet",
    buttonLabel: "診断をはじめる",
  },
];
