export function Footer({ section }) {
  const renderContent = () => {
    switch (section) {
      case 'about':
        return "Je suis un développeur passionné par les interfaces rétro et l’interactivité.";
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
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm px-4 py-3 font-mono z-10">
      {renderContent()}
    </div>
  );
}
