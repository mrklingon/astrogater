namespace SpriteKind {
    export const label = SpriteKind.create()
    export const strs = SpriteKind.create()
    export const constmap = SpriteKind.create()
}
function createStars () {
    consts = [
    "Constellation",
    "English name",
    "Area (square degrees)",
    "Quadrant",
    "Visible between latitudes",
    "Andromeda",
    "Andromeda",
    "722.278",
    "NQ1",
    "90°N – 40°S",
    "Antlia",
    "Air Pump",
    "238.901",
    "SQ2",
    "45°N – 90°S",
    "Apus",
    "Bird of Paradise",
    "206.327",
    "SQ3",
    "5°N – 90°S",
    "Aquarius",
    "Water Bearer",
    "979.854",
    "SQ4",
    "65°N – 90°S",
    "Aquila",
    "Eagle",
    "652.473",
    "NQ4",
    "90°N – 75°S",
    "Ara",
    "Altar",
    "237.057",
    "SQ3",
    "25°N – 90°S",
    "Aries",
    "Ram",
    "441.395",
    "NQ1",
    "90°N – 60°S",
    "Auriga",
    "Charioteer",
    "657.438",
    "NQ2",
    "90°N – 40°S",
    "Boötes",
    "Herdsman",
    "906.831",
    "NQ3",
    "90°N – 50°S",
    "Caelum",
    "Chisel",
    "124.865",
    "SQ1",
    "40°N – 90°S",
    "Camelopardalis",
    "Giraffe",
    "756.828",
    "NQ2",
    "90°N – 10°S",
    "Cancer",
    "Crab",
    "505.872",
    "NQ2",
    "90°N – 60°S",
    "Canes Venatici",
    "Hunting Dogs",
    "465.194",
    "NQ3",
    "90°N – 40°S",
    "Canis Major",
    "Greater Dog",
    "380.118",
    "SQ2",
    "60°N – 90°S",
    "Canis Minor",
    "Lesser Dog",
    "183.367",
    "NQ2",
    "90°N – 75°S",
    "Capricornus",
    "Sea Goat",
    "413.947",
    "SQ4",
    "60°N – 90°S",
    "Carina",
    "Keel",
    "494.184",
    "SQ2",
    "20°N – 90°S",
    "Cassiopeia",
    "Cassiopeia",
    "598.407",
    "NQ1",
    "90°N – 20°S",
    "Centaurus",
    "Centaur",
    "1060.422",
    "SQ3",
    "25°N – 90°S",
    "Cepheus",
    "Cepheus",
    "587.787",
    "NQ4",
    "90°N – 10°S",
    "Cetus",
    "Whale (or Sea Monster)",
    "1231.411",
    "SQ1",
    "70°N – 90°S",
    "Chamaeleon",
    "Chameleon",
    "131.592",
    "SQ2",
    "0° – 90°S",
    "Circinus",
    "Compass (drafting tool)",
    "93.353",
    "SQ3",
    "30°N – 90°S",
    "Columba",
    "Dove",
    "270.184",
    "SQ1",
    "45°N – 90°S",
    "Coma Berenices",
    "Berenice's Hair",
    "386.475",
    "NQ3",
    "90°N – 70°S",
    "Corona Australis",
    "Southern Crown",
    "127.696",
    "SQ4",
    "40°N – 90°S",
    "Corona Borealis",
    "Northern Crown",
    "178.71",
    "NQ3",
    "90°N – 50°S",
    "Corvus",
    "Crow",
    "183.801",
    "SQ3",
    "60°N – 90°S",
    "Crater",
    "Cup",
    "282.398",
    "SQ2",
    "65°N – 90°S",
    "Crux",
    "Southern Cross",
    "68.447",
    "SQ3",
    "20°N – 90°S",
    "Cygnus",
    "Swan",
    "803.983",
    "NQ4",
    "90°N – 40°S",
    "Delphinus",
    "Dolphin",
    "188.549",
    "NQ4",
    "90°N – 70°S",
    "Dorado",
    "Dolphinfish",
    "179.173",
    "SQ1",
    "20°N – 90°S",
    "Draco",
    "Dragon",
    "1082.952",
    "NQ3",
    "90°N – 15°S",
    "Equuleus",
    "Little Horse (Foal)",
    "71.641",
    "NQ4",
    "90°N – 80°S",
    "Eridanus",
    "Eridanus (river)",
    "1137.919",
    "SQ1",
    "32°N – 90°S",
    "Fornax",
    "Furnace",
    "397.502",
    "SQ1",
    "50°N – 90°S",
    "Gemini",
    "Twins",
    "513.761",
    "NQ2",
    "90°N – 60°S",
    "Grus",
    "Crane",
    "365.513",
    "SQ4",
    "34°N – 90°S",
    "Hercules",
    "Hercules",
    "1225.148",
    "NQ3",
    "90°N – 50°S",
    "Horologium",
    "Pendulum Clock",
    "248.885",
    "SQ1",
    "30°N – 90°S",
    "Hydra",
    "Hydra",
    "1302.844",
    "SQ2",
    "54°N – 83°S",
    "Hydrus",
    "(male) Water Snake",
    "243.035",
    "SQ1",
    "8°N – 90°S",
    "Indus",
    "Indian",
    "294.006",
    "SQ4",
    "15°N – 90°S",
    "Lacerta",
    "Lizard",
    "200.688",
    "NQ4",
    "90°N – 40°S",
    "Leo",
    "Lion",
    "946.964",
    "NQ2",
    "90°N – 65°S",
    "Leo Minor",
    "Lesser Lion",
    "231.956",
    "NQ2",
    "90°N – 45°S",
    "Lepus",
    "Hare",
    "290.291",
    "SQ1",
    "63°N – 90°S",
    "Libra",
    "Scales",
    "538.052",
    "SQ3",
    "65°N – 90°S",
    "Lupus",
    "Wolf",
    "333.683",
    "SQ3",
    "35°N – 90°S",
    "Lynx",
    "Lynx",
    "545.386",
    "NQ2",
    "90°N – 55°S",
    "Lyra",
    "Lyre",
    "286.476",
    "NQ4",
    "90°N – 40°S",
    "Mensa",
    "Table Mountain (Mons Mensae)",
    "153.484",
    "SQ1",
    "4°N – 90°S",
    "Microscopium",
    "Microscope",
    "209.513",
    "SQ4",
    "45°N – 90°S",
    "Monoceros",
    "Unicorn",
    "481.569",
    "NQ2",
    "75°N – 90°S",
    "Musca",
    "Fly",
    "138.355",
    "SQ3",
    "10°N – 90°S",
    "Norma",
    "Level",
    "165.29",
    "SQ3",
    "30°N – 90°S",
    "Octans",
    "Octant",
    "291.045",
    "SQ4",
    "0°- 90°S",
    "Ophiuchus",
    "Serpent Bearer",
    "948.34",
    "SQ3",
    "80°N – 80°S",
    "Orion",
    "Orion (the Hunter)",
    "594.12",
    "NQ1",
    "85°N – 75°S",
    "Pavo",
    "Peacock",
    "377.666",
    "SQ4",
    "30°N – 90°S",
    "Pegasus",
    "Pegasus",
    "1120.794",
    "NQ4",
    "90°N – 60°S",
    "Perseus",
    "Perseus",
    "614.997",
    "NQ1",
    "90°N – 35°S",
    "Phoenix",
    "Phoenix",
    "469.319",
    "SQ1",
    "32°N – 80°S",
    "Pictor",
    "Easel",
    "246.739",
    "SQ1",
    "26°N – 90°S",
    "Pisces",
    "Fishes",
    "889.417",
    "NQ1",
    "90°N – 65°S",
    "Piscis Austrinus",
    "Southern Fish",
    "245.375",
    "SQ4",
    "55°N – 90°S",
    "Puppis",
    "Stern",
    "673.434",
    "SQ2",
    "40°N – 90°S",
    "Pyxis",
    "Compass (mariner's compass)",
    "220.833",
    "SQ2",
    "50°N – 90°S",
    "Reticulum",
    "Reticle",
    "113.936",
    "SQ1",
    "23°N – 90°S",
    "Sagitta",
    "Arrow",
    "79.932",
    "NQ4",
    "90°N – 70°S",
    "Sagittarius",
    "Archer",
    "867.432",
    "SQ4",
    "55°N – 90°S",
    "Scorpius",
    "Scorpion",
    "496.783",
    "SQ3",
    "40°N – 90°S",
    "Sculptor",
    "Sculptor",
    "474.764",
    "SQ1",
    "50°N – 90°S",
    "Scutum",
    "Shield (of Sobieski)",
    "109.114",
    "SQ4",
    "80°N – 90°S",
    "Serpens",
    "Snake",
    "636.928",
    "NQ3",
    "80°N – 80°S",
    "Sextans",
    "Sextant",
    "313.515",
    "SQ2",
    "80°N – 90°S",
    "Taurus",
    "Bull",
    "797.249",
    "NQ1",
    "90°N – 65°S",
    "Telescopium",
    "Telescope",
    "251.512",
    "SQ4",
    "40°N – 90°S",
    "Triangulum",
    "Triangle",
    "131.847",
    "NQ1",
    "90°N – 60°S",
    "Triangulum Australe",
    "Southern Triangle",
    "109.978",
    "SQ3",
    "25°N – 90°S",
    "Tucana",
    "Toucan",
    "294.557",
    "SQ4",
    "25°N – 90°S",
    "Ursa Major",
    "Great Bear",
    "1279.66",
    "NQ2",
    "90°N – 30°S",
    "Ursa Minor",
    "Little Bear",
    "255.864",
    "NQ3",
    "90°N – 10°S",
    "Vela",
    "Sails",
    "499.649",
    "SQ2",
    "30°N – 90°S",
    "Virgo",
    "Virgin (Maiden)",
    "1294.428",
    "SQ3",
    "80°N – 80°S",
    "Volans",
    "Flying Fish",
    "141.354",
    "SQ2",
    "15°N – 90°S",
    "Vulpecula",
    "Fox",
    "268.165",
    "NQ4",
    "90°N – 55°S"
    ]
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    map += -1
    if (map < 0) {
        map = maxmap
    }
    cur.say(map, 500)
})
function GetName (num: number) {
    element = 5 * num + 1
    return consts[element]
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Type = "image"
    showMap(map)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Type = "data"
    showData(Current)
})
function createImages () {
    Maps = [
    assets.image`Andromeda`,
    assets.image`Antlia`,
    assets.image`Apus`,
    assets.image`Aquarius`,
    assets.image`Aquila`,
    assets.image`Ara`,
    assets.image`Aries`,
    assets.image`Auriga`,
    assets.image`Bootes`,
    assets.image`Caelum`
    ]
    Refs = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ]
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Current += -1
    if (Current < 1) {
        Current = 88
    }
    cur.say(Current, 500)
})
function showMap (num: number) {
    showData(Refs[num])
    Current = Refs[num]
    starimage = sprites.create(Maps[num], SpriteKind.constmap)
    starimage.setPosition(130, 85)
    starimage.setVelocity(0, 0)
    pause(2000)
    starimage.destroy()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Current += 1
    if (Current > 88) {
        Current = 1
    }
    cur.say(Current, 500)
})
function showData (num: number) {
    Cnst.say(GetConst(num), 2000)
    English.say(GetName(num), 2000)
    Quad.say(GetQuad(num), 2000)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    map += 1
    if (map > maxmap) {
        map = 0
    }
    cur.say(map, 500)
})
function GetConst (num: number) {
    element = 5 * num
    return consts[element]
}
function GetQuad (num: number) {
    element = 5 * num + 3
    return consts[element]
}
let starimage: Sprite = null
let Refs: number[] = []
let element = 0
let consts: string[] = []
let Type = ""
let Current = 0
let Quad: Sprite = null
let cur: Sprite = null
let English: Sprite = null
let Cnst: Sprite = null
let Maps: Image[] = []
let maxmap = 0
let map = 0
scene.setBackgroundImage(assets.image`LCARS`)
createStars()
createImages()
map = 0
maxmap = Maps.length - 1
Cnst = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.label)
English = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.label)
cur = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.label)
Quad = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.label)
Cnst.setPosition(5, 73)
English.setPosition(5, 93)
Quad.setPosition(5, 113)
cur.setPosition(91, 70)
let Enterprise = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    .....2111111111....1111111111111
    ...........11.........111.......
    .............11...1111..........
    ...............11111............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
Enterprise.setVelocity(20, 0)
Enterprise.setPosition(68, 20)
Enterprise.setBounceOnWall(true)
Current = 1
Type = "data"
let stars = [img`
    . . . . . . . . . . . . . . . . 
    . . 1 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . 1 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 1 
    . 1 . . . . . . . . . . . . . . 
    `]
