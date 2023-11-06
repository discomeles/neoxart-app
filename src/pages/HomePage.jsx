import NoteCard from '../components/NoteCard'
import AppNavbar from '../components/AppNavbar'
import TextEditor from '../components/TextEditor'

const HomePage = ({info}) => {
    return (
        <>
        <NoteCard info={info}/>
        <TextEditor />
        </>
    )
}

export default HomePage