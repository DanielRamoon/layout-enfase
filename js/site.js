const projects = [
  { scene: "bar", kind: "Site", domain: "bardocais.com.br", name: "Bar do Cais", line: "Coquetelaria para eventos", title: "Onde cada taça conta uma história." },
  { scene: "perf", kind: "Site", domain: "norteperformance.com.br", name: "Norte Performance", line: "Agência de tráfego e performance", title: "Performance que vira conversa." },
  { scene: "clinic", kind: "Landing page", domain: "clinicahorizonte.com.br", name: "Clínica Horizonte", line: "Landing de saúde", title: "Sua saúde merece escuta e cuidado." },
  { scene: "pizza", kind: "Site", domain: "fornoefolha.com.br", name: "Forno & Folha", line: "Pizzaria de bairro", title: "Assada na hora, servida quente." },
  { scene: "shop", kind: "Loja", domain: "vitacampo.com.br", name: "Vita Campo", line: "Suplementos naturais", title: "O essencial do dia, num clique." },
  { scene: "house", kind: "Site", domain: "casamare.com.br", name: "Casa Maré", line: "Casa de temporada", title: "A semana inteira com cheiro de mar." },
  { scene: "dental", kind: "Site", domain: "sorrisocentro.com.br", name: "Sorriso Centro", line: "Clínica odontológica", title: "Cuidado claro, agenda fácil." },
  { scene: "shoes", kind: "Loja", domain: "passolivre.com.br", name: "Passo Livre", line: "Calçados e esporte", title: "O par certo para o seu ritmo." },
  { scene: "drink", kind: "Site", domain: "lote12.com.br", name: "Lote 12", line: "Bebidas", title: "Rótulo curto. Sabor longo." },
  { scene: "perf", kind: "Site", domain: "oficinaleme.com.br", name: "Oficina Leme", line: "Reformas", title: "Obra organizada, prazo visível." },
  { scene: "clinic", kind: "Landing page", domain: "brilhon.com.br", name: "Brilho N.", line: "Beleza", title: "Um protocolo, um resultado." },
  { scene: "house", kind: "Site", domain: "obraserena.com.br", name: "Obra Serena", line: "Engenharia", title: "Projeto técnico, linguagem simples." },
  { scene: "clinic", kind: "Site", domain: "casadaescuta.com.br", name: "Casa da Escuta", line: "Psicoterapia", title: "Um espaço para começar a falar." },
  { scene: "bar", kind: "Site", domain: "oficinaafrica.com.br", name: "Oficina África", line: "Serralheria", title: "Metal sob medida, do portão ao corrimão." },
  { scene: "shop", kind: "Landing page", domain: "rendaprotegida.com.br", name: "Renda Protegida", line: "Corretora", title: "Proteção explicada sem letra miúda." }
];

const grid = document.querySelector("#project-grid");
const linkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>';
const expandIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 4H4v5"/><path d="M15 4h5v5"/><path d="M9 20H4v-5"/><path d="M15 20h5v-5"/></svg>';

function page(project) {
  const title = project.title;
  const scenes = {
    bar: `
      <div class="only-desk"><div class="portrait bar-cover"></div><div class="bar-nav" style="position:relative;z-index:1;padding:8px 12px"><strong>${project.name.toUpperCase()}</strong><span>Eventos</span></div><div class="bar-copy overlay"><small>Carta da casa</small><h5>${title}</h5><span class="chip-btn">Reservar</span></div></div>
      <div class="only-phone"><strong>${project.name}</strong><div class="portrait tall"></div><h5>${title}</h5></div>`,
    perf: `
      <div class="only-desk"><div class="perf-layout"><div><small>Tráfego</small><h5>${title}</h5><div class="stat-row"><span>+18 leads</span><span>+40%</span></div><span class="chip-btn">Falar agora</span></div><div class="horn"></div></div></div>
      <div class="only-phone"><small>Tráfego</small><h5>${title}</h5><div class="horn" style="margin:10px auto"></div></div>`,
    clinic: `
      <div class="only-desk"><div class="clinic-layout"><div><small>Cuidado</small><h5>${title}</h5><div class="float-tags"><span>Escuta</span><span>Ciência</span><span>Cuidado</span></div></div><div class="doctor"></div></div></div>
      <div class="only-phone"><h5>${title}</h5><div class="doctor tall" style="flex:1"></div></div>`,
    pizza: `
      <div class="only-desk"><div class="pizza-layout"><div><small>Forno a lenha</small><h5>${title}</h5><span class="chip-btn">Ver cardápio</span></div><div class="pizza-pie"></div></div></div>
      <div class="only-phone"><div class="pizza-pie" style="width:54px;height:54px"></div><h5>${title}</h5></div>`,
    shop: `
      <div class="only-desk"><div class="shop-layout"><div><small>Loja</small><h5>${title}</h5><span class="chip-btn">Comprar</span></div><div class="bottle"></div></div></div>
      <div class="only-phone"><div class="bottle" style="height:64px"></div><h5>${title}</h5></div>`,
    house: `
      <div class="only-desk"><small>Bahia</small><h5>${title}</h5><div class="cottage"></div></div>
      <div class="only-phone"><h5>${title}</h5><div class="cottage"></div></div>`,
    dental: `
      <div class="only-desk"><div class="shop-layout"><div><small>Odonto</small><h5>${title}</h5><span class="chip-btn">Agendar</span></div><div class="tooth"></div></div></div>
      <div class="only-phone"><div class="tooth"></div><h5>${title}</h5></div>`,
    shoes: `
      <div class="only-desk"><small>Esporte</small><h5>${title}</h5><div class="sneaker"></div></div>
      <div class="only-phone"><h5>${title}</h5><div class="sneaker" style="width:64px"></div></div>`,
    drink: `
      <div class="only-desk"><div class="perf-layout"><div><small>Reserva</small><h5>${title}</h5><span class="chip-btn">Conhecer</span></div><div class="spirit"></div></div></div>
      <div class="only-phone"><h5>${title}</h5><div class="spirit" style="margin:8px auto"></div></div>`
  };
  return `<div class="pg ${project.scene}">${scenes[project.scene]}</div>`;
}

function longPage(project) {
  return `
    <div class="reel ${project.scene}">
      <div class="fold">${page(project)}</div>
      <div class="pg-rest">
        <article><h6>Como funciona</h6><p>Três passos, um prazo combinado e um canal direto para falar com a equipe.</p></article>
        <article><h6>O que a página mostra</h6><p>${project.line}. A oferta, uma prova e o pedido de ação ficam na mesma rolagem.</p></article>
        <article><h6>Próximo passo</h6><p>Peça um horário ou um orçamento. ${project.name} leva até o contato sem desvio.</p></article>
      </div>
    </div>`;
}

function stage(project) {
  return `
    <div class="stage">
      <div class="browser">
        <div class="chrome"><span class="lights"><i></i><i></i><i></i></span><span class="url">${project.domain}</span></div>
        <div class="screen"><div class="clip">${longPage(project)}</div></div>
      </div>
      <div class="phone" aria-hidden="true"><div class="notch"></div><div class="screen"><div class="clip">${longPage(project)}</div></div></div>
    </div>`;
}

const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function measure(stage) {
  stage.querySelectorAll(".clip").forEach((clip) => {
    const fold = clip.querySelector(".fold");
    if (fold && clip.clientHeight > 0) fold.style.height = clip.clientHeight + "px";
  });
}

function stopScroll(stage) {
  stage.dataset.scrolling = "0";
  clearTimeout(stage._timer);
  stage.querySelectorAll(".reel").forEach((reel) => {
    reel.style.transition = "transform 420ms ease";
    reel.style.transform = "translateY(0)";
  });
}

function stepScroll(stage) {
  if (stage.dataset.scrolling !== "1") return;
  const jobs = [...stage.querySelectorAll(".clip")].map((clip) => {
    const reel = clip.querySelector(".reel");
    return { reel, dist: Math.max(0, reel.scrollHeight - clip.clientHeight) };
  });
  const furthest = Math.max(0, ...jobs.map((job) => job.dist));
  if (furthest < 8) {
    stage.dataset.scrolling = "0";
    return;
  }
  const ms = Math.min(9000, Math.max(3800, furthest * 16));
  jobs.forEach(({ reel }) => {
    reel.style.transition = "none";
    reel.style.transform = "translateY(0)";
  });
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (stage.dataset.scrolling !== "1") return;
    jobs.forEach(({ reel, dist }) => {
      reel.style.transition = `transform ${ms}ms linear`;
      reel.style.transform = `translateY(-${dist}px)`;
    });
    stage._timer = setTimeout(() => {
      if (stage.dataset.scrolling !== "1") return;
      jobs.forEach(({ reel }) => {
        reel.style.transition = `transform ${Math.round(ms * 0.55)}ms ease`;
        reel.style.transform = "translateY(0)";
      });
      stage._timer = setTimeout(() => stepScroll(stage), Math.round(ms * 0.55) + 280);
    }, ms + 220);
  }));
}

function startScroll(stage) {
  if (reduceMotion || stage.dataset.scrolling === "1") return;
  measure(stage);
  stage.dataset.scrolling = "1";
  stepScroll(stage);
}

function bindHover(stage) {
  if (coarsePointer || reduceMotion) return;
  stage.addEventListener("mouseenter", () => startScroll(stage));
  stage.addEventListener("mouseleave", () => stopScroll(stage));
}

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "vitrine" + (index > 8 ? " is-hidden extra" : "");
  card.innerHTML = `
    ${stage(project)}
    <div class="vitrine-body">
      <p class="kind"><b>${project.kind}</b> ${project.domain}</p>
      <h3>${project.name}</h3>
      <p class="line">${project.line}</p>
      <div class="vitrine-actions">
        <button class="pill solid" type="button" data-open="${index}"><span>Ver site</span>${linkIcon}</button>
        <button class="pill ghost" type="button" data-open="${index}" aria-label="Ampliar ${project.name}"><span>Ampliar</span>${expandIcon}</button>
      </div>
    </div>`;
  grid.appendChild(card);
  bindHover(card.querySelector(".stage"));
});

if (coarsePointer && !reduceMotion) {
  const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const stage = entry.target.querySelector(".stage");
      if (entry.isIntersecting) startScroll(stage);
      else stopScroll(stage);
    });
  }, { threshold: 0.62 });
  document.querySelectorAll(".vitrine").forEach((card) => watcher.observe(card));
}

requestAnimationFrame(() => {
  document.querySelectorAll(".stage").forEach(measure);
});

const preview = document.querySelector("#preview");
const previewTitle = document.querySelector("#preview-title");
const previewBody = document.querySelector("#preview-body");

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (!button) return;
  const project = projects[Number(button.dataset.open)];
  previewTitle.textContent = project.name;
  previewBody.innerHTML = stage(project) + `<p class="kind" style="margin-top:14px"><b>${project.kind}</b> ${project.domain}</p><p class="line">${project.line}. Página fictícia, só para a vitrine.</p>`;
  const stageEl = previewBody.querySelector(".stage");
  bindHover(stageEl);
  preview.showModal();
  requestAnimationFrame(() => {
    measure(stageEl);
    if (coarsePointer) startScroll(stageEl);
  });
});
preview.addEventListener("close", () => {
  const stageEl = preview.querySelector(".stage");
  if (stageEl) stopScroll(stageEl);
});
document.querySelector("#preview-close").addEventListener("click", () => preview.close());

const more = document.querySelector("#more-projects");
more.addEventListener("click", () => {
  document.querySelectorAll(".extra").forEach((card) => card.classList.remove("is-hidden"));
  more.hidden = true;
});

const slides = () => document.querySelectorAll("[data-hero]");
let heroIndex = 0;
let heroTimer;

function showHero(index) {
  heroIndex = index;
  slides().forEach((node) => {
    node.classList.toggle("is-active", Number(node.dataset.hero) === index);
  });
  document.querySelectorAll("[data-dot]").forEach((dot) => {
    const on = Number(dot.dataset.dot) === index;
    dot.classList.toggle("is-active", on);
    dot.setAttribute("aria-current", on ? "true" : "false");
  });
}

function queueHero() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHero((heroIndex + 1) % 3), 10000);
}

document.querySelectorAll("[data-dot]").forEach((dot) => {
  dot.addEventListener("click", () => {
    showHero(Number(dot.dataset.dot));
    queueHero();
  });
});
queueHero();

const menu = document.querySelector("#mobile-menu");
function setMenu(open) {
  menu.classList.toggle("open", open);
  menu.toggleAttribute("inert", !open);
}
document.querySelector("#open-menu").addEventListener("click", () => setMenu(true));
document.querySelector("#close-menu").addEventListener("click", () => setMenu(false));
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const open = item.classList.toggle("open");
    button.querySelector("span:last-child").textContent = open ? "–" : "+";
  });
});

const header = document.querySelector(".site-header");
let lastY = 0;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("is-hidden", y > lastY && y > 140);
  lastY = y;
}, { passive: true });

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
});

const contact = document.querySelector("#contact-form");
contact.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#contact-note").textContent = "Mensagem registrada nesta demonstração. Nenhum contato foi enviado.";
  contact.reset();
});

const news = document.querySelector("#news-form");
news.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.querySelector("#news-note");
  note.textContent = "Pronto. Este ambiente de demonstração não envia e-mails.";
  news.reset();
});

const cookie = document.querySelector("#cookie");
if (localStorage.getItem("cookie-ok")) cookie.hidden = true;
document.querySelector("#cookie-ok").addEventListener("click", () => {
  localStorage.setItem("cookie-ok", "1");
  cookie.hidden = true;
});
