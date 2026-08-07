import { BonusCard } from "@/components/BonusCard";
import { bonuses } from "@/data/bonuses";

export default function Home() {
  return (
    <div className="portal-page">
      <header className="portal-header">
        <p className="portal-label">Special Gift</p>
        <h1 className="portal-title">６大特典プレゼント！</h1>
        <p className="portal-subtitle">
          お受け取りいただいた特典ワークは、こちらからいつでもご利用いただけます。
          <br className="hidden sm:inline" />
          心が向くワークを選んで、ゆっくりとお進みください。
        </p>
      </header>

      <main className="portal-main">
        <div className="bonus-grid">
          {bonuses.map((bonus) => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </main>

      <footer className="portal-footer">
        <p>© Ritzmindvision</p>
      </footer>
    </div>
  );
}
