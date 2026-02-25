export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          Engineered with precision. Built for scale.
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          © {new Date().getFullYear()} Kishore Gurusamy
        </p>
      </div>
    </footer>
  );
}
