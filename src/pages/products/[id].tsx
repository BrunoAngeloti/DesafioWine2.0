import ReactStars from 'react-stars'

import React, {  useEffect, useState  } from 'react'

import { GetServerSideProps } from "next";

import Head from 'next/head'
import Router from 'next/router'

import { useDispatch } from 'react-redux';

import { addToCart, convertPricesWine } from '../../Shared/utils/index';
import { selectorItemsFiltreded } from '../../Data/Redux/ducks/items/selector';

import { 
	ContainerWineInfo, 
	ContentWineInfo, 
	LeftContent, 
	RightContent, 
	LocationWine, 
	DetailsWine, 
	PriceWine, 
	CommentsWine,
	Button,
	AddOnCart,
	FooterMobile,
} from '../../Shared/styles/pages/Products/style'

interface IProductsProps {
	id: number;
}

export default function Products(props:IProductsProps){
	const [qtd, setQtd] = useState(1);
	const [loading, setLoading] = useState(true)

	let wine = selectorItemsFiltreded(props.id)

	const { price, priceMember, priceNonMember, priceMemberToString } = convertPricesWine(wine);

	const [real, centavo] = priceMemberToString ?? []

	const dispatch = useDispatch()
	
	useEffect(()=>{
	   if(!wine) Router.push(`/`)
	   setLoading(false)
	}, [])

	return (
		<ContainerWineInfo>
			{!loading &&
			<>
				<Head>
					<title>Wine | {wine?.name}</title>
				</Head>
				<header onClick={()=> {Router.back()}} >
					<img width="100%" height="100%" src="/back.svg" alt="back arrow"/>
					<span>Voltar</span>
				</header>
				<ContentWineInfo>
					<LeftContent>
						<img width="100%" height="100%" src={wine?.image} alt={`wine bottle ${wine?.image}`} />
					</LeftContent>
					<RightContent>
						<LocationWine>
							<h4>Vinhos</h4>
							<img width="100%" height="100%" src="/arrowRight.svg" alt="right arrow" />
							<h4>{wine?.country}</h4>
							<img width="100%" height="100%" src="/arrowRight.svg" alt="right arrow" />
							<h4>{wine?.region}</h4>
						</LocationWine>
						<DetailsWine>
							<h1>{wine?.name}</h1>
							<div>
								<img width="100%" height="100%" src={wine?.flag} alt="country flag" />
								<p>{wine?.country}</p> 
								<p>{wine?.type}</p> 
								<p>{wine?.classification}</p>
								<p>{wine?.volume}</p>
								<div>
									<ReactStars
										count={5}
										value={wine?.rating}
										size={20}                          
										color2={'#ffd700'} 
										edit={false}
									/>
								</div>
								
								<p>({wine?.avaliations})</p>
							</div>
						</DetailsWine>
						<img width="100%" height="100%" src={wine?.image} alt={`wine bottle ${wine?.image}`} />
						<PriceWine>
							{                    
								<h2>
									<span>R$</span>
									{real ?? 0},
									<span>{centavo ?? 0}</span>
								</h2>
							}
							<h3>NÃO SÓCIO {priceNonMember}/UN.</h3>
						</PriceWine>
						<CommentsWine>
							<h3>Comentário do Sommelier</h3>
							<p>{wine?.sommelierComment}</p>
						</CommentsWine>
						<AddOnCart>
							<div>
								<button disabled={qtd === 1} style={qtd === 1 ? {color: 'rgba(255, 255, 255, 0.2)'} : undefined} onClick={()=>setQtd(qtd - 1)}>-</button>
								<span>{qtd}</span>
								<button id="ButtonAddWine" onClick={() => setQtd(qtd + 1)}>+</button>
							</div>
							<Button id="ButtonAddWineOnCart" onClick={() => addToCart({ qtdRequested: qtd, dispatch, wine: wine })}>Adicionar</Button>
						</AddOnCart>               
					</RightContent>
				</ContentWineInfo>
				<FooterMobile>
					<section>
						<span>{wine?.discount}% OFF</span>
						<h2>{price}</h2>
						<h1><strong>{priceMember}</strong></h1>
						<h3>PREÇO NÃO-SÓCIO {priceNonMember}</h3>
					</section>
					
					<Button id="ButtonMobileAddWineOnCart" onClick={() => addToCart({ qtdRequested: 1, dispatch, wine: wine })}>Adicionar</Button>
				</FooterMobile>
			</>
			}
		</ContainerWineInfo> 
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.query.id;
	return {
		props: {
			id
		}
	}
}
