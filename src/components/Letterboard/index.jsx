const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function Letterboard() {
  return (
    <div className="letterboard">
      <div className="letters">
        {alphabet.map((letter) => (
          <button key={letter} className="letter">{letter}</button>
        ))}
      </div>
    </div>
  )
}
