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
                /*"/en/": {
                    message: "New content is available.",
                    buttonText: "Reload page"
                }*/
            }
        },
        "@vuepress/back-to-top": {},
        "@vuepress/medium-zoom": {
            selector: "img"
        }
    },
    head: [
        ["link", {rel: "icon", href: "/icons/icon-512x512.png"}],
        ["link", {rel: "manifest", href: "/manifest.json"}],
        ["meta", {name: "theme-color", content: "#009cd1"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
        ["meta", {name: "apple-mobile-web-app-status-bar-style", content: "black"}],
        ["link", {rel: "apple-touch-icon", href: `/icons/icon-152x152.png`}],
        ["meta", {name: "msapplication-TileImage", content: "/icons/icon-144x144.png"}],
        ["meta", {name: "msapplication-TileColor", content: "#000000"}]
    ],
    chainWebpack: (config, isServer) => {
        // config is an instance of ChainableConfig
        config
            .plugin("copy")
            .use(CopyPlugin, [
                [{from: "ressources/", to: "ressources/[name].[ext]", toType: "template"}]
            ]);
    },
    markdown: {
        lineNumbers: !print,
        extendMarkdown: md => {
            md.use(require("markdown-it-footnote"))
        }
    },
    locales: {
        "/de/": {
            lang: "de-DE",
            title: "Digitaler Kalibrierschein",
            description: "Wiki für den DCC"
        },
        /*"/en/": {
            lang: "en-US",
            title: "Digital Calibration Certificate",
            description: "Wiki for the DCC"
        }*/
    },
    themeConfig: {
        print: print,
        displayAllHeaders: true,
        repo: "https://gitlab1.ptb.de/d-ptb/dcc/xsd-dcc",
        editLinks: true,
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
                        text: "Administrative Data",
                        link: "/de/administrativeData/",
                    },
                    {
                        text: "Measurement Result",
                        link: "/de/measurementResult/"
                    },
                    {
                        text: "HowTos",
                        link: "/de/howtos/"
                    }
                ],
                sidebar: "auto"
            },
            /*"/en/": {
                label: "English",
                editLinkText: "Edit this Page on GitLab!",
                selectText: "Languages",
                lastUpdated: "Last updated",
                nav: [
                    {
                        text: "Administrative Data",
                        link: "/en/administrativeData/",
                    },
                    {
                        text: "Measurement Result",
                        link: "/en/measurementResult/"
                    },
                    {
                        text: "HowTos",
                        link: "/en/howtos/"
                    }
                ],
                sidebar: "auto"
            }*/
        }
    }
};
