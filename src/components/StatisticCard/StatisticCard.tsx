import React, { FC } from 'react'
import { MdChevronRight } from 'react-icons/md'

import { Text, Icon } from '..'

import { Container, Info } from './StatisticCardStyle'

type Props = {
  label: string,
  value: string | number | undefined,
  valueType?: 'default' | 'warning' | 'danger' | 'secondary' | 'primary' | 'inverted' | 'success',
  onClick?: () => void,
  withoutAction?: boolean,
}

const StatisticCard: FC<Props> = ({
  label, value, valueType, onClick, withoutAction,
} : Props) => (
  <Container onClick={onClick} withoutAction={withoutAction}>
    <Info>
      <Text size="xl" weight="bold">{label}</Text>
      {value
        ? <Text margin="10px 0 0 " size="2xl" weight="bold" type={valueType}>{value}</Text>
        : <Text margin="10px 0 0 " type="secondary" size="2xl" weight="bold">None</Text>}
    </Info>
    {!withoutAction
      && <Icon iconSize="40px" icon={<MdChevronRight />} />}
  </Container>
)

StatisticCard.defaultProps = {
  valueType: 'default',
  onClick: () => { },
  withoutAction: false,
}

export default StatisticCard
