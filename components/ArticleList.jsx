import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

function ArticleList({articles}) {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
        ))}
    </div>
  )
}

export default ArticleList
