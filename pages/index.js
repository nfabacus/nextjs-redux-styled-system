import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../components/Clock/redux/actions'
import Examples from '../components/examples'
import {Div, H1, H2, H3, H4, H5, H6, P } from '../theme/typography'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    <Div p={20}>
      <H1>H1 Heading</H1>
      <H2>H2 Heading</H2>
      <H3>H3 Heading</H3>
      <H4>H4 Heading</H4>
      <H5>H5 Heading</H5>
      <H6>H6 Heading</H6>

      <P>Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.</P>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </Div>
  )
}

export default Index
