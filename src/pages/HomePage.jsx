import NoteCard from '../components/NoteCard'
import AppNavbar from '../components/AppNavbar'
import TextEditor from '../components/TextEditor'

const HomePage = ({info, addEntry}) => {
    return (
        <>
        <NoteCard info={info}/>     
        <TextEditor addEntry={addEntry}/>
        </>
    )
}

export default HomePage