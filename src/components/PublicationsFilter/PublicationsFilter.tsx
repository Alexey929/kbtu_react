import React, {
  FC, useState, useCallback, useEffect,
} from 'react'
import { observer } from 'mobx-react-lite'

import { Input } from '..'
import PublicationsModel from '../../models/PublicationsModel'

import { Container, FilterLink, FilterLinks } from './PublicationsFilterStyle'

type Props = {
  onSearch: any,
}

const PublicationsFilter: FC<Props> = ({ onSearch }: Props) => {
  const [activeSort, setActiveSort] = useState('best')

  const changeSort = useCallback(() => {
    PublicationsModel.changeSortType(activeSort)
  }, [activeSort])

  useEffect(() => {
    changeSort()
  }, [changeSort])

  return (
    <Container>
      <Input
        withoutErrors
        width="400px"
        placeholder="Search"
        name="search"
        value={searchText}
        onChange={e => onSearch(e.target.value)}
      />
      <FilterLinks>
        <FilterLink active={activeSort === 'mostDiscussed'} onClick={() => setActiveSort('mostDiscussed')}>
          Most discussed
        </FilterLink>
        <FilterLink active={activeSort === 'best'} onClick={() => setActiveSort('best')}>
          Best
        </FilterLink>
        <FilterLink active={activeSort === 'worst'} onClick={() => setActiveSort('worst')}>
          Worst
        </FilterLink>
      </FilterLinks>
    </Container>

  )
}

export default observer(PublicationsFilter)
