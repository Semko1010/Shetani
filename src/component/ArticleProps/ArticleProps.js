import Article from "../Article/Article"

const ArticleProps = () => {
    return ( 
        <section className="articleSectionGrid">
        <Article
        salesRate ={"5%"}
        />
        <Article
        salesRate ={"4%"}
        />
        </section>
     );
}
 
export default ArticleProps;