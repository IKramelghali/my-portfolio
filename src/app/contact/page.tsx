export default function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Votre message"
          className="w-full p-3 border rounded-lg"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
