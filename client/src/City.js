
import { getCities } from "./apiManager";




const cities = await getCities()


export default function Cities() {
    return `<h2>All Cities</h2>
    <select id="city">
    <ul>
    ${
        cities.map(
            (city) => {
                return <li value={city.id}>{city.Name}</li>
            }
        )
    }
    </ul>
    </select>`
}



