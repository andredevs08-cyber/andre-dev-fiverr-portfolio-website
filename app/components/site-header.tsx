type SiteHeaderProps = {
  active?: "home" | "work" | "services" | "about";
};

const navItems = [
  { label: "Home", href: "/", key: "home" },
  { label: "Work", href: "/work", key: "work" },
  { label: "Services", href: "/services", key: "services" },
  { label: "About", href: "/about", key: "about" },
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="/" aria-label="Andre.Devs home">
        ANDRE.DEVS
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={active === item.key ? "active" : undefined}
            href={item.href}
            key={item.key}
            aria-current={active === item.key ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/hire">
        Start a project <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}
