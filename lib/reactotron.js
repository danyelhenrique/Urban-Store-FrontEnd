import Reactotron from 'reactotron-react-js';

const isBrowser = typeof window !== 'undefined';

const RC = Reactotron.configure() // we can use plugins here -- more on this later
	.connect(); // let's connect!

export default RC;
