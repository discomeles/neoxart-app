import NoteCard from './NoteCard'
import AppNavbar from './AppNavbar'

const HomePage = ({info}) => {
    return (
        <>
        <AppNavbar />
        <NoteCard info={info}/>
        </>
    )
}

export default HomePage