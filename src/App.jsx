import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ListStories from './components/ListStories'
import SuggestFollow from './components/SuggestFollow'

function App() {
  const [suggestedFollows, setSuggestedFollows] = useState([])
  const [stories, setStories] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('data.json')
      const data = await res.json()
      setSuggestedFollows(data.suggestedFollows)
      setStories(data.stories)
      setUserLoggedIn(data.userLoggedIn)
    }

    fetchData()
  }, [])

  // Add comment.
  const addComment = (storyId, comment) => {
    // TODO #3
    // Escriu el codi d'aquesta funció.
    // Fixa't que rep un id d'story i un text amb el comentari a afegir.
    // Cal afegir aquest comentari (incorporant userLoggedIn com a usuari i la data actual) a la story en qüestió.
    // Després de fer-ho, React ha de repintar la story de manera automàtica perquè ja mostri el nou comentari.

      setStories(
        stories.map((story) => {
        if (story.id !== storyId) {
          return story}
          
          const newComment = {
            id:story.id,
            username: userLoggedIn,
            comment: comment,
            timestamp: new Date().toISOString(),
          }

          return {...story, comments:[...story.comments, newComment]}

        }))
      }

  return (
    <>
      <Header />
      <h2>Who to follow</h2>
      <SuggestFollow users={suggestedFollows} />
      <h2>Latest stories</h2>

      {/* TODO #4
      /// Afegeix aquí el component ListStories passant-li com a props l'array amb les stories i la funció per afegir un comentari. */}
      {<ListStories stories={stories} onAddComment={addComment}/>}
      {/* TODO #5
      /// Afegeix aquí el component Footer. */}
      <Footer/>
    </>
  )
}

export default App
