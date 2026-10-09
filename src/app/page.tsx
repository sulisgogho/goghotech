import type { ReactNode, SVGProps } from "react";
import Image from "next/image";
import goghotechLogo from "../assets/goghotech-logo.jpg";

type IconProps = SVGProps<SVGSVGElement>;

const Icon = ({ children, ...props }: IconProps & { children: ReactNode }) => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

const NoteIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5Z" />
    <path d="M14 3.5V8h4M9 12h6M9 15.5h4" />
  </Icon>
);

const BookIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h4v16H7a2.5 2.5 0 0 0-2.5 2V5.5ZM19.5 5.5A2.5 2.5 0 0 0 17 3h-4v16h4a2.5 2.5 0 0 1 2.5 2V5.5Z" />
  </Icon>
);

const WalletIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 7.5h14.5a1.5 1.5 0 0 1 1.5 1.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
    <path d="M15 12h5v4h-5a2 2 0 0 1 0-4Z" />
  </Icon>
);

const TestIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </Icon>
);

const GameIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8.5 8h7a5.5 5.5 0 0 1 5.2 7.3l-.7 2.2a2.2 2.2 0 0 1-3.7.8l-1.8-1.8h-5l-1.8 1.8a2.2 2.2 0 0 1-3.7-.8l-.7-2.2A5.5 5.5 0 0 1 8.5 8Z" />
    <path d="M7 12v3M5.5 13.5h3M16 12.5h.01M18 14.5h.01" />
  </Icon>
);

const CodeIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
  </Icon>
);

const SparkIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 3l1.3 4.2a5 5 0 0 0 3.5 3.5L21 12l-4.2 1.3a5 5 0 0 0-3.5 3.5L12 21l-1.3-4.2a5 5 0 0 0-3.5-3.5L3 12l4.2-1.3a5 5 0 0 0 3.5-3.5L12 3Z" />
  </Icon>
);

const ChartIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Icon>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

function Button({
  children,
  href,
  variant = "primary",
  disabled,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "light" | "outline-light";
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className={`button button-${variant}`} style={{ opacity: 0.5, cursor: "not-allowed" }}>
        {children}
      </span>
    );
  }
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
    </a>
  );
}

const apps = [
  {
    name: "GoNotes",
    description: "Catat ide, susun pekerjaan, dan temukan kembali hal penting dengan cepat.",
    icon: NoteIcon,
    tone: "blue",
    size: "wide",
    detail: "Fokus, tanpa distraksi",
  },
  {
    name: "GoLib",
    description: "Perpustakaan digital personal untuk semua bacaan dan referensimu.",
    icon: BookIcon,
    tone: "violet",
    size: "standard",
    detail: "Koleksi dalam satu tempat",
  },
  {
    name: "GoFin",
    description: "Pencatatan finansial yang sederhana untuk keputusan yang lebih cerdas.",
    icon: WalletIcon,
    tone: "mint",
    size: "standard",
    detail: "Pahami arus kasmu",
  },
  {
    name: "GoTest",
    description: "Buat latihan, ukur progres, dan tingkatkan kemampuan secara konsisten.",
    icon: TestIcon,
    tone: "amber",
    size: "standard",
    detail: "Belajar lebih terarah",
  },
  {
    name: "GoGames",
    description: "Koleksi mini games yang menyenangkan untuk rehat sejenak di sela aktivitas.",
    icon: GameIcon,
    tone: "rose",
    size: "wide",
    detail: "Play. Refresh. Repeat.",
  },
];

const services = [
  {
    label: "01 / PRODUCT",
    name: "GoWeb",
    subtitle: "Custom Web",
    description: "Website dan web app berperforma tinggi, dirancang khusus untuk tujuan bisnismu.",
    icon: CodeIcon,
  },
  {
    label: "02 / EXPERIENCE",
    name: "GoVite",
    subtitle: "Digital Invitations",
    description: "Undangan digital premium yang personal, interaktif, dan mudah dibagikan.",
    icon: SparkIcon,
  },
];

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const AppIcon = app.icon;
  return (
    <article className={`app-card app-${app.tone} ${app.size === "wide" ? "app-wide" : ""}`}>
      <div className="app-top">
        <div className="app-icon"><AppIcon /></div>
        <span className="app-number">G / {String(apps.indexOf(app) + 1).padStart(2, "0")}</span>
      </div>
      <div className={`app-preview preview-${app.name.toLowerCase()}`} aria-hidden="true">
        {app.name === "GoNotes" && <>
          <div className="preview-note"><i /><span /><span /><b /></div>
          <div className="preview-note back"><i /><span /><span /></div>
        </>}
        {app.name === "GoLib" && <div className="book-stack"><i /><i /><i /><i /></div>}
        {app.name === "GoFin" && <>
          <div className="fin-ring"><span>68%</span></div>
          <div className="fin-line"><i /><i /><i /><i /><i /></div>
        </>}
        {app.name === "GoTest" && <div className="test-score"><span>9/10</span><i>Excellent</i></div>}
        {app.name === "GoGames" && <>
          <div className="game-board">{[0,1,2,3,4,5,6,7,8].map((cell) => <i key={cell} />)}</div>
          <div className="game-score">BEST<br/><b>12,480</b></div>
        </>}
      </div>
      <div className="app-content">
        <span className="eyebrow">{app.detail}</span>
        <h3>{app.name}</h3>
        <p>{app.description}</p>
        <a className="text-link" href="#contact">Buka Aplikasi <Arrow /></a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Navigasi utama">
          <a className="logo" href="#top">
            <Image src={goghotechLogo} alt="" width={32} height={32} />
            <span>Goghotech</span>
          </a>
          <div className="nav-links">
            <a href="#apps">Apps</a>
            <a href="#services">Services</a>
            <a href="#education">Education</a>
          </div>
          <Button href="#contact" variant="dark">Contact Us <Arrow /></Button>
        </nav>
      </header>

      <main>
        <section className="hero container" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-layout">
            <div className="hero-copy-wrap">
              <div className="hero-badge"><span /> Built for Indonesian progress</div>
              <h1>Satu ekosistem.<br />Lebih banyak<br /><span>kemungkinan.</span></h1>
              <p className="hero-copy">
                Produk digital, solusi bisnis, dan pendidikan—dirancang sebagai satu
                ekosistem untuk membuat langkah besarmu terasa lebih sederhana.
              </p>
              <div className="hero-actions">
                <Button href="#apps">Jelajahi Ekosistem <Arrow /></Button>
                <Button href="#services" variant="secondary">Mulai Proyek</Button>
              </div>
              <div className="hero-proof">
                <div><strong>05</strong><span>Digital<br />products</span></div>
                <div><strong>03</strong><span>Business<br />services</span></div>
                <div><strong>01</strong><span>Connected<br />ecosystem</span></div>
              </div>
            </div>
            <div className="hero-stage" aria-label="Ekosistem produk Goghotech">
              <div className="stage-grid" />
              <div className="stage-word">GO</div>
              <div className="stage-label label-one">PRODUCTIVITY<br /><b>IN MOTION</b></div>
              <div className="stage-label label-two">GOGHOTECH®<br /><b>EST. 2025</b></div>
              <div className="product-window window-notes">
                <div className="window-bar"><span>GoNotes</span><i /><i /></div>
                <small>TODAY'S FOCUS</small>
                <strong>Design what<br />matters.</strong>
                <div className="window-lines"><i /><i /><i /></div>
              </div>
              <div className="product-window window-fin">
                <div className="window-bar"><span>GoFin</span><i /></div>
                <span className="balance-label">MONTHLY BALANCE</span>
                <strong>+18.4%</strong>
                <div className="stage-chart">{[38,52,45,70,62,86,74,96].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              </div>
              <div className="stage-orb">
                <span>G</span>
                <i />
              </div>
              <div className="stage-ticker">
                <span>CREATE</span><i /> <span>CONNECT</span><i /> <span>GROW</span>
              </div>
              <div className="stage-status">
                <i /><span>All systems<br /><b>beautifully connected</b></span>
              </div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <div>
              <span>PRODUCTIVITY</span><i /> <span>DIGITAL EXPERIENCES</span><i />
              <span>EDUCATION</span><i /> <span>BUSINESS INTELLIGENCE</span><i />
              <span>PRODUCTIVITY</span><i /> <span>DIGITAL EXPERIENCES</span><i />
            </div>
          </div>
        </section>

        <section className="section apps-section" id="apps">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="kicker">01 / THE GO-SERIES</span>
                <h2>Alat digital untuk<br /><em>hidup yang bergerak.</em></h2>
              </div>
              <p>Sederhana untuk digunakan, powerful saat dibutuhkan. Semua dirancang untuk bekerja selaras dengan caramu.</p>
            </div>
            <div className="bento-grid">
              {apps.map((app) => <AppCard key={app.name} app={app} />)}
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="service-glow" aria-hidden="true" />
          <div className="container">
            <div className="section-heading inverse">
              <div>
                <span className="kicker">02 / DIGITAL STUDIO</span>
                <h2>From brief to<br /><em>breakthrough.</em></h2>
              </div>
              <p>Dari ide hingga produk digital yang nyata. Kami menggabungkan strategi, desain, dan teknologi dalam satu proses.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <article className="service-card" key={service.name}>
                    <div className={`service-visual service-visual-${index + 1}`}>
                      {index === 0 && <div className="mini-browser">
                        <div><i /><i /><i /></div>
                        <span /><span /><span />
                        <b>↗</b>
                      </div>}
                      {index === 1 && <div className="mini-invite">
                        <i className="invite-orbit" />
                        <span>G</span><small>YOU’RE INVITED</small>
                      </div>}
                      <div className="service-icon"><ServiceIcon /></div>
                    </div>
                    <span className="service-label">{service.label}</span>
                    <h3>{service.name}</h3>
                    <h4>{service.subtitle}</h4>
                    <p>{service.description}</p>
                    <Button variant="light" disabled>Coming Soon</Button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="container education-grid">
            <div className="education-copy">
              <span className="kicker">03 / GOEDUKASI</span>
              <h2>Belajar bukan<br />satu ukuran untuk <span>semua.</span></h2>
              <p>Platform les privat yang mempertemukan siswa dengan pengajar terbaik. Jadwal fleksibel, materi personal, dan progres yang terukur.</p>
              <ul>
                <li><span>✓</span> Pengajar terverifikasi dan berpengalaman</li>
                <li><span>✓</span> Belajar online atau tatap muka</li>
                <li><span>✓</span> Program sesuai kebutuhan siswa</li>
              </ul>
              <div className="education-actions">
                <Button href="#contact">Daftar Siswa <Arrow /></Button>
                <Button href="#contact" variant="secondary">Gabung Guru</Button>
              </div>
            </div>
            <div className="education-art" aria-label="Ilustrasi pembelajaran digital">
              <div className="art-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="cap">
                <div className="cap-top" />
                <div className="cap-base" />
                <div className="cap-tassel" />
              </div>
              <div className="float-card card-student"><span>Student progress</span><strong>+24%</strong></div>
              <div className="float-card card-session"><i /><span>Session completed</span></div>
              <div className="art-pill">LEARN • GROW • ACHIEVE</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo logo-light" href="#top">
              <Image src={goghotechLogo} alt="" width={32} height={32} />
              <span>Goghotech</span>
            </a>
            <p>Ekosistem digital Indonesia untuk bekerja, belajar, dan bertumbuh lebih baik.</p>
          </div>
          <div>
            <h3>Products</h3>
            <a href="#apps">GoNotes</a><a href="#apps">GoLib</a><a href="#apps">GoFin</a><a href="#apps">GoTest</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#services">Custom Web</a><a href="#services">Digital Invitation</a><a href="#education">GoEdukasi</a>
          </div>
          <div>
            <h3>Let’s connect</h3>
            <a href="mailto:hello@goghotech.com">hello@goghotech.com</a>
            <a href="#top">Instagram</a><a href="#top">LinkedIn</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Goghotech. Made for progress.</span>
          <div><a href="#top">Privacy</a><a href="#top">Terms</a></div>
        </div>
      </footer>
    </div>
  );
}
