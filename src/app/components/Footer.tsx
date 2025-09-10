const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
