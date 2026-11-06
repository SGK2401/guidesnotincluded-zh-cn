// SPDX-License-Identifier: MIT
// @ts-check
import path from 'node:path';
import { defineConfig, passthroughImageService } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';

// Deployed as a GitHub project page, so the site lives under a /base/ subpath.
const SITE = 'https://ahembree.github.io';
const BASE = '/guidesnotincluded';

// The crawler writes cross-page links as relative `.md` paths (e.g.
// `pipes-and-pumps.md`), which are convenient for editing/GitHub but which
// Starlight does not resolve in page bodies. Rewrite them to real routed URLs
// at build time so the prose links work without altering the content.
function remarkRelativeMdLinks() {
  return (/** @type {any} */ tree, /** @type {any} */ file) => {
    // Slugs are relative to the archive folder (its name is stripped by the
    // loader's generateId), so resolve relative `.md` links against the same root.
    const docsRoot = path.resolve(
      file.cwd ?? process.cwd(),
      'src/content/docs/guidesnotincluded_archive'
    );
    const fileDir = file.path ? path.dirname(file.path) : docsRoot;
    const rewrite = (/** @type {string} */ url) => {
      // Leave external, protocol-relative, root-absolute, and pure-anchor links.
      if (/^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(url)) return url;
      const m = url.match(/^(.*?)\.md(#.*)?$/i);
      if (!m) return url;
      const hash = m[2] ?? '';
      const absNoExt = path.resolve(fileDir, m[1]);
      let slug = path.relative(docsRoot, absNoExt).split(path.sep).join('/');
      if (slug === 'index' || slug === '') return `${BASE}/${hash}`;
      if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length);
      return `${BASE}/${slug}/${hash}`;
    };
    const visit = (/** @type {any} */ node) => {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = rewrite(node.url);
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  // The archive's images are already web-optimised AVIF from the original Wix
  // site; serve them as-is instead of re-encoding ~460 files on every build.
  image: { service: passthroughImageService() },
  // Astro 6.4 moved extra remark/rehype plugins under `processor`. `unified()`
  // from @astrojs/markdown-remark keeps the default pipeline (GFM, Smartypants)
  // and Starlight's own markdown plugins, adding ours on top.
  markdown: { processor: unified({ remarkPlugins: [remarkRelativeMdLinks] }) },
  integrations: [
    starlight({
      title: 'Guides Not Included',
      description:
        'guidesnotincluded.com 的归档副本——涵盖《缺氧》的建造方案、指南与资源，恢复自互联网档案馆。',
      tagline: '《缺氧》指南档案馆',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      lastUpdated: false,
      pagination: false,
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ahembree/guidesnotincluded',
        },
      ],
      // Restore the per-page social/JSON-LD meta (was overrides/main.html) and
      // the site-wide CC BY-NC-SA / Klei copyright line (was mkdocs `copyright`).
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
      },
      // Mirrors the hand-curated MkDocs `nav:`. guides.md and home.md are
      // intentionally left out (empty / duplicate of the homepage) but still build.
      sidebar: [
        { label: '首页', link: '/' },
        {
          label: '从这里开始',
          items: [
            { label: '极早期游戏', slug: 'the-very-early-game' },
            { label: '早期游戏', slug: 'the-early-game' },
            {
              label: '完全新手指南',
              slug: 'complete-beginners-completely-incomplete-guide-to-oxygen-not-included',
            },
            { label: '那些我希望早点知道的事', slug: 'things-i-wish-id-known-when-i-started' },
            { label: '建造方案总览', slug: 'builds' },
            { label: '本体与《眼冒金星！》', slug: 'base-game-versus-spaced-out-dlc' },
          ],
        },
        {
          label: '复制人',
          items: [
            { label: '选择复制人', slug: 'choosing-duplicants' },
            { label: '该养多少复制人？', slug: 'how-many-dupes-should-you-have' },
            { label: '气压服', slug: 'atmo-suit-basics' },
          ],
        },
        {
          label: '核心机制',
          items: [
            { label: '管道与泵', slug: 'pipes-and-pumps' },
            { label: '液体锁基础', slug: 'liquid-lock-basics' },
            { label: '液体锁（建造方案）', slug: 'liquid-lock' },
          ],
        },
        {
          label: '氧气（SPOM）',
          items: [
            { label: '什么是 SPOM？', slug: 'to-know-the-spom-is-to-love-the-spom' },
            { label: 'SPOM——1 kg/s', slug: 'spom-1kg-s' },
            { label: 'SPOM——完整版 Rodriguez', slug: 'spom-3kg-s' },
          ],
        },
        {
          label: '水与病菌',
          items: [
            { label: '获取更多水', slug: 'getting-more-water' },
            { label: '给带菌水消毒', slug: 'decontaminating-germy-water-francis' },
            { label: '循环利用厕所水', slug: 'recycling-toilet-water' },
            { label: '应对粘液肺', slug: 'dealing-with-slimelung' },
          ],
        },
        {
          label: '冷却与热量',
          items: [
            { label: '传热基础', slug: 'heat-transfer-basics' },
            { label: '反熵热量中和器（AETN）', slug: 'anti-entropy-thermo-nullifier' },
            { label: '反熵热量中和器冷却回路', slug: 'anti-entropy-thermo-nullifier-cooling' },
            { label: '液温调节器 + 蒸汽涡轮机回路', slug: 'aquatuner-steam-turbine-cooling-loo' },
            { label: '液温调节器冷却回路', slug: 'thermo-aquatuner-steam-turbine-cooling-loop' },
          ],
        },
        {
          label: '电力与自动化',
          items: [
            { label: '自动化入门', slug: 'getting-started-with-automation' },
            { label: '碳素脱离器自动化', slug: 'carbon-skimmer-automation-jahws' },
            { label: '驯化氢气喷孔', slug: 'hydrogen-vent-taming' },
          ],
        },
        {
          label: '资源与工业',
          items: [
            { label: '获取钢', slug: 'getting-steel' },
            { label: '原油、石油与塑料', slug: 'getting-oil-petroleum-and-plastic' },
            { label: '带液体锁的油井', slug: 'oil-well-with-liquid-lock' },
            { label: '驯化金属火山', slug: 'taming-metal-volcanos' },
            { label: '迷你工业', slug: 'mini-industry' },
          ],
        },
        {
          label: '养殖',
          items: [
            { label: '养殖基础', slug: 'ranching-basics' },
            { label: '毛鳞壁虎养殖（塑料）', slug: 'low-tech-plastic-drecko-ranching' },
          ],
        },
        {
          label: '太空与《眼冒金星！》（DLC）',
          items: [
            { label: '飞向太空', slug: 'getting-to-space-dlc' },
            { label: '《眼冒金星！》研究', slug: 'spaced-out-research-guide' },
            { label: '应对流星雨', slug: 'dealing-with-meteor-showers' },
            { label: '液氢与液氧', slug: 'liquid-hydrogen-oxygen-small' },
          ],
        },
        {
          label: '草稿与副本',
          items: [
            { label: '早期游戏（草稿）', slug: 'copy-of-the-early-game' },
            { label: '飞向太空（草稿）', slug: 'copy-of-getting-more-water' },
            { label: '施工中', slug: 'copy-of-wip' },
          ],
        },
        {
          label: '关于本档案馆',
          items: [
            { label: '署名与许可', slug: 'attribution' },
            { label: '指南反馈', slug: 'guide-feedback' },
          ],
        },
      ],
    }),
  ],
});
