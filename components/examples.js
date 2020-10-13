import Clock from './Clock/';
import Counter from './Counter';
import { Div, H1 } from '../theme/styledHtmlElements';

const Examples = () => {
  return (
    <div p={20}>
      <Clock />
      <Counter />
    </div>
  )
};

export default Examples;
