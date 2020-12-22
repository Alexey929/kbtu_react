import React, {
  FC, useState, useCallback, useEffect, useLayoutEffect,
} from 'react'
import { observer } from 'mobx-react-lite'

import { Input } from '..'
import PublicationsModel from '../../models/PublicationsModel'

import { Container, FilterLink, FilterLinks } from './PublicationsFilterStyle'

const PublicationsFilter: FC = () => {
  const [activeSort, setActiveSort] = useState('best')
  const [searchText, setSearchText] = useState('')
  const [publications, setPublications] = useState(PublicationsModel.publications)

  const changeSort = useCallback(() => {
    PublicationsModel.changeSortType(activeSort)
  }, [activeSort])

  useLayoutEffect(() => {
    setPublications(PublicationsModel.publications)
  }, [])

  useEffect(() => {
    changeSort()
  }, [changeSort])

  const onSearch = (value: string) => {
    setSearchText(value)
    const formattedSearchText = searchText.toLowerCase()

    PublicationsModel.publications = PublicationsModel.publications.filter(publication => {
      if (publication.title.toLowerCase().indexOf(formattedSearchText) > -1) {
        return publication
      }

      return null
    })

    if (searchText === '') {
      PublicationsModel.publications = publications
    }
  }

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
