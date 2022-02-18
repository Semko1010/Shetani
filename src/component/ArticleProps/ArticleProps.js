import "./ArticleProps.css";
import Article from "../Article/Article";
import StartAction from "../StartAction/StartAction";
import data from "../Api/Api.json";

const ArticleProps = () => {
	return (
		<div>
			<StartAction />

			<section className='articleSectionGrid'>
				{data.map(item => (
					<Article
						salesRate={item.salesRate}
						firstSales={item.firstSales}
						perWeek={item.perWeek}
						returnRate={item.returnRate}
						price={item.price}
						tshirtNummer={item.tshirtNummer}
						allStatus={item.allStatus}
						salesStatus={item.salesStatus}
						stStatus={item.stStatus}
						perWeekStatus={item.perWeekStatus}
						ReturnRateStatus={item.ReturnRateStatus}
					/>
				))}
			</section>
		</div>
	);
};

export default ArticleProps;
