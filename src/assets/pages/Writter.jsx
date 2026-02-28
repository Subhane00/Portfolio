import { Typewriter } from 'react-simple-typewriter';

const Writter = () => {
  return (
    <h2>
      I'm a{' '}
      <span style={{ color: '#fff' }}>
        <Typewriter
          words={['Front-end Developer', 'React Developer', 'UI Designer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
};

export default Writter;
