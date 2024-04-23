import Dto from "../dto/Dto";

/**
 * Represents basic informations about an article.
 */
export class ArticleInfo extends Dto {
    id;
    author;
    publishDate;
    title;
}