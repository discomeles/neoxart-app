import { useState, useEffect } from 'react'
import dataService from '../services/data'
import NoteCard from '../components/NoteCard'
import AppNavbar from '../components/AppNavbar'
import TextEditor from '../components/TextEditor'

// const HomePage = ({entries, addEntry}) => {
const HomePage = () => {

    const [entries, setEntries] = useState([])
    const [dataRequest, setDataRequest] = useState([])

    // --- Get initial entries ---
    useEffect(() => {
      dataService.getAll()
        .then(intialData => {
          setEntries(intialData)
      })
    },[dataRequest])


    return (
        <>
        <NoteCard entries={entries}/>     
        <TextEditor addEntry={addEntry}/>
        </>
    )
}

export default HomePage