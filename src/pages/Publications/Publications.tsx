import React, { FC } from 'react'

import { Text, PublicationsFilter, PublicationPreview } from '../../components'

import { Container } from './PublicationsStyle'

const Publications: FC = () => (
  <Container>
    <Text size="xl" weight="bold">Publications</Text>
    <PublicationsFilter />
    <PublicationPreview />
    <PublicationPreview />
    <PublicationPreview />
    <PublicationPreview />
    <PublicationPreview />
    <PublicationPreview />
  </Container>
)

export default Publications
