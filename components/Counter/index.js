import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from './redux/actions';
import { Div, H2 } from '../../theme/styledHtmlElements';
import Button from '../Button';

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <Div>
      <H2>
        Count: <span>{count}</span>
      </H2>
      <Button variant="primary" mr={2} onClick={() => dispatch(incrementCount())}>+1</Button>
      <Button variant="primary" mr={2} onClick={() => dispatch(decrementCount())}>-1</Button>
      <Button variant="info" mr={2} onClick={() => dispatch(resetCount())}>Reset</Button>
    </Div>
  )
}

export default Counter
