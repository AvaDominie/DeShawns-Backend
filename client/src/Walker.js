


import { getWalkers } from "./apiManager";




const walkers = await getWalkers()


export default function Walkers() {
    return `<h2>All Walkers</h2>
        <select id="walker">
        <ul>
        ${
            walkers.map(
                (walker) => {
                    return <li value={walker.id}>{walker.Name}</li>
                }
            )
        }
        </ul>
        </select>`
}