module.exports = {
    dest: 'vuepress',
    locales: {
        '/de/': {
            lang: 'de-DE',
            title: 'Digitaler Kalibrierschein',
            description: 'Wiki für den DCC'
        }
    },
    serviceWorker: true,
    themeConfig: {
        repo: 'https://gitlab1.ptb.de/abteilung-1/dcc/xsd-dcc',
        editLinks: true,
        docsDir: 'wiki',
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
                        text: 'AdministrativeData',
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
            }
        }
    }
};
