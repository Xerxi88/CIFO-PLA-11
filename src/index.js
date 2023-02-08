import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// TODO #1
// D'on venen els mètodes createRoot i render de les línies següents? Venen de la llibrería de React que utilitzará per crear/gestionar i renderitzar els diferents components.
// D'on ve l'element amb identificador root? Aquest element esta especificat en l'index.html i es on treballara React utilitzant el DOM amb ReactDOM.
// Què fa el mètode render? Analitza tot l'arbre de components i els dibuixa en pantalla sobre el DOM.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
