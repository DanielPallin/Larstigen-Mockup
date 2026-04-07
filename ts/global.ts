const iconCache = new Map<string, string>();

async function fetchIcon(name: string): Promise<string> {
  if (iconCache.has(name)) {
    return iconCache.get(name)!;
  }

  const response = await fetch(`../assets/icons/${name}.svg`);

  if (!response.ok) {
    throw new Error(`Kunde inte ladda ikon: ${name}`);
  }

  const svgText = await response.text();
  iconCache.set(name, svgText);

  return svgText;
}

function normalizeSvg(svg: SVGSVGElement): void {
  svg.removeAttribute("width");
  svg.removeAttribute("height");

  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  svg.querySelectorAll("[stroke]").forEach((node) => {
    node.setAttribute("stroke", "currentColor");
  });
}

export async function loadIcons(): Promise<void> {
  const iconHolders = document.querySelectorAll<HTMLElement>("[data-icon]");

  for (const holder of iconHolders) {
    const iconName = holder.dataset.icon;
    if (!iconName) continue;

    try {
      const svgText = await fetchIcon(iconName);
      holder.innerHTML = svgText;

      const svg = holder.querySelector("svg");
      if (!svg) continue;

      normalizeSvg(svg);
    } catch (error) {
      console.error(error);
    }
  }
}

export function setActiveNav(): void {
  const currentPage = window.location.pathname.split("/").pop();

  const navItems = document.querySelectorAll<HTMLAnchorElement>(".bottom-nav .nav-item");

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    item.classList.toggle("active", href === currentPage);
  });
}

export function initBottomNavScroll(threshold = 80): void {
  const bottomNav = document.querySelector<HTMLElement>(".bottom-nav");
  if (!bottomNav) return;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 10) {
      bottomNav.classList.remove("hide");
      lastScrollY = currentScrollY;
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      bottomNav.classList.add("hide");
    } else if (currentScrollY < lastScrollY) {
      bottomNav.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
  });
}

export async function initGlobalUI(): Promise<void> {
  setActiveNav();
  await loadIcons();
}