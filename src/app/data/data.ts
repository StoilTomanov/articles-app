import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    public getData(): Array<Article> {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            articles[i] = new Article(articles[i].title, articles[i].description, articles[i].author, articles[i].imageUrl,)
        }
        return articles;
    }
}