export function Footer({ section }) {
  const renderContent = () => {
    switch (section) {
      case 'about':
        return "Je suis un developpeur passionne par les interfaces retro et l interactivite.";
      case 'skills':
        return "React, Tailwind, Firestore, Node.js, et un soupçon de magie noire.";
      case 'works':
        return "Portfolio : visual novels, projets interactifs et jeux narratifs.";
      case 'contact':
        return "Tu peux me contacter via LinkedIn ou par mail à l'adresse suivante...";
      default:
        return "Bienvenue ! Choisis une section ci-dessus.";
    }
  };

  return (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
      w-[100%] max-w-6x1 px-6 py-3 bg-black bg-opacity-60 text-white border border-white shadow-md font-mono text-l">      {renderContent()}
    </div>
  );
}
