import { useState } from "react"

const Filter = ({children}) => {
    const [filterState, setFilterState] = useState('all')

    const handleFilterChange = (event) => {
        setFilterState(event.target.value)
    }

    return children(filterState, handleFilterChange)
}

export default Filter