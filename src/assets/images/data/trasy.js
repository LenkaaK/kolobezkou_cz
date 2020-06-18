export default [
    {
        id: 1,
        name: "Cyklostezka Bečva",
        distance: 100,
        ascent: 554,
        time: 10,
        start: "Valašské Meziříčí",
        finish: "Valašské Meziříčí",
        region: ["Východní Morava", "Severní Morava a Slezsko"],
        terrain: {asphalt: 95, gravel: 5},
        hashtags: ["Beskydy", "Valašsko", "Bečva", "frgál", "kyselica", "Rožnov pod Radhoštěm", "Velké Karlovice", "Vsetín", "Valašské muzeum v přírodě", "Kostel Panny Marie Sněžné"],
        map: `<iframe style="border:none" src="https://frame.mapy.cz/s/gomufakumo" width="700" height="466" frameborder="0"></iframe>`,
        gpx: "001",
        stars: 5,
        
        info: [
            {type: "about", text: "Většina trasy vede po cyklostezkách. Mezi Horní Bečvou a Třeštíkem se jede po silnici. Mezi Třeštíkem a Babskou se jede 3 km lesní cestou, chvílemi s velmi náročným terénem."},
            {type: "transport", text: "Do Valašského Meziříčí a Vsetína se dá pohodlně dostat přímým vlakem z Olomouce. Mezi Velkými Karlovicemi a Vsetínem jezdí pravidelně osobní vlak."},
            {type: "food", text: "V Horní Bečvě restaurace Staré Časy. Pozor mezi Třeštíkem a Velkými Karlovicemi, není zde žádná možnost občerstvení."},
            {type: "well", text: "Studánky jsou po cestě dvě. Sachova studánka je kousek za Horní Bečvou směrem na Třeštík. Druhá studánka byla mezi Halenkovem a Hovězím."},
        ],
        
        photo: [
            {picture: "foto-001-01", alt: "Cyklostezka Bečva", text: "Část vede po silnici."},
            {picture: "foto-001-02", alt: "Kostel Panny Marie Sněžné", text: "Kostel Panny Marie Sněžné ve Velkých Karlovicích"}
        ]

    },
]