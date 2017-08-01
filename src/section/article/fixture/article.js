import headline from './mock-data/headline'
import body from './mock-data/body'
import createdDate from './mock-data/createdDate'
import author from './mock-data/author'

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function generateMockArticle () {
  const max = 100
  const i = Math.floor(Math.random() * max)

  return {
    headline: headline[i].data,
    createdDate: createdDate[i].data,
    author: author[i].data,

    body: body[Math.floor(Math.random() * body.length)].data,

    imgSrc: `http://img.clock.co.uk/${randomNumber(70, 200)}x${randomNumber(70, 200)}`
  }
}

function generateMockArticles (quantity) {
  let n = quantity
  const articles = []
  while (n-- > 0) {
    articles.push(generateMockArticle())
  }
  return articles
}

export default generateMockArticles
