import "./ArticleProps.css"
import Article from "../Article/Article"

const ArticleProps = () => {
    return ( 
        <section className="articleSectionGrid">
        <Article
        salesRate = {"5%"}
        firstSales = {"12"}
        perWeek = {"1.2"}
        returnRate = {"3%"}
        price = {"69,50€"}
        tshirtNummer = {"21455"}
        status = {"orange"}
        />
        <Article
        salesRate = {"4%"}
        firstSales = {"17"}
        perWeek = {"1.4"}
        returnRate = {"3%"}
        price = {"62,50€"}
        tshirtNummer = {"25335"}
        status = {"red"}
        />
        <Article
        salesRate = {"4%"}
        firstSales = {"15"}
        perWeek = {"1.1"}
        returnRate = {"4%"}
        price = {"65,50€"}
        tshirtNummer = {"24355"}
        status = {"red"}
        />
        <Article
        salesRate = {"4%"}
        firstSales = {"14"}
        perWeek = {"1.1"}
        returnRate = {"5%"}
        price = {"65,50€"}
        tshirtNummer = {"12355"}
        status = {"Orange"}
        />
        <Article
        salesRate = {"1%"}
        firstSales = {"5"}
        perWeek = {"1.5"}
        returnRate = {"2%"}
        price = {"67,50€"}
        tshirtNummer = {"21255"}
        status = {"red"}
        />
        <Article
        salesRate = {"1%"}
        firstSales = {"12"}
        perWeek = {"1.4"}
        returnRate = {"1%"}
        price = {"64,50€"}
        tshirtNummer = {"25435"}
        status = {"red"}
        />
        </section>
     );
}
 
export default ArticleProps;