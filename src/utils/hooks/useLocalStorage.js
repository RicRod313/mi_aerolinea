import { useState } from "react";

export function useLocalStorage(key, initialValue){
    const [storedValue, setStoredValue] = useState(() => checkValue)

    const checkValue = () => {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    }

    const setValue = (value) => {
        try {
            setStoredValue(value)
            localStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.log(e)
        }
    }

    return [storedValue, setValue]
}