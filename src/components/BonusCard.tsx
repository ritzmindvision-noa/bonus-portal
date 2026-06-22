import type { Bonus } from "@/data/bonuses";

type BonusCardProps = {
  bonus: Bonus;
};

export function BonusCard({ bonus }: BonusCardProps) {
  return (
    <article className="bonus-card">
      <span className="bonus-card-number">{String(bonus.id).padStart(2, "0")}</span>
      <h2 className="bonus-card-title">{bonus.title}</h2>
      <p className="bonus-card-description">{bonus.description}</p>
      <a
        href={bonus.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bonus-card-button"
      >
        ワークをはじめる
        <span aria-hidden="true" className="bonus-card-arrow">
          →
        </span>
      </a>
    </article>
  );
}
