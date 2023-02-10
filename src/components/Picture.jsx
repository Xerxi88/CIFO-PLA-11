const Picture = ({ photo, author, timestamp }) => {
  const photoTime = new Date(timestamp)
  const today = new Date()
  const diffTime = Math.abs(today - photoTime)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const time = diffDays === 0 ? 'today' : diffDays === 1 ? 'yesterday' : `${diffDays} days ago`

  return (
    // TODO #11
    // Afegeix les classes de CSS picture i picture-big als elements div i img respectivament.
    <div className="picture">
      <figure>
        <img src={photo} alt={`Uploaded by ${author}`} className="picture-big" />
        <figcaption>
          {/* TODO #12
          /// Afegeix el contingut de figcaption perquè mostri el següent text:
          /// Posted [n] days ago by [nom autor fotografia]
          /// Pots fer que posi today i yesterday en comptes de "0 days ago" i "1 day ago"? */}
          <div>Posted {time} by {author}</div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Picture
