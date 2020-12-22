/* eslint-disable max-len */
import { makeAutoObservable } from 'mobx'

import { UserInterface } from '../interfaces/User'

class UserModel {
  public existUsers: UserInterface[] = [{
    id: 1,
    nickname: 'Alex Ageev',
    email: 'testtest@test.com',
    password: '12345678',
    publications: [{
      id: 1,
      title: 'React. Плавный старт',
      author: {
        id: 1,
        nickname: 'Alex Ageev',
      },
      previewText: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев текста',
      mainText: `Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.

    По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.`,
      rating: {
        dislikes: '0',
        likes: '3',
      },
      date: '20.10.2020',
      comments: [],
    },
    ],
    shortAbout: 'React developer, love to code and contribute to opensource.',
    rating: {
      likes: '1',
      dislikes: '0',
    },
    numberOfSubscriptions: 1,
    numberOfSubscribers: 2,
  },
  {
    id: 2,
    nickname: 'Rahat Aubakirov',
    email: 'test2@test.com',
    password: '12345678',
    rating: {
      likes: '1',
      dislikes: '0',
    },
    publications: [{
      id: 2,
      title: 'AReact and React Native. В чем разница?',
      author: {
        id: 2,
        nickname: 'Rahat Aubakirov',
      },
      previewText: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет оценить значение позиций',
      mainText: `Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же консультация с широким активом позволяет выполнять важные задания по разработке соответствующий условий активизации. Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании форм развития. Таким образом новая модель организационной деятельности играет важную роль в формировании модели развития.
      Не следует, однако забывать, что укрепление и развитие структуры требуют от нас анализа модели развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке форм развития.`,
      rating: {
        dislikes: '1',
        likes: '2',
      },
      date: '20.10.2020',
      comments: [{
        author: {
          id: 1,
          nickname: 'Alex Ageev',
        },
        date: '12.04.2019',
        text: 'Некоторые аспекты React Native остались не освещены, мне не понравилось',
        rating: {
          likes: '1',
          dislikes: '1',
        },
      }, {
        author: {
          id: 2,
          nickname: 'Rahat Aubakirov',
        },
        date: '12.04.2019',
        text: 'Класс! Теперь могу работать на React Native :DDD',
        rating: {
          likes: '1',
          dislikes: '0',
        },
      }],
    },
    ],
    shortAbout: 'You know, I\'m kinda React developer myself.',
    numberOfSubscriptions: 2,
    numberOfSubscribers: 1,
  }, {
    id: 3,
    nickname: 'Aatabay17',
    email: 'test3@test.com',
    password: '12345678',
    publications: [{
      id: 3,
      title: 'AReact and React Native. В чем разница?',
      author: {
        id: 3,
        nickname: 'Aatabay17',
      },
      date: '20.09.2020',
      previewText: 'Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет оценить значение позиций',
      mainText: `Повседневная практика показывает, что начало повседневной работы по 
      формированию позиции позволяет оценить значение позиций, занимаемых участниками 
      в отношении поставленных задач. Задача организации, в особенности же консультация 
      с широким активом позволяет выполнять важные задания по разработке соответствующий 
      условий активизации. Повседневная практика показывает, что реализация намеченных 
      плановых заданий играет важную роль в формировании форм развития. 
      Таким образом новая модель организационной деятельности играет важную роль в формировании модели развития.
      Не следует, однако забывать, что укрепление и
      развитие структуры требуют от нас анализа модели развития.
      Не следует, однако забывать, что постоянный количественный
      рост и сфера нашей активности позволяет выполнять важные задания по разработке форм развития.`,
      rating: {
        dislikes: '1',
        likes: '2',
      },
      comments: [{
        author: {
          id: 1,
          nickname: 'Alex Ageev',
        },
        date: '12.04.2019',
        text: 'Некоторые аспекты React Native остались не освещены, мне не понравилось',
        rating: {
          likes: '1',
          dislikes: '1',
        },
      }, {
        author: {
          id: 2,
          nickname: 'Rahat Aubakirov',
        },
        date: '12.04.2019',
        text: 'Класс! Теперь могу работать на React Native :DDD',
        rating: {
          likes: '1',
          dislikes: '0',
        },
      }],
    }],
    shortAbout: 'React developer, love to code and contribute to opensource',
    rating: {
      likes: '1',
      dislikes: '0',
    },
    numberOfSubscriptions: 1,
    numberOfSubscribers: 1,
  }]

  public currentUser: UserInterface | null = null

  constructor() {
    makeAutoObservable(this)
  }

  login = (email: string, password: string): boolean => {
    const user: UserInterface | undefined = this.existUsers
      .find(findedUser => findedUser?.email === email && findedUser.password === password)

    if (user) {
      this.currentUser = user

      return true
    }

    return false
  }

  registrate = (nickname: string, email: string, password: string) => {
    let users: UserInterface[] = [...this.existUsers]

    const lastId = users[users.length - 1].id

    const newUser = {
      id: lastId, nickname, email, password,
    }

    users.push({
      id: lastId, nickname, email, password,
    })

    users = this.existUsers
    this.currentUser = newUser

    return true
  }

  addInfoToProfile = (text: string | undefined) => {
    if (this.currentUser && text) {
      this.currentUser.shortAbout = text
    }
  }
}

export default new UserModel()
