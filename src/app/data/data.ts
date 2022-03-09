import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    public getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const newArticle = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl);
            articles.push(newArticle);
        }
        return articles;
    }
}