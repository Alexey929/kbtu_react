import React, { FC, useState, useEffect } from 'react'

import { Input } from '..'

import { Container, FilterLink, FilterLinks } from './PublicationsFilterStyle'

const PublicationsFilter: FC = () => {
  const [activeFilter, setActiveFilter] = useState('mostDiscussed')

  return (
    <Container>
      <Input withoutErrors width="400px" placeholder="Search" name="search" />
      <FilterLinks>
        <FilterLink active={activeFilter === 'mostDiscussed'} onClick={() => setActiveFilter('mostDiscussed')}>
          Most discussed
        </FilterLink>
        <FilterLink active={activeFilter === 'best'} onClick={() => setActiveFilter('best')}>
          Best
        </FilterLink>
        <FilterLink active={activeFilter === 'worst'} onClick={() => setActiveFilter('worst')}>
          Worst
        </FilterLink>
      </FilterLinks>
    </Container>

  )
}

export default PublicationsFilter
