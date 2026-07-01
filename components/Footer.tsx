export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 font-body border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">✦ Credent</span>
          <span className="text-xs text-muted-foreground">© 2026. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs transition-colors duration-200 text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="#" className="text-xs transition-colors duration-200 text-muted-foreground hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
