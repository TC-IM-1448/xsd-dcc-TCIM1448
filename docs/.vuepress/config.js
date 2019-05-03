module.exports = {
    dest: 'vuepress',
    serviceWorker: true,
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/de/': {
            lang: 'de-DE',
            title: 'Digitaler Kalibrierschein',
            description: 'Wiki für den DCC'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Digital Calibration Certificate',
            description: 'Wiki for the DCC'
        }
    },
    themeConfig: {
        repo: 'https://gitlab1.ptb.de/abteilung-1/dcc/xsd-dcc',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'master',
        locales: {
            '/de/': {
                label: 'Deutsch',
                selectText: 'Sprachen',
                editLinkText: 'Bearbeiten Sie diese Seite auf GitLab!',
                lastUpdated: 'Zuletzt aktualisiert',
                serviceWorker: {
                    updatePopup: {
                        message: 'Neue Inhalte sind verfügbar.',
                        buttonText: 'Seite neu laden'
                    }
                },
                nav: [
                    {
                        text: 'Administrative Data',
                        link: '/de/administrativeData/',
                    },
                    {
                        text: 'Complex Types',
                        link: '/de/complexTypes/'
                    },
                    {
                        text: 'Measurement Results',
                        link: '/de/measurementResults/'
                    },
                ],
                sidebar: 'auto'
            },
            '/en/': {
                label: 'English',
                editLinkText: 'Edit this Page on GitLab!',
                sidebar: 'auto'
            }
        }
    }
};
