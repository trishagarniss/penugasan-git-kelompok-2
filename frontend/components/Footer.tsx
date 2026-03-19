export function Footer() {
const catEmojis = [ "😸", "😹", "😻", "🙀"];

  return (
    <footer className="w-full px-8 py-6" style={{ backgroundColor: '#2e6d77' }}>
      <div className="flex w-full">

        <div className="animate-scroll">
      {catEmojis.concat(catEmojis).map((emoji, i) => (
        <span key={i} className="mx-10 text-4xl">
          {emoji}
        </span>
      ))}
    </div>

      </div>

      <p className="text-center mt-4 text-sm">
        © {new Date().getFullYear()} Sistem Informasi Kesehatan
      </p>
    </footer>
  );
}