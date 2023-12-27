import { useEffect, useState } from "react"
import { CreateNewDog, getCities, getWalkers } from "./apiManager"



export default function AddDog() {

    const [cities, setCities] = useState([]);
    const [walkers, setWalkers] = useState([])

    const [dog, setDog] = useState({
        name: "",
        cityId: "",
        walkerId: ""
    })



    useEffect(() => {
        getCities().then((data) => {
            setCities(data)
        })
    }, [])


    useEffect(() => {
        getWalkers().then((data) => {
            setWalkers(data)
        })
    }, [])



    const handleCreateDog = (e) => {
        CreateNewDog(dog).then((responce) => {
            console.log("Dog created", responce)
        })
        e.preventDefault()
    }

    const updateDogs = (evt) => {
        const copy = { ...dog }
        copy[evt.target.name] = evt.target.value
        setDog(copy)
    }

    return (
        <form onSubmit={handleCreateDog}>
            <h2>Create new dog</h2>
            <fieldset>
                <label>Dog Name:</label>
                <input
                    type="text"
                    value={dog.name}
                    name="name"
                    onChange={updateDogs}
                    required
                    className="form-control"
                />
            </fieldset>
            <fieldset>
                <label>City:</label>
                <select
                    value={dog.cityId}
                    name="cityId"
                    onChange={updateDogs}
                    required
                    className="form-control"
                >
                    {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label>Walker:</label>
                <select
                    value={dog.walkerId}
                    name="walkerId"
                    onChange={updateDogs}
                    required
                    className="form-control"
                >
                    {walkers.map((walker) => (
                        <option key={walker.id} value={walker.id}>
                            {walker.name}
                        </option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                    <button type="submit" className="user-info-edit-btn">
                        Save
                    </button>
            </fieldset>
        </form>
    )
}