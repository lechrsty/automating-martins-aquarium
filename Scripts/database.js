const database = {
    fish: [
        {
            name: "Ghostface Killi",
            species: "Killifish",
            length: "6 ft",
            found: "4th Chamber",
            diet: ["Ravioli bags", "Fruit loop jewels"] ,
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: ".5 ft",
            found: "in the House",
            diet: ["Home skillet biscuits"] ,
        },
        {
            name: "Spoopy",
            species: "Spookfish",
            length: "1.3 ft",
            found: "Stardew Valley",
            diet: ["Magic bait"] ,
        },
        {
            name: "Titan",
            species: "Mr. Saturn",
            length: "1.5 ft",
            found: "Saturn Valley",
            diet: ["Peanut cheese bars", "piggy key"] ,
        },
        {
            name: "Lil Tunachi",
            species: "Tuna",
            length: "6/7 ft",
            found: "Bedrock",
            diet: ["Lollipops"] ,
        },
        {
            name: "Travis Scat",
            species: "Scatophagidae",
            length: "1.2 ft",
            found: "Astroworld",
            diet: ["Coffee beans"] ,
        }

    ]
}
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}