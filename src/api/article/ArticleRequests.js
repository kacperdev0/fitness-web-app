import dtoFabric from "../dto/DtoFabric";
import { Article } from "./Article";
import { ArticleInfo } from "./ArticleInfo";

const articlesInfoFabric = dtoFabric.getObjectsFabric(ArticleInfo.fromJson, "article");
const articleFabric = dtoFabric.getObjectFabric(Article.fromJson, "article");

/**
 * Fetches the last articles from the API.
 * @returns {Promise<ArticleInfo[]>} A promise that resolves to an array of ArticleInfo objects representing the last articles.
 */
export function findLastArticlesInfo() {
    return articlesInfoFabric();
}


/**
 * Fetches the last 'limit' articles from the API.
 * @param {number} limit - The maximum number of articles to retrieve.
 * @returns {Promise<ArticleInfo[]>} A promise that resolves to an array of ArticleInfo objects representing the last 'limit' articles.
 */
export function findLastArticlesInfoLimit (limit) {
    return articlesInfoFabric(`/${limit}`);
}


/**
 * Fetches an article by its ID from the API.
 * @param {number} id - The ID of the article to retrieve.
 * @returns {Promise<Article>} A promise that resolves to an Article object representing the article with the given ID.
 */
export function findArticleById(id) {
    return articleFabric(`/id/${id}`);
}