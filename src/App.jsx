import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ListStories from './components/ListStories'
import SuggestFollow from './components/SuggestFollow'

function App() {
  const [suggestedFollows, setSuggestedFollows] = useState([])
  const [stories, setStories] = useState([{
    "id": "3e6cc618-d20f-431f-b20a-13b921fee991",
    "picture": "https://picsum.photos/1600/1200?cc61cfbf-c980-4a2a-b0fe-2b48f361bb7f",
    "username": "citrix78",
    "timestamp": "2023-02-06T08:10:05.084Z",
    "comments": [
      {
        "id": "917dae4f-a34a-4026-a958-189f6fbb49d7",
        "username": "citrix78",
        "comment": "I really hope you guys like this photo!",
        "timestamp": "2023-02-06T09:10:05.084Z"
      },
      {
        "id": "c5086a38-e03c-4a20-a45d-91a938013321",
        "username": "haterish",
        "comment": "It totally sucks!!! 💩",
        "timestamp": "2023-02-06T10:10:05.084Z"
      },
      {
        "id": "704bb9f2-0cf8-468b-a8ed-ea26ae76d9fd",
        "username": "bourinhish",
        "comment": "Yeah! It's really disgusting 🤮",
        "timestamp": "2023-02-06T11:10:05.084Z"
      },
      {
        "id": "d50ed717-8794-488f-a249-d74059ec7643",
        "username": "awesomeguy",
        "comment": "You guys don't really know what you talking about, this photo is soooo coool!!!1one1 🌈 🐞 🥰",
        "timestamp": "2023-02-06T12:10:05.084Z"
      },
      {
        "id": "c2cac33d-990f-4975-b17e-adea762e306f",
        "username": "citrix78",
        "comment": "Thank you very much @awesomeguy. I put a lot of love in that picture and then these guys saying those nasty things... I dunno, maybe it's time to look for a different social network, there is this new kid on the block, Instagram or something, maybe I'll give it a go!",
        "timestamp": "2023-02-06T13:10:05.084Z"
      }
    ]
  },
  {
    "id": "d73f3ac0-5f50-410f-bb8b-29e33fb82251",
    "picture": "https://picsum.photos/1600/1200?261c9329-186f-4af9-90c7-88cff645ad8c",
    "username": "randomGuy",
    "timestamp": "2023-02-05T08:10:05.084Z",
    "comments": []
  },
  {
    "id": "853bcff1-3292-4618-b36b-d6d830a4d61d",
    "picture": "https://picsum.photos/1600/1200?2ed9e81c-ce0b-4e3f-97e6-7f245ef3bdbe",
    "username": "happiness",
    "timestamp": "2023-02-04T08:10:05.084Z",
    "comments": [
      {
        "id": "19f49c17-d578-44d5-80a2-d7a0c85c7ebe",
        "username": "haterish",
        "comment": "Worst picture ever! 💩💩💩",
        "timestamp": "2023-02-04T09:10:05.084Z"
      },
      {
        "id": "861f9b26-9a04-44f0-bd48-cedc03ac05dd",
        "username": "peaceandlove",
        "comment": "You better watch out. You better not cry. Better not pout. I'm telling you why. Santa Claus is coming to town. He's making a list. And checking it twice. Gonna find out who's naughty and nice!",
        "timestamp": "2023-02-04T10:10:05.084Z"
      }
    ]
  },
  {
    "id": "5ece4231-1581-4cce-84ab-d0b423a7f390",
    "picture": "https://picsum.photos/1600/1200?1f4db86d-a445-4543-afd5-b654e61a78e0",
    "username": "lucyDiamond",
    "timestamp": "2023-01-18T08:10:05.084Z",
    "comments": [
      {
        "id": "f45850bd-ac1a-4b4b-97e5-4879f10a8abe",
        "username": "citrix78",
        "comment": "What a nice photo! Congratulations! ",
        "timestamp": "2023-01-19T08:10:05.084Z"
      }
    ]
  },
  {
    "id": "cc29d1a5-bb5a-473b-9208-928b051c92f1",
    "picture": "https://picsum.photos/1600/1200?0d81a2de-d1c7-4a35-9228-1f8f80a6381f",
    "username": "trumpyjudd",
    "timestamp": "2023-01-12T08:10:05.084Z",
    "comments": []
  }])

  const [userLoggedIn, setUserLoggedIn] = useState('')

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
  }

  return (
    <>
      <Header />
      <h2>Who to follow</h2>
      <SuggestFollow users={suggestedFollows} />
      <h2>Latest stories</h2>

      {/* TODO #4
      /// Afegeix aquí el component ListStories passant-li com a props l'array amb les stories i la funció per afegir un comentari. */}
      {<ListStories stories={stories} onAddComment={"Nom de la funció"}/> }
      {/* TODO #5
      /// Afegeix aquí el component Footer. */}
      <Footer/>
    </>
  )
}

export default App
