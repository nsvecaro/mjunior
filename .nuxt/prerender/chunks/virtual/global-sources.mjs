const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/hvala"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/galerija"
            },
            {
                "loc": "/proizvodi"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "images": [
                    {
                        "loc": "/images/ModingJuniorLogo.webp"
                    },
                    {
                        "loc": "/images/MonPeriniBale.webp"
                    },
                    {
                        "loc": "/images/partneri/CantopyHiltonLogo.png"
                    },
                    {
                        "loc": "/images/partneri/MinistarstvoFinancijaRHLogo.png"
                    },
                    {
                        "loc": "/images/partneri/InaLogo.png"
                    },
                    {
                        "loc": "/images/partneri/MonPerinLogo.png"
                    },
                    {
                        "loc": "/images/partneri/BaltenspergerLogo.png"
                    },
                    {
                        "loc": "/images/partneri/HidroingLogo.png"
                    },
                    {
                        "loc": "/images/partneri/JedinstvoKrapinaLogo.png"
                    },
                    {
                        "loc": "/images/partneri/KudumijaLogo.png"
                    },
                    {
                        "loc": "/images/partneri/GradPulaLogo.png"
                    },
                    {
                        "loc": "/images/partneri/KolektorLogo.png"
                    },
                    {
                        "loc": "/images/partneri/MDKLogo.png"
                    },
                    {
                        "loc": "/images/partneri/MonterraLogo.png"
                    },
                    {
                        "loc": "/images/certs.webp"
                    },
                    {
                        "loc": "/images/eucert.webp"
                    },
                    {
                        "loc": "/images/eusuf.webp"
                    }
                ]
            },
            {
                "loc": "/hvala",
                "images": [
                    {
                        "loc": "/images/ModingJuniorLogo.webp"
                    },
                    {
                        "loc": "/images/certs.webp"
                    },
                    {
                        "loc": "/images/eucert.webp"
                    },
                    {
                        "loc": "/images/eusuf.webp"
                    }
                ]
            },
            {
                "loc": "/proizvodi"
            },
            {
                "loc": "/galerija",
                "images": [
                    {
                        "loc": "/images/ModingJuniorLogo.webp"
                    },
                    {
                        "loc": "/images/certs.webp"
                    },
                    {
                        "loc": "/images/eucert.webp"
                    },
                    {
                        "loc": "/images/eusuf.webp"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
