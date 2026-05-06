  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "Sauge \/ Crème",
    "headline": "Un dernier geste qui redonne à la terre.",
    "urgentBar": true,
    "darkFinal": true
  }/*EDITMODE-END*/;

  const PALETTES = {
    "Sauge / Crème": { bg:"#F2EFE8", bg2:"#E9E4D8", ink:"#1D2620", ink2:"#3B4640", muted:"#6E7770", line:"#C9C2B2", line2:"#D9D3C3", sage:"#6B7A5A", sage2:"#8FA07C", sage3:"#C7CFB6", cream:"#F8F5EC", accent:"#2E3A2C" },
    "Brume / Bleu-vert":{ bg:"#ECEEEA", bg2:"#DFE3DD", ink:"#1A2224", ink2:"#384043", muted:"#6B7375", line:"#BDC5C2", line2:"#CFD6D2", sage:"#5F7D7A", sage2:"#7E9C98", sage3:"#C2D0CC", cream:"#F4F6F2", accent:"#253233" },
    "Terre / Lin":  { bg:"#F2ECE0", bg2:"#E6DECC", ink:"#2A2520", ink2:"#463E35", muted:"#7A6F62", line:"#CBBFA8", line2:"#D9CEB8", sage:"#8B6A3E", sage2:"#A98A5E", sage3:"#D9C5A0", cream:"#F8F2E4", accent:"#3A2F23" },
    "Nuit sauge":   { bg:"#1A2220", bg2:"#222B28", ink:"#ECEAE0", ink2:"#C8CCC1", muted:"#8A9088", line:"#3B4640", line2:"#2B3431", sage:"#A9B89A", sage2:"#8FA07C", sage3:"#5E6E56", cream:"#ECEAE0", accent:"#0E1513" }
  };

  function App(){
    const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
    const { TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakText } = window;

    React.useEffect(() => {
      const p = PALETTES[tweaks.palette] || PALETTES["Sauge / Crème"];
      const r = document.documentElement;
      r.style.setProperty('--bg', p.bg);
      r.style.setProperty('--bg-2', p.bg2);
      r.style.setProperty('--ink', p.ink);
      r.style.setProperty('--ink-2', p.ink2);
      r.style.setProperty('--muted', p.muted);
      r.style.setProperty('--line', p.line);
      r.style.setProperty('--line-2', p.line2);
      r.style.setProperty('--sage', p.sage);
      r.style.setProperty('--sage-2', p.sage2);
      r.style.setProperty('--sage-3', p.sage3);
      r.style.setProperty('--cream', p.cream);
      r.style.setProperty('--accent', p.accent);
    }, [tweaks.palette]);

    const DEFAULT_HEADLINE_HTML = 'Un dernier geste<br>\nqui <em>redonne</em><br>\nà la terre.';
    React.useEffect(() => {
      const h1 = document.querySelector('.hero h1');
      if (!h1) return;
      const current = (tweaks.headline || '').trim();
      const defaultPlain = 'Un dernier geste qui redonne à la terre.';
      if (!current || current === defaultPlain) {
        h1.innerHTML = DEFAULT_HEADLINE_HTML;
        return;
      }
      // italicize an evocative verb if present; let the browser wrap.
      const html = current
        .replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/\b(redonne|renâît|continue|fleurit|pacifie|planter|plante|vit|grandit|respire|demeure)\b/i,
                 '<em>$1</em>');
      h1.innerHTML = html;
    }, [tweaks.headline]);

    React.useEffect(() => {
      const ub = document.querySelector('.urgent');
      if (ub) ub.style.display = tweaks.urgentBar ? '' : 'none';
    }, [tweaks.urgentBar]);

    React.useEffect(() => {
      const f = document.querySelector('.final');
      if (!f) return;
      if (tweaks.darkFinal){
        f.style.background = 'var(--accent)';
        f.style.color = 'var(--cream)';
      } else {
        f.style.background = 'var(--sage-3)';
        f.style.color = 'var(--accent)';
      }
    }, [tweaks.darkFinal]);

    return (
      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio label="Ambiance" value={tweaks.palette}
            options={Object.keys(PALETTES)}
            onChange={v => setTweak('palette', v)} />
        </TweakSection>
        <TweakSection title="Contenu">
          <TweakText label="Titre hero" value={tweaks.headline}
            onChange={v => setTweak('headline', v)} />
          <TweakToggle label="Barre urgence 24/7" value={tweaks.urgentBar}
            onChange={v => setTweak('urgentBar', v)} />
          <TweakToggle label="CTA final sombre" value={tweaks.darkFinal}
            onChange={v => setTweak('darkFinal', v)} />
        </TweakSection>
      </TweaksPanel>
    );
  }

  // Tweaks kit wrapper — the starter exposes hooks/components via window after load.
  // We wait for it.
  function boot(){
    if (!window.useTweaks || !window.TweaksPanel){ return setTimeout(boot, 50); }
    const mount = document.createElement('div'); document.body.appendChild(mount);
    ReactDOM.createRoot(mount).render(<App/>);
  }
  boot();

  // Accordion
  document.querySelectorAll('.acc-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const isOpen = item.dataset.open === 'true';
      document.querySelectorAll('.acc-item').forEach(i => {
        i.dataset.open = 'false';
        i.querySelector('.acc-trigger').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.dataset.open = 'true';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Auto-stagger children inside [data-reveal-group]
  document.querySelectorAll('[data-reveal-group]').forEach(group => {
    group.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.transitionDelay = (i * 85) + 'ms';
    });
  });

  // Counter animation
  function animateCount(el) {
    const raw = el.dataset.count;
    const target = parseInt(raw.replace(/\s/g, ''), 10);
    if (isNaN(target)) return;
    const duration = 1100;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const fmt = n => n.toLocaleString('fr-CA');
    (function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = fmt(Math.round(easeOut(t) * target));
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('show');
      e.target.querySelectorAll('[data-count]').forEach(animateCount);
      io.unobserve(e.target);
    });
  }, { threshold: .1 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
