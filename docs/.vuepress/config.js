const pkg = require("../package");
const CopyPlugin = require("copy-webpack-plugin");

let print = !!process.env.VUEPRESS_PRINT_MODE;

module.exports = {
    base: process.env.VUEPRESS_BASE_URL || `/dcc/v${pkg.version}/`,
    plugins: {
        "@vuepress/pwa": {
            serviceWorker: true,
            updatePopup: {
                "/de/": {
                    message: "Neue Inhalte sind verfügbar.",
                    buttonText: "Seite neu laden"
                },
                "/en/": {
                    message: "New content is available.",
                    buttonText: "Reload page"
                }
            }
        },
        "@vuepress/back-to-top": {},
        "@vuepress/medium-zoom": {
            selector: "img"
        },
        "@vuepress/last-updated": print ? false : {
            transformer: (timestamp, lang) => {
                const moment = require("moment");
                moment.locale(lang);
                return moment(timestamp).fromNow();
            }
        }
    },
    head: [
        ["link", {rel: "shortcut icon", type: "image/x-icon", href: `/icons/favicon.ico`}],
        ["link", {rel: "icon", href: "/icons/icon-512x512.png"}],
        ["link", {rel: "manifest", href: "/manifest.json"}],
        ["meta", {name: "theme-color", content: "#009cd1"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
        ["link", {rel: "apple-touch-icon", href: `/icons/icon-152x152.png`}],
        ["meta", {name: "msapplication-TileImage", content: "/icons/icon-144x144.png"}],
        ["meta", {name: "msapplication-TileColor", content: "#000000"}]
    ],
    chainWebpack: (config) => {
        // config is an instance of ChainableConfig
        config
            .plugin("copy")
            .use(CopyPlugin, [
                [{from: "ressources/", to: "ressources/[name].[ext]", toType: "template"}]
            ]);

        // fix for https://github.com/vuejs/vue-loader/issues/1612
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                esModule: false
            })
    },
    markdown: {
        lineNumbers: !print,
        extendMarkdown: md => {
            md
                .use(require("markdown-it-footnote"))
                .use(require("markdown-it-include"));
        }
    },
    locales: {
        "/de/": {
            lang: "de-DE",
            title: `Digitaler Kalibrierschein - v${pkg.version}`,
            description: "Wiki für den DCC"
        },
        "/en/": {
            lang: "en-US",
            title: `Digital Calibration Certificate - v${pkg.version}`,
            description: "Wiki for the DCC"
        }
    },
    themeConfig: {
        print: print,
        navbar: !print,
        displayAllHeaders: true,
        repo: "https://gitlab1.ptb.de/d-ptb/dcc/xsd-dcc",
        editLinks: !print,
        docsDir: "docs",
        docsBranch: "master",
        locales: {
            "/de/": {
                label: "Deutsch",
                selectText: "Sprachen",
                editLinkText: "Bearbeiten Sie diese Seite auf GitLab!",
                lastUpdated: "Zuletzt aktualisiert",
                nav: [
                    {
                        text: "Baumdiagramm",
                        link: "/de/diagram.html",
                    },
                    {
                        text: "Root-Element",
                        link: "/de/rootelement.html",
                    }
                ],
                sidebar: print ? false : "auto"
            },
            "/en/": {
                label: "English",
                editLinkText: "Edit this Page on GitLab!",
                selectText: "Languages",
                lastUpdated: "Last updated",
                nav: [
                    {
                        text: "Overview",
                        link: "/en/diagram.html",
                    },
                    {
                        text: "Root Element",
                        link: "/en/rootelement.html",
                    }
                ],
                sidebar: print ? false : "auto"
            }
        }
    }
};
