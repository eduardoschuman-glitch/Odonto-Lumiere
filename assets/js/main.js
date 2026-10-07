/* Instituto Lumière · interações da página */
(() => {
  const VID = 'https://eduardoschuman-glitch.github.io/Arquivos-Lumiere-Odonto/';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- dados ---------------- */
  const CASES = [
    { id: 'caso-01', w: 1200, h: 600, tag: 'Prótese protocolo', title: 'De volta à mesa, sem medo.',
      text: 'Sem dentes na arcada, a paciente convivia com a insegurança na hora de comer e de sorrir. Com a prótese protocolo sobre implantes, os dentes fixos devolveram firmeza para mastigar e naturalidade ao sorriso.' },
    { id: 'caso-11', w: 1200, h: 900, tag: 'Prótese protocolo', title: 'Um sorriso que acompanha a idade.',
      text: 'Dentes desgastados e escurecidos deram lugar a uma reabilitação com protocolo, pensada para respeitar a harmonia do rosto. Natural, firme e com a cara da paciente.' },
    { id: 'caso-04', w: 1200, h: 900, tag: 'Prótese protocolo', title: 'Sorrir de novo, de boca aberta.',
      text: 'Com poucos dentes e muita insegurança para sorrir, o paciente fez a reabilitação completa com protocolo. O planejamento digital guiou cada implante até o resultado final.' },
    { id: 'caso-06', w: 1200, h: 900, tag: 'Prótese protocolo', title: 'Firmeza para mastigar o que gosta.',
      text: 'Dentes comprometidos que vinham sendo remendados por anos. A prótese protocolo trouxe estabilidade e devolveu o prazer de comer sem preocupação.' },
    { id: 'caso-07', w: 1200, h: 600, tag: 'Prótese protocolo', title: 'Luz no sorriso, leveza na rotina.',
      text: 'Dentes escurecidos e com perdas foram substituídos por uma arcada fixa sobre implantes. Um sorriso claro, proporcional e seguro para o dia a dia.' },
    { id: 'caso-10', w: 1200, h: 900, tag: 'Reabilitação do sorriso', title: 'O mesmo sorriso, mais confiante.',
      text: 'Com cor, forma e alinhamento planejados para o rosto da paciente, a reabilitação deixou o sorriso mais harmônico sem perder a naturalidade.' },
    { id: 'caso-02', w: 1200, h: 545, tag: 'Facetas e coroas', title: 'Proporção e harmonia.',
      text: 'Espaços, diferenças de tamanho e desgastes corrigidos com facetas e coroas. Detalhe por detalhe, para um resultado equilibrado e natural.' },
    { id: 'caso-03', w: 1200, h: 600, tag: 'Facetas', title: 'Dentes fraturados, sorriso inteiro.',
      text: 'Os dentes da frente, fraturados e desgastados, foram restaurados com facetas. Forma e cor devolvidas com precisão.' }
  ];

  const TESTI = [
    { file: 'depoimento-joao', name: 'João', tag: 'Extração de siso', quote: 'Vi que a atenção e o respeito com o paciente começaram muito antes do procedimento.' },
    { file: 'depoimento-lidia', name: 'Dona Lídia', tag: 'Prótese protocolo', quote: 'Antes do protocolo, eu me sentia muito insegura pra falar, pra mastigar, pra rir.' },
    { file: 'depoimento-edival', name: 'Sr. Edival', tag: 'Reabilitação oral', quote: 'Eu nunca achei que o procedimento dentário ia mudar tanto a minha vida.' },
    { file: 'depoimento-neusa', name: 'Dona Neusa', tag: 'Implantes · 71 anos', quote: 'É como se fossem os dentes naturais. Estou muito feliz com esse sorriso.' },
    { file: 'depoimento-gabriel', name: 'Gabriel', tag: 'Extração de siso · 17 anos', quote: 'Eu estava bem ansioso, mas fui acalmado. Foi tudo muito tranquilo.' }
  ];

  const POSTS = [
    { file: 'zigomatico', cat: 'implantes', catLabel: 'Implantes', title: 'Implante zigomático: quando falta osso',
      desc: 'Ouviu que não tinha osso para implante e que teria que usar prótese móvel para sempre? Entenda como o implante zigomático pode ser uma segunda opção para ter dentes fixos.' },
    { file: 'trauma-carla', cat: 'bem-estar', catLabel: 'Medo de dentista', title: 'Trauma de dentista: a história da Carla',
      desc: 'A fundadora do Instituto conta a experiência que viveu na infância e por que ela fez do acolhimento a base de tudo. Para quem tem medo e quer dar uma nova chance.' },
    { file: 'tomografia-computadorizada', cat: 'tecnologia', catLabel: 'Exames', title: 'Tomografia computadorizada',
      desc: 'Por que o exame em 3D faz diferença no planejamento do seu tratamento, trazendo mais previsibilidade e segurança ao resultado.' },
    { file: 'radiografia-panoramica-e-tomografia', cat: 'tecnologia', catLabel: 'Exames', title: 'Raio-X e tomografia no mesmo lugar',
      desc: 'Chega de sair da avaliação com um pedido de exame para fazer em outro endereço. Veja como funciona ter tudo dentro da clínica.' },
    { file: 'autoestima', cat: 'bem-estar', catLabel: 'Autoestima', title: 'Autoestima e sorriso',
      desc: 'Colocar a mão na frente da boca na roda de amigos mexe com a vida social e com a saúde. Um olhar sobre o lado emocional de voltar a sorrir.' },
    { file: 'neurociencia-explica', cat: 'bem-estar', catLabel: 'Bem-estar', title: 'A neurociência do sorriso',
      desc: 'O que acontece no cérebro quando você sorri e por que esconder o sorriso por vergonha também afeta o seu bem-estar.' },
    { file: 'saude-nutricional', cat: 'bem-estar', catLabel: 'Saúde integral', title: 'Mastigação e saúde nutricional',
      desc: 'Quem não mastiga bem acaba comendo pior. Entenda a relação entre os dentes, a alimentação e a sua saúde como um todo.' },
    { file: 'saude-bucal-preventiva', cat: 'prevencao', catLabel: 'Prevenção', title: 'Saúde bucal preventiva',
      desc: 'Por que não esperar a dor para ir ao dentista. Um diagnóstico precoce resolve pequeno o que poderia virar um problema grande.' },
    { file: 'escovacao', cat: 'prevencao', catLabel: 'Prevenção', title: 'A ordem certa da higiene bucal',
      desc: 'Fio dental, escova ou raspador de língua: qual vem primeiro? A sequência muda o resultado. Confira se você faz do jeito certo.' },
    { file: 'pre-natal-odontologico', cat: 'prevencao', catLabel: 'Gestantes', title: 'Pré-natal odontológico',
      desc: 'Gestante pode ir ao dentista? Não só pode como deve. Saiba por que a saúde da gengiva na gravidez também cuida do bebê.' },
    { file: 'alinhadores-invisiveis', cat: 'estetica', catLabel: 'Ortodontia', title: 'Alinhadores invisíveis',
      desc: 'Como funciona o ClearCorrect, o aparelho transparente que sai na hora de comer e de escovar. Mais conforto e discrição para alinhar o sorriso.' }
  ];

  const pad = n => String(n).padStart(2, '0');

  /* ---------------- header ---------------- */
  const header = $('.header');
  const wa = $('#waFloat');
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('scrolled', y > 40);
    header.classList.toggle('hide', y > 600 && y > lastY && !document.body.classList.contains('menu-open'));
    wa.classList.toggle('show', y > innerHeight * .8);
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menuBtn = $('.menu-btn');
  const toggleMenu = open => {
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    $('.mobile-menu').setAttribute('aria-hidden', !open);
  };
  menuBtn.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ---------------- reveal ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  const observeReveals = root => $$('.reveal, .h-display', root).forEach(el => io.observe(el));
  observeReveals(document);
  requestAnimationFrame(() => $('.hero .h-display').classList.add('in'));

  /* ---------------- parallax ---------------- */
  if (!reduce) {
    const heroImg = $('.hero-media img');
    const pels = $$('[data-parallax-el]');
    let ticking = false;
    const par = () => {
      const y = scrollY;
      if (y < innerHeight) heroImg.style.translate = `0 ${y * .18}px`;
      pels.forEach(el => {
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        el.style.translate = `0 ${p * parseFloat(el.dataset.parallaxEl)}px`;
      });
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(par); } }, { passive: true });
  }

  /* ---------------- vídeo de apresentação ----------------
     Sem controles de pausa: toca sozinho quando aparece na tela
     e pausa quando a pessoa rola a página para longe dele. */
  const iv = $('#introVideo');
  const bar = $('#introBar');
  const snd = $('#introSound');
  if (iv) {
    iv.addEventListener('contextmenu', e => e.preventDefault());
    const vio = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio > .45) iv.play().catch(() => {});
      else iv.pause();
    }, { threshold: [0, .45, 1] });
    vio.observe(iv);
    const tick = () => {
      if (iv.duration) bar.style.transform = `scaleX(${iv.currentTime / iv.duration})`;
      requestAnimationFrame(tick);
    };
    tick();
    snd.addEventListener('click', () => {
      iv.muted = !iv.muted;
      snd.setAttribute('aria-pressed', String(!iv.muted));
      snd.innerHTML = iv.muted
        ? '<svg><use href="#i-sound-off"/></svg><span>Ativar som</span>'
        : '<svg><use href="#i-sound-on"/></svg><span>Som ativado</span>';
      if (!iv.muted) iv.play().catch(() => {});
    });
  }

  /* ---------------- antes e depois ---------------- */
  function initBA(el) {
    let dragging = false;
    const set = pct => {
      pct = Math.max(0, Math.min(100, pct));
      el.style.setProperty('--pos', pct + '%');
      el.setAttribute('aria-valuenow', Math.round(pct));
    };
    const fromEvent = e => {
      const r = el.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    };
    el.addEventListener('pointerdown', e => {
      dragging = true; el.classList.add('dragging');
      el.style.transition = 'none';
      fromEvent(e);
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', e => { if (dragging) fromEvent(e); });
    const end = () => { dragging = false; el.classList.remove('dragging'); };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('keydown', e => {
      const cur = parseFloat(getComputedStyle(el).getPropertyValue('--pos')) || 50;
      if (e.key === 'ArrowLeft') { set(cur - 5); e.preventDefault(); }
      if (e.key === 'ArrowRight') { set(cur + 5); e.preventDefault(); }
    });
    el._set = set;
    return el;
  }

  // pequena demonstração do arraste quando o comparador aparece
  function hint(el) {
    if (reduce) return;
    const seq = [50, 22, 78, 50];
    let i = 0;
    const step = () => {
      if (i >= seq.length) return;
      el._set(seq[i++]);
      setTimeout(step, 520);
    };
    el.querySelectorAll('.ba-before, .ba-line, .ba-knob').forEach(n => n.style.transition = 'clip-path .5s cubic-bezier(.22,1,.36,1), left .5s cubic-bezier(.22,1,.36,1)');
    step();
    setTimeout(() => el.querySelectorAll('.ba-before, .ba-line, .ba-knob').forEach(n => n.style.transition = ''), seq.length * 520 + 200);
  }

  const mainBA = initBA($('#mainBA'));
  const thumbs = $('#thumbs');
  let current = 0;
  $('#vTotal').textContent = pad(CASES.length);
  CASES.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'thumb';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Caso ${i + 1}: ${c.tag}`);
    b.innerHTML = `<img src="assets/img/${c.id}-depois.webp" alt="" loading="lazy"><span>${pad(i + 1)}</span>`;
    b.addEventListener('click', () => showCase(i));
    thumbs.appendChild(b);
  });
  // pré-carrega as imagens dos casos depois que a página termina de carregar
  addEventListener('load', () => setTimeout(() => CASES.forEach(c => { new Image().src = `assets/img/${c.id}-antes.webp`; new Image().src = `assets/img/${c.id}-depois.webp`; }), 1500));

  function showCase(i, first) {
    current = (i + CASES.length) % CASES.length;
    const c = CASES[current];
    const txt = $('#viewerText');
    const apply = () => {
      const a = mainBA.querySelector('.ba-after');
      const b = mainBA.querySelector('.ba-before img');
      a.src = `assets/img/${c.id}-depois.webp`; a.width = c.w; a.height = c.h;
      b.src = `assets/img/${c.id}-antes.webp`; b.width = c.w; b.height = c.h;
      mainBA.style.aspectRatio = `${c.w} / ${c.h}`;
      $('#vTag').textContent = c.tag;
      $('#vTitle').textContent = c.title;
      $('#vText').textContent = c.text;
      $('#vNum').textContent = pad(current + 1);
      mainBA._set(50);
      txt.classList.remove('out');
      mainBA.style.opacity = 1;
    };
    $$('.thumb', thumbs).forEach((t, k) => t.classList.toggle('active', k === current));
    const act = $$('.thumb', thumbs)[current];
    thumbs.scrollTo({ left: act.offsetLeft - thumbs.clientWidth / 2 + act.clientWidth / 2, behavior: 'smooth' });
    if (first) { apply(); return; }
    txt.classList.add('out');
    mainBA.style.transition = 'opacity .35s';
    mainBA.style.opacity = 0;
    setTimeout(() => { apply(); setTimeout(() => hint(mainBA), 300); }, 350);
  }
  // o comparador ocupa a altura máxima sem distorcer a foto
  const fitBA = () => {
    const c = CASES[current];
    const stage = mainBA.parentElement;
    const maxH = parseFloat(getComputedStyle(mainBA).maxHeight) || 600;
    const w = Math.min(stage.clientWidth, maxH * c.w / c.h);
    mainBA.style.width = w + 'px';
  };
  addEventListener('resize', fitBA);
  const _show = showCase;
  showCase = (i, f) => { _show(i, f); requestAnimationFrame(fitBA); setTimeout(fitBA, 360); };
  showCase(0, true);
  fitBA();
  $('#vPrev').addEventListener('click', () => showCase(current - 1));
  $('#vNext').addEventListener('click', () => showCase(current + 1));
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { setTimeout(() => hint(mainBA), 600); o.disconnect(); } }, { threshold: .5 }).observe(mainBA);

  /* ---------------- depoimentos (carrossel infinito) ---------------- */
  const car = $('#carousel');
  const dotsEl = $('#tDots');
  const N = TESTI.length;
  const card = (t, i) => `
    <article class="t-card" data-i="${i}">
      <img src="${VID}depoimentos/${t.file}.jpg" alt="" loading="lazy" draggable="false">
      <button class="t-play" aria-label="Assistir ao depoimento de ${t.name}"><svg><use href="#i-play"/></svg></button>
      <div class="t-body">
        <h3 class="t-name">${t.name}<small>${t.tag}</small></h3>
        <p class="t-quote">“${t.quote}”</p>
      </div>
    </article>`;
  // três cópias da lista: começa na do meio e "teletransporta" nas pontas
  car.innerHTML = [0, 1, 2].map(() => TESTI.map(card).join('')).join('');
  dotsEl.innerHTML = TESTI.map(() => '<i></i>').join('');
  const cards = () => $$('.t-card', car);
  let setW = 0;
  const measure = () => {
    const cs = cards();
    setW = cs[N].offsetLeft - cs[0].offsetLeft;
  };
  const playing = () => !!car.querySelector('video');
  const recenter = () => {
    if (!setW || playing()) return;
    if (car.scrollLeft < setW * .5) car.scrollLeft += setW;
    else if (car.scrollLeft > setW * 1.5) car.scrollLeft -= setW;
  };
  const updateDots = () => {
    const cs = cards();
    const mid = car.scrollLeft + parseFloat(getComputedStyle(car).scrollPaddingLeft || 0) + 2;
    let best = 0, bd = Infinity;
    cs.forEach((c, k) => { const d = Math.abs(c.offsetLeft - mid); if (d < bd) { bd = d; best = k; } });
    $$('i', dotsEl).forEach((d, k) => d.classList.toggle('on', k === best % N));
  };
  const initCarousel = () => {
    measure();
    car.scrollLeft = setW + (cards()[0].offsetLeft - car.offsetLeft) - parseFloat(getComputedStyle(car).scrollPaddingLeft || 0);
    car.scrollLeft = setW;
    updateDots();
  };
  addEventListener('load', initCarousel);
  addEventListener('resize', () => { measure(); recenter(); });
  initCarousel();
  let st;
  car.addEventListener('scroll', () => {
    updateDots();
    clearTimeout(st);
    st = setTimeout(recenter, 140);
  }, { passive: true });

  const stepW = () => { const cs = cards(); return cs[1].offsetLeft - cs[0].offsetLeft; };
  $('#tPrev').addEventListener('click', () => { recenter(); car.scrollBy({ left: -stepW(), behavior: 'smooth' }); });
  $('#tNext').addEventListener('click', () => { recenter(); car.scrollBy({ left: stepW(), behavior: 'smooth' }); });

  // arrastar com o mouse no desktop (no celular o toque já rola nativamente)
  let down = false, sx = 0, sl = 0, moved = 0;
  car.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.target.closest('video, .t-close')) return;
    down = true; moved = 0; sx = e.clientX; sl = car.scrollLeft;
  });
  addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - sx;
    moved = Math.max(moved, Math.abs(dx));
    if (moved > 5) car.classList.add('dragging');
    car.scrollLeft = sl - dx;
  });
  addEventListener('pointerup', () => {
    if (!down) return;
    down = false;
    if (car.classList.contains('dragging')) {
      car.classList.remove('dragging');
      // encaixa no card mais próximo
      const w = stepW();
      const base = cards()[0].offsetLeft - car.offsetLeft - parseFloat(getComputedStyle(car).scrollPaddingLeft || 0);
      const target = Math.round((car.scrollLeft - base) / w) * w + base;
      car.scrollTo({ left: target, behavior: 'smooth' });
    }
  });
  car.addEventListener('click', e => {
    if (moved > 5) { e.preventDefault(); e.stopPropagation(); moved = 0; return; }
    const c = e.target.closest('.t-card');
    if (!c) return;
    if (e.target.closest('.t-close')) { closeCardVideo(c); return; }
    if (c.querySelector('video')) return;
    openCardVideo(c);
  }, true);

  function closeCardVideo(c) {
    const v = c.querySelector('video');
    if (v) { v.pause(); v.remove(); }
    c.querySelector('.t-close')?.remove();
  }
  function openCardVideo(c) {
    cards().forEach(o => o !== c && closeCardVideo(o));
    iv && iv.pause();
    const t = TESTI[+c.dataset.i];
    const v = document.createElement('video');
    v.src = `${VID}depoimentos/${t.file}.mp4`;
    v.poster = `${VID}depoimentos/${t.file}.jpg`;
    v.controls = true; v.playsInline = true; v.autoplay = true;
    v.setAttribute('playsinline', '');
    v.addEventListener('ended', () => closeCardVideo(c));
    c.appendChild(v);
    const x = document.createElement('button');
    x.className = 't-close'; x.setAttribute('aria-label', 'Fechar vídeo');
    x.innerHTML = '<svg><use href="#i-close"/></svg>';
    c.appendChild(x);
    v.play().catch(() => {});
  }
  // pausa o depoimento se ele sair da tela
  new IntersectionObserver(([e]) => { if (!e.isIntersecting) cards().forEach(closeCardVideo); }, { threshold: 0 }).observe(car);

  /* ---------------- conteúdos (blog) ---------------- */
  const grid = $('#blogGrid');
  grid.innerHTML = POSTS.map((p, i) => `
    <button class="post reveal${i === 0 ? ' featured' : ''}" data-cat="${p.cat}" data-k="${i}" data-delay="${i % 4}">
      <div class="post-media">
        <img src="${VID}blog/${p.file}.jpg" alt="" loading="lazy">
        <span class="p-cat">${p.catLabel}</span>
        <span class="p-play"><i><svg><use href="#i-play"/></svg></i><span>Assistir</span></span>
      </div>
      <div class="post-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <span class="link-arrow">Assistir ao vídeo <svg><use href="#i-arrow"/></svg></span>
      </div>
    </button>`).join('');
  observeReveals(grid);

  $$('#filters button').forEach(b => b.addEventListener('click', () => {
    $$('#filters button').forEach(x => x.classList.toggle('on', x === b));
    const f = b.dataset.f;
    $$('.post', grid).forEach(p => {
      const show = f === 'todos' || p.dataset.cat === f;
      p.classList.toggle('hidden', !show);
      p.classList.toggle('featured', f === 'todos' && p.dataset.k === '0');
    });
  }));

  const modal = $('#vmodal');
  const mv = $('#vmodalVideo');
  const openPost = p => {
    $('#vmodalCat').textContent = p.catLabel;
    $('#vmodalTitle').textContent = p.title;
    $('#vmodalDesc').textContent = p.desc;
    mv.poster = `${VID}blog/${p.file}.jpg`;
    mv.src = `${VID}blog/${p.file}.mp4`;
    iv && iv.pause();
    cards().forEach(closeCardVideo);
    modal.showModal();
    document.body.style.overflow = 'hidden';
    mv.play().catch(() => {});
  };
  const closeModal = () => { mv.pause(); mv.removeAttribute('src'); mv.load(); modal.close(); };
  modal.addEventListener('close', () => { mv.pause(); document.body.style.overflow = ''; });
  $('#vmodalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal || e.target.classList.contains('vmodal-inner')) closeModal(); });
  grid.addEventListener('click', e => { const b = e.target.closest('.post'); if (b) openPost(POSTS[+b.dataset.k]); });
  $$('[data-video]').forEach(b => b.addEventListener('click', () => openPost(POSTS.find(p => p.file === b.dataset.video))));

  /* ---------------- FAQ: um aberto por vez ---------------- */
  $$('.qa').forEach(d => d.addEventListener('toggle', () => {
    if (d.open) $$('.qa').forEach(o => o !== d && (o.open = false));
  }));

  $('#year').textContent = new Date().getFullYear();
})();
