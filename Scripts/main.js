// import { getFish } from './database.js'
import { FishList } from './FishList.js'

// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

const parentHTMLElement = document.querySelector(".fish")
// const htmlString = `<div>${FishList()}</div>`

parentHTMLElement.innerHTML = FishList()