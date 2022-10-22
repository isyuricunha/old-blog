import Typing from './Typing';

const TYPING_MSGS = [
  'Eu sou um Front-end Developer Junior.',
  "Amante do mundo <a href='https://en.wikipedia.org/wiki/Open_source'>Open-Source<a>",
  'Só mais um cara tentando apressar a fila do mercado com o poder da mente.',
  'Eu sou <strong>eu<strong>.'
];

const Bio = () => {
  const options = {
    strings: TYPING_MSGS,
    typeSpeed: 65,
    backSpeed: 70,
    cursorChar: '|',
    smoothScrolling: true,
    cursorSmoothCaretAnimation: true,
    showCursor: true
  };

  return (
    <section>
      <p className="text-xl">
        <Typing options={options} />
      </p>
    </section>
  );
};
export default Bio;
