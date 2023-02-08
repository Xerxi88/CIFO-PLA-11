const Footer = () => {
  return (
    // TODO #2
    // Podem eliminar l'etiqueta footer i simplement retornar els dos paràgrafs? No, JSX han de tenir un element primari obligatoriament.
    // Quina precaució hauríem de tenir si volguéssim fer-ho? Si deixem l'etiqueta buida React ho enten com un fragment.(Pista: React.Fragment)
    <>
      <p>Instapicsum by CIFO L'Hospitalet</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis necessitatibus aut aliquam at,
        exercitationem voluptas voluptates nihil doloremque deserunt, nesciunt eius expedita dolor quia pariatur fugit
        beatae? Necessitatibus, beatae.
      </p>
    </>
  )
}

export default Footer
