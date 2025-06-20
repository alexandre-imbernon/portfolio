export function Section({ name }) {
  switch (name) {
    case 'about':
      return <p className="text-white">Hello ! Voici la section "About" 👋</p>;
    case 'skills':
      return <p className="text-white">Compétences : React, Tailwind, Firestore...</p>;
    case 'works':
      return <p className="text-white">Projets en cours et terminés.</p>;
    case 'contact':
      return <p className="text-white">Contacte-moi sur LinkedIn ou par mail !</p>;
    default:
      return <p className="text-white">Section inconnue.</p>;
  }
}
