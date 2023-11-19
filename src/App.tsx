import React, { useCallback, useState } from 'react'
import Typography from './lib/components/Typography'
import Container from './lib/components/Container'
import Checkbox from './lib/components/Checkbox'

import './lib/global.css'

const App = (): JSX.Element => {
  const [mockState, setMockState] = useState(false);

  const handleChange = () => {
    setMockState(!mockState);
  }

  return (
    <>
      {/* <Typography variant="h1">Quick waltz</Typography> */}
      <Container size='2xl' className='py-4'>
        <Checkbox checked={mockState} onChange={handleChange} label="bolama" />
        <Typography variant="h2">Jivex fox nymph grabs</Typography>
        <Typography variant="h3">Jived fox nymph grabs quick waltz</Typography>
        <Typography variant="h4">Jived fox nymph grabs quick waltz</Typography>
      </Container>
      {/* <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="p"> */}
        {/* Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.Morbi
        interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
        dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius. Sed
        egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
        metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
        quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
        Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.Morbi
        interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
        ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
        dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,Sed
        egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus
        metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
        quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
        Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui.
      </Typography> */}
    </>
  )
}

export default App
