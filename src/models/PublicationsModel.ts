/* eslint-disable max-len */
import { makeAutoObservable } from 'mobx'

import { PublicationInterface } from '../interfaces/Publications'

import UserModel from './UserModel'

class PublicationsModel {
  publications: PublicationInterface[] = [
    {
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
    {
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
    {
      id: 3,
      title: 'AReact and React Native. В чем разница?',
      author: {
        id: 3,
        nickname: 'Aatabay17',
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
        text: 'Класс, ты гений! Теперь могу работать на React Native :DDD',
        rating: {
          likes: '1',
          dislikes: '0',
        },
      }],
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  create(title: string, previewText: string, mainText: string) {
    const publications = [...this.publications]

    const lastId = publications[publications.length - 1].id
    const newPublication: PublicationInterface = {
      id: lastId,
      title,
      previewText,
      mainText,
      author: {
        nickname: UserModel.currentUser?.nickname ?? '',
        id: UserModel.currentUser?.id ?? '',
      },
      rating: {
        dislikes: '0',
        likes: '0',
      },
      date: String(Date.now),
      comments: [],
    }

    return this.publications.push(newPublication)
  }

  search(searchText: string) {
    console.log(searchText)
    const formattedSearchText = searchText.toLowerCase()
    const oldPublications = this.publications

    this.publications = this.publications.filter(publication => {
      if (publication.title.toLowerCase().indexOf(formattedSearchText) > -1) {
        return publication
      }

      return null
    })

    if (searchText === '') {
      this.publications = oldPublications
    }
  }

  changeSortType(activeSort: string) {
    switch (activeSort) {
      case 'mostDiscussed':
        this.publications = this.publications.sort((a: PublicationInterface, b: PublicationInterface): any => {
          if (a.comments.length < b.comments.length) {
            return 1
          }

          return -1
        })
        break
      case 'worst':
        this.publications = this.publications.sort((a: PublicationInterface, b: PublicationInterface): any => {
          if (a.rating.dislikes < b.rating.dislikes) {
            return 1
          }

          return -1
        })
        break
      default:
        this.publications = this.publications.sort((a: PublicationInterface, b: PublicationInterface): any => {
          if (a.rating.likes < b.rating.likes) {
            return 1
          }

          return -1
        })
        break
    }
  }
}

export default new PublicationsModel()
