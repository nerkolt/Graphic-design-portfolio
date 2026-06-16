const FONT = { family: "Inter", style: "Regular" };
const FONT_BOLD = { family: "Inter", style: "Bold" };

const colors = {
  bg: rgb("#0A0A0A"),
  panel: rgb("#131313"),
  panelHigh: rgb("#201F1F"),
  text: rgb("#E5E2E1"),
  muted: rgb("#B9CACB"),
  line: rgb("#3B494B"),
  cyan: rgb("#00F0FF"),
  red: rgb("#FF525C"),
  gold: rgb("#D2C972"),
  royalBlue: rgb("#2F68FF"),
  marketGreen: rgb("#42D392"),
};

const projects = [
  {
    name: "Royal Dagish",
    label: "Tactical online card game landing website",
    repo: "https://github.com/nerkolt/Royal-Dagish",
    accent: colors.red,
    secondAccent: colors.gold,
    stack: ["React", "Vite", "GSAP", "i18n", "Responsive landing"],
    sections: [
      {
        title: "Hero Landing",
        copy: "Full-screen game background, Royal Dagish title art, PvP positioning, and app-store calls to action.",
      },
      {
        title: "Gameplay Modes",
        copy: "Cards for AI play, multiplayer, tournaments, leaderboard, and community engagement.",
      },
      {
        title: "Support / Policy Pages",
        copy: "Support, privacy policy, terms of use, delete-account flow, and multilingual interface support.",
      },
    ],
    desktopBlocks: [
      "Game title mark",
      "PvP Online headline",
      "Learn more CTA",
      "App Store / Google Play",
      "Gameplay cards",
      "Community sections",
    ],
    mobileBlocks: ["Logo", "Store buttons", "Mode cards", "Support links"],
  },
  {
    name: "IGS MarketPlace",
    label: "3D digital asset marketplace",
    repo: "Local repo: F:\\NourPersonal\\WebDev\\MarketPlace",
    accent: colors.cyan,
    secondAccent: colors.marketGreen,
    stack: ["React", "Vite", "Firebase", "Three.js", "Stripe", "Razorpay"],
    sections: [
      {
        title: "Marketplace Home",
        copy: "Hero for a Tunisian digital asset marketplace with asset discovery, featured imagery, and explore CTA.",
      },
      {
        title: "Asset Library",
        copy: "Category browsing for 3D models, textures, scripts, shaders, HDRIs, plugins, and printables.",
      },
      {
        title: "Commerce / 3D Preview",
        copy: "Cart, checkout, trading flow, user library, upload flow, and interactive Three.js/model-viewer previews.",
      },
    ],
    desktopBlocks: [
      "Marketplace hero",
      "Search / filters",
      "Asset type grid",
      "3D preview module",
      "Trade feature",
      "Checkout flow",
    ],
    mobileBlocks: ["Hero", "Search", "Asset cards", "Cart CTA"],
  },
];

function rgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255,
  };
}

function paint(color, opacity = 1) {
  return [{ type: "SOLID", color, opacity }];
}

function stroke(color, opacity = 1) {
  return [{ type: "SOLID", color, opacity }];
}

async function text(value, x, y, width, options = {}) {
  const node = figma.createText();
  await figma.loadFontAsync(options.bold ? FONT_BOLD : FONT);
  node.fontName = options.bold ? FONT_BOLD : FONT;
  node.characters = value;
  node.x = x;
  node.y = y;
  node.resize(width, node.height);
  node.fontSize = options.size || 18;
  node.lineHeight = { unit: "PIXELS", value: options.lineHeight || Math.round((options.size || 18) * 1.28) };
  node.fills = paint(options.color || colors.text, options.opacity || 1);
  if (options.uppercase) {
    node.characters = value.toUpperCase();
  }
  return node;
}

function frame(name, x, y, width, height, fill = colors.bg) {
  const node = figma.createFrame();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(width, height);
  node.fills = paint(fill);
  node.strokes = stroke(colors.line, 0.75);
  node.strokeWeight = 1;
  node.clipsContent = true;
  return node;
}

function rect(name, x, y, width, height, fill, parent, options = {}) {
  const node = figma.createRectangle();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(width, height);
  node.fills = paint(fill, options.opacity || 1);
  node.strokes = stroke(options.stroke || colors.line, options.strokeOpacity || 0.75);
  node.strokeWeight = options.strokeWeight || 1;
  if (options.radius) {
    node.cornerRadius = options.radius;
  }
  parent.appendChild(node);
  return node;
}

function line(name, x, y, width, parent, color = colors.cyan) {
  const node = figma.createLine();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(width, 0);
  node.strokes = stroke(color);
  node.strokeWeight = 2;
  parent.appendChild(node);
  return node;
}

async function label(parent, value, x, y, width, color = colors.cyan) {
  const node = await text(value, x, y, width, {
    size: 12,
    lineHeight: 16,
    bold: true,
    uppercase: true,
    color,
  });
  parent.appendChild(node);
  return node;
}

async function paragraph(parent, value, x, y, width, size = 17) {
  const node = await text(value, x, y, width, {
    size,
    lineHeight: Math.round(size * 1.55),
    color: colors.muted,
  });
  parent.appendChild(node);
  return node;
}

async function button(parent, value, x, y, width, accent) {
  rect(`Button / ${value}`, x, y, width, 48, colors.bg, parent, { stroke: accent, strokeOpacity: 1, strokeWeight: 2 });
  const node = await text(value.toUpperCase(), x + 18, y + 15, width - 36, {
    size: 12,
    lineHeight: 16,
    bold: true,
    color: colors.text,
  });
  parent.appendChild(node);
}

async function chip(parent, value, x, y, accent = colors.cyan) {
  const width = Math.max(94, value.length * 8 + 28);
  rect(`Chip / ${value}`, x, y, width, 34, colors.panelHigh, parent, { stroke: accent, strokeOpacity: 0.7 });
  const node = await text(value.toUpperCase(), x + 14, y + 10, width - 28, {
    size: 10,
    lineHeight: 12,
    bold: true,
    color: colors.text,
  });
  parent.appendChild(node);
  return width;
}

async function createCover(project, x, y) {
  const cover = frame(`${project.name} / Cover`, x, y, 1440, 900);
  rect("Electric grid", 0, 0, 1440, 900, colors.panel, cover, { opacity: 0.88, strokeOpacity: 0 });
  for (let i = 0; i < 22; i += 1) {
    rect(`Grid line vertical ${i}`, i * 72, 0, 1, 900, colors.line, cover, { opacity: 0.28, strokeOpacity: 0 });
  }
  for (let i = 0; i < 14; i += 1) {
    rect(`Grid line horizontal ${i}`, 0, i * 72, 1440, 1, colors.line, cover, { opacity: 0.22, strokeOpacity: 0 });
  }
  rect("Accent beam", 80, 92, 180, 10, project.accent, cover, { strokeOpacity: 0 });
  await label(cover, "Figma rebuild / portfolio case", 80, 130, 420, project.accent);
  const title = await text(project.name, 76, 180, 900, {
    size: 104,
    lineHeight: 106,
    bold: true,
    color: colors.text,
  });
  cover.appendChild(title);
  await paragraph(cover, project.label, 86, 430, 720, 26);
  await paragraph(cover, project.repo, 86, 516, 900, 16);
  let chipX = 86;
  for (const item of project.stack) {
    const used = await chip(cover, item, chipX, 610, project.accent);
    chipX += used + 12;
  }
  await button(cover, "Prototype direction", 86, 710, 230, project.accent);
  await button(cover, "Component library", 340, 710, 230, colors.text);
  return cover;
}

async function createDesktop(project, x, y) {
  const desktop = frame(`${project.name} / Desktop landing`, x, y, 1440, 1160);
  rect("Browser chrome", 0, 0, 1440, 58, colors.panelHigh, desktop, { strokeOpacity: 0 });
  rect("Dot red", 26, 22, 12, 12, colors.red, desktop, { radius: 6, strokeOpacity: 0 });
  rect("Dot gold", 48, 22, 12, 12, colors.gold, desktop, { radius: 6, strokeOpacity: 0 });
  rect("Dot cyan", 70, 22, 12, 12, colors.cyan, desktop, { radius: 6, strokeOpacity: 0 });
  await label(desktop, "Desktop / 1440", 112, 22, 300, project.accent);

  rect("Hero image placeholder", 64, 98, 1312, 430, colors.panelHigh, desktop, { stroke: project.accent, strokeOpacity: 0.75 });
  await label(desktop, "Hero visual area", 96, 126, 220, project.accent);
  const title = await text(project.name, 92, 176, 760, { size: 76, lineHeight: 78, bold: true });
  desktop.appendChild(title);
  await paragraph(desktop, project.label, 98, 344, 620, 22);
  await button(desktop, "Primary CTA", 98, 438, 190, project.accent);
  await button(desktop, "Secondary CTA", 310, 438, 190, colors.text);

  const navItems = ["Home", "Features", "Preview", "Support"];
  let navX = 850;
  for (const nav of navItems) {
    await label(desktop, nav, navX, 128, 120, colors.muted);
    navX += 118;
  }

  let top = 590;
  for (let i = 0; i < project.sections.length; i += 1) {
    const section = project.sections[i];
    rect(`Section card / ${section.title}`, 64 + i * 438, top, 404, 250, colors.panel, desktop, {
      stroke: i === 1 ? project.secondAccent : project.accent,
      strokeOpacity: 0.6,
    });
    await label(desktop, `0${i + 1}`, 92 + i * 438, top + 28, 90, i === 1 ? project.secondAccent : project.accent);
    const heading = await text(section.title, 92 + i * 438, top + 66, 330, {
      size: 28,
      lineHeight: 34,
      bold: true,
    });
    desktop.appendChild(heading);
    await paragraph(desktop, section.copy, 92 + i * 438, top + 118, 330, 15);
  }

  rect("Flow map", 64, 900, 1312, 178, colors.panelHigh, desktop, { stroke: colors.line });
  await label(desktop, "Page flow / important screens", 96, 930, 360, project.accent);
  let blockX = 96;
  for (const block of project.desktopBlocks) {
    rect(`Flow block / ${block}`, blockX, 976, 170, 58, colors.bg, desktop, { stroke: project.accent, strokeOpacity: 0.45 });
    await label(desktop, block, blockX + 14, 997, 140, colors.text);
    blockX += 204;
    if (blockX > 1160) break;
  }
  return desktop;
}

async function createMobile(project, x, y) {
  const mobile = frame(`${project.name} / Mobile screens`, x, y, 900, 1160);
  await label(mobile, "Mobile / responsive flow", 64, 56, 340, project.accent);
  const title = await text(`${project.name}\nMobile System`, 60, 96, 520, {
    size: 54,
    lineHeight: 58,
    bold: true,
  });
  mobile.appendChild(title);

  for (let i = 0; i < 3; i += 1) {
    const phoneX = 72 + i * 268;
    rect(`Phone ${i + 1}`, phoneX, 280, 220, 640, colors.panel, mobile, { stroke: project.accent, strokeOpacity: 0.6, radius: 22 });
    rect(`Phone ${i + 1} top`, phoneX + 20, 312, 180, 96, colors.panelHigh, mobile, { stroke: project.accent, strokeOpacity: 0.35, radius: 12 });
    await label(mobile, project.mobileBlocks[i] || "Screen", phoneX + 28, 342, 160, project.accent);
    for (let j = 0; j < 5; j += 1) {
      rect(`Phone ${i + 1} content ${j}`, phoneX + 24, 450 + j * 72, 172, 42, j % 2 === 0 ? colors.panelHigh : colors.bg, mobile, {
        stroke: colors.line,
        strokeOpacity: 0.4,
        radius: 8,
      });
    }
    await button(mobile, "CTA", phoneX + 24, 830, 172, project.accent);
  }

  rect("Mobile notes", 64, 984, 772, 116, colors.panelHigh, mobile, { stroke: colors.line });
  await paragraph(mobile, "Responsive notes: keep the primary action visible above the fold, stack feature cards in a single column, and preserve strong brand imagery as the main first-screen signal.", 92, 1018, 700, 16);
  return mobile;
}

async function createComponents(project, x, y) {
  const components = frame(`${project.name} / Components`, x, y, 1120, 900);
  await label(components, "Reusable UI kit", 64, 60, 260, project.accent);
  const title = await text("Components and design tokens", 60, 100, 760, {
    size: 52,
    lineHeight: 58,
    bold: true,
  });
  components.appendChild(title);

  const cards = [
    ["Navigation", "Logo, route links, language/profile/action states."],
    ["Buttons", "Primary, secondary, disabled, store/download, checkout."],
    ["Cards", "Feature cards, asset cards, game mode cards, preview cards."],
    ["Media Frames", "Hero screenshot, 3D model preview, gameplay preview."],
    ["Forms", "Search, filters, login, checkout, support inputs."],
    ["Status", "Loading, empty, success, error, protected states."],
  ];

  for (let i = 0; i < cards.length; i += 1) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cardX = 64 + col * 496;
    const cardY = 232 + row * 174;
    rect(`Component note / ${cards[i][0]}`, cardX, cardY, 452, 132, colors.panel, components, {
      stroke: i % 2 === 0 ? project.accent : project.secondAccent,
      strokeOpacity: 0.55,
    });
    await label(components, cards[i][0], cardX + 24, cardY + 24, 200, i % 2 === 0 ? project.accent : project.secondAccent);
    await paragraph(components, cards[i][1], cardX + 24, cardY + 58, 380, 15);
  }

  line("Token divider", 64, 792, 992, components, project.accent);
  await paragraph(components, `Token direction: dark surfaces, high-contrast CTAs, sharp section rhythm, and project-specific accent color ${project.name === "Royal Dagish" ? "for game energy" : "for marketplace tech clarity"}.`, 64, 812, 960, 16);
  return components;
}

async function createProject(project) {
  const page = figma.createPage();
  page.name = project.name;
  figma.currentPage = page;
  await createCover(project, 0, 0);
  await createDesktop(project, 1520, 0);
  await createMobile(project, 0, 980);
  await createComponents(project, 980, 1240);
  figma.viewport.scrollAndZoomIntoView(page.children);
}

async function main() {
  await figma.loadFontAsync(FONT);
  await figma.loadFontAsync(FONT_BOLD);
  for (let i = 0; i < projects.length; i += 1) {
    await createProject(projects[i], i);
  }
  figma.notify("Created Royal Dagish and IGS MarketPlace editable Figma boards.");
  figma.closePlugin();
}

main().catch((error) => {
  figma.notify(`Plugin failed: ${error.message}`);
  figma.closePlugin();
});
