import { version } from '../../package.json';

let versionNum = version.match(/(\d+\.\d+\.\d+)/g)[0] || version;

export default {
    title: 'R4MP',
    description: 'Reusable Accessible Mapping Platform 4.0 documentation',
    lang: 'en-CA',
    base: `/ramp4-pcar4/documentation/${versionNum}`,
    srcDir: '../docs',
    outDir: '../vite-docs',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo.svg',
        lastUpdatedText: 'Last Updated',
        search: {
            provider: 'local'
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/ramp4-pcar4/ramp4-pcar4'
            }
        ],
        nav: [
            {
                text: 'Overview',
                link: 'toc'
            },
            {
                text: 'API Reference',
                link: `https://ramp4-pcar4.github.io/ramp4-pcar4/documentation/${versionNum}/api-tech-docs`
            },
            {
                text: versionNum,
                items: [
                    {
                        text: 'Releases',
                        link: 'https://github.com/ramp4-pcar4/ramp4-pcar4/releases'
                    },
                    {
                        text: 'Past Versions (TODO)',
                        link: 'https://github.com/ramp4-pcar4/ramp4-pcar4/releases'
                    }
                ]
            }
        ],
        sidebar: [
            {
              text: "Section A",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section B",
              collapsible: false,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section C",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2021-present Government of Canada",
        },
    }
};
