import React, { FC, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { observer } from 'mobx-react-lite'

import {
  Text, Icon, Textarea, StatisticCard, Button,
} from '../../components'
import UserModel from '../../models/UserModel'

import {
  Container, Statistics, Description, DescriptionTitle, DescriptionMain, DescriptionButton,
} from './ProfileStyle'

const Profile: FC = () => {
  const [isEditable, setEdited] = useState(false)
  const [shortAboutText, setText] = useState(UserModel.currentUser?.shortAbout)

  return (
    <Container>
      <Text size="2xl" weight="bold">{UserModel.currentUser?.nickname}</Text>
      <Statistics>
        <StatisticCard
          label="My subscriptions"
          valueType="primary"
          value={UserModel.currentUser?.numberOfSubscriptions}
          withoutAction
        />
        <StatisticCard
          label="My subscribers"
          valueType="primary"
          value={UserModel.currentUser?.numberOfSubscribers}
          withoutAction
        />
        <StatisticCard
          label="My rating"
          valueType="success"
          value={UserModel.currentUser?.rating}
          withoutAction
        />
      </Statistics>
      <Description>
        <DescriptionTitle>
          <Text size="xl" weight="bold" margin="0 10px 0 0">Info</Text>
          {!isEditable
            && (
            <Icon
              icon={<MdEdit />}
              iconSize="18px"
              iconColor="#808080"
              pointer
              onClick={() => setEdited(prevState => !prevState)}
            />
            )}
        </DescriptionTitle>
        <DescriptionMain>
          {isEditable
            ? (
              <>
                <Textarea
                  value={shortAboutText ?? UserModel.currentUser?.shortAbout}
                  onChange={e => setText(e.target.value)}
                  width="860px"
                  height="200px"
                  name="aboutInput"
                />
                <DescriptionButton>
                  <Button
                    outlined
                    type="primary"
                    onClick={() => {
                      UserModel.addInfoToProfile(shortAboutText); setEdited(false)
                    }}
                  >
                    Save
                  </Button>
                </DescriptionButton>
              </>
            )
            : (
              <>
                {UserModel.currentUser?.shortAbout
                  ? <Text margin="10px 0 0">{UserModel.currentUser?.shortAbout}</Text>
                  : <Text margin="20px 0 0" type="secondary">There is nothing here yet :(</Text>}
              </>
            )}
        </DescriptionMain>
      </Description>
    </Container>
  )
}

export default observer(Profile)
