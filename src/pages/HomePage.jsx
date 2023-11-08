import NoteCard from '../components/NoteCard'
import AppNavbar from '../components/AppNavbar'
import TextEditor from '../components/TextEditor'

const HomePage = ({entries, addEntry}) => {
    return (
        <>
        <NoteCard entries={entries}/>     
        <TextEditor addEntry={addEntry}/>
        </>
    )
}

export default HomePage