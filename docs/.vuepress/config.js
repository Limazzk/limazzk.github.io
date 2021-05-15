module.exports = {
  theme: "bet365Data",
  base: "/",
  plugins: [
    [
      "vuepress-plugin-medium-zoom",
      {
        selector: ".theme-default-content img:not(.no-zoom)",
        delay: 1000,
        options: {
          margin: 24,
          background: "var(--medium-zoom-overlay-color)",
          scrollOffset: 0
        }
      }
    ],
    ["vuepress-plugin-container", { type: "tip", defaultTitle: "" }],
    ["vuepress-plugin-container", { type: "warning", defaultTitle: "" }],
    ["vuepress-plugin-container", { type: "danger", defaultTitle: "" }],
    [
      "vuepress-plugin-container",
      {
        type: "details",
        before: info =>
          `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ""
          }\n`,
        after: () => "</details>\n"
      }
    ]
  ],
  shouldPrefetch: () => false,
  head: require("./head"),
  themeConfig: {
    title: "Bet365API",
    docSets: [
      require("./sets/craft-cms"),
    ],
    docsRepo: "bet365data/docs",
    docsDir: "docs",
    docsBranch: "main",
    searchPlaceholder: "Search bet365API, Commerce, and Nitro docs (Press “/” to focus)",
    editLinks: true,
    nextLinks: true,
    prevLinks: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: "Knowlege Base", link: "http://help.bet365data.com/knowledge-base" }
    ],
    codeLanguages: {
      twig: "Twig",
      php: "PHP",
      graphql: "GraphQL",
      js: "JavaScript",
      json: "JSON",
      xml: "XML",
      treeview: "Folder",
      graphql: "GraphQL",
      csv: "CSV"
    },
    feedback: {
      helpful: "Was this page helpful?",
      thanks: "Thanks for your feedback.",
      more: "Give More Feedback →"
    }
  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4', 'h5'],
    anchor: {
      level: [2, 3, 4]
    },
    toc: {
      format(content) {
        return content.replace(/[_`]/g, "");
      }
    },
    extendMarkdown(md) {
      // provide our own highlight.js to customize Prism setup
      md.options.highlight = require("./theme/highlight");
      // add markdown extensions
      md.use(require("./theme/util/replace-anchor-prefixes").replacePrefixes)
        .use(require("./theme/markup"))
        .use(require("markdown-it-deflist"))
        .use(require("markdown-it-imsize"));
    }
  },
  postcss: {
    plugins: require("../../postcss.config.js").plugins
  }
};
