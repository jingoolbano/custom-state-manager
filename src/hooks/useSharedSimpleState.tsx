/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'

type StateMap = Map<string, any>

const stateMap: StateMap = new Map()

const useSharedSimpleState = <T,>(
  key: string,
  initialState: T
): [T, (newState: T | ((prevState: T) => T)) => void] => {
  const [states, setStates] = useState<StateMap>(() => {
    const storedStates = localStorage.getItem('__sharedSimpleState__')
    if (storedStates !== null) {
      return new Map(JSON.parse(storedStates))
    }
    stateMap.set(key, initialState)
    return new Map([[key, initialState]])
  })

  useEffect(() => {
    localStorage.setItem('__sharedSimpleState__', JSON.stringify(Array.from(states.entries())))
  }, [states])

  const updateState = (newState: T | ((prevState: T) => T)) => {
    const updatedState =
      typeof newState === 'function' ? (newState as (prevState: T) => T)(states.get(key)) : newState
    setStates((prevStates) => {
      const newStates = new Map(prevStates)
      newStates.set(key, updatedState)
      return newStates
    })
  }

  return [states.get(key), updateState]
}

export default useSharedSimpleState
