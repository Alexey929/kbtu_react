import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { Text, PublicationsFilter, PublicationPreview } from '../../components'
import PublicationsModel from '../../models/PublicationsModel'

import { Container } from './PublicationsStyle'

const Publications: FC = () => (
  <Container>
    <Text size="xl" weight="bold">Publications</Text>
    <PublicationsFilter />
    {PublicationsModel.publications.map(publication => <PublicationPreview publication={publication} />)}
  </Container>

)

export default observer(Publications)
