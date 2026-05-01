# Background layer for the CTA sectio

Use this as a background layer on the final CTA section

Where it should appear :

```
(<div class="wrap">
    <div class="final" style="background: var(--accent); color: var(--cream);">
      <div class="seal"><img src="uploads/IconoirLeaf.svg" alt="" aria-hidden="true"></div>
      <span class="eyebrow" style="color: var(--sage-3);">Commencer</span>
      <h2 style="margin-top: 20px;">Un dernier geste qui <em>ressemble</em> à celui ou celle qu'on aime.</h2>
      <p>Prenez 10 minutes pour préparer un pré-arrangement, ou parlez immédiatement à une conseillère. Aucune obligation, simplement un geste qui peut tout changer.</p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a href="#" class="btn">Planifier une crémation<span class="arrow">→</span></a>
        <a href="[def]" class="btn ghost">(438) 500-6288</a>
      </div>
    </div>
  </div>)
```
What should be used for adding texture layer to the background :
```
<div className="absolute inset-0 z-0">
  <div
    className="absolute inset-0"
    style={{
      WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 0.5px, transparent 0)',
      backgroundSize: '8px 8px',
      maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      opacity: 0.3
    }}
  />
  <div
    className="absolute inset-0"
    style={{
      WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)',
      backgroundSize: '24px 24px',
      maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      opacity: 0.2
    }}
  />
  <div
    className="absolute inset-0"
    style={{
      WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 2px, transparent 0)',
      backgroundSize: '56px 56px',
      maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 70%)',
      opacity: 0.15
    }}
  />
</div>
```

[def]: el:438500628