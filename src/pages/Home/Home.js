import React, { useContext, useState, useRef, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { HashLoader, DotLoader } from 'react-spinners';
import ClampLines from 'react-clamp-lines';

import api from '../../utils/api';
import shuffle from '../../utils/shuffle';
import { Chapters } from '../../constants/constants';
import Header from '../../components/Header/Header';
import ExpansiveCards from '../../components/ExpansiveCards/ExpansiveCards';
import Footer from '../../components/Footer/Footer';
import DimensionContext from '../../context/dimension';
import './Home.css';

import IEEEdesc from '../../assets/mainImage.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';

function Home() {
	const { width, height } = useContext(DimensionContext);

	const refProjects = useRef();
	const refMembers = useRef();

	const [projects, setProjects] = useState([]);
	const [dones, setDones] = useState([]);
	const [members, setMembers] = useState([]);
	const [expandProject, isExpandProject] = useState(false);
	const [expandMember, isExpandMember] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const response = await Promise.all([
				api.get('/project'),
				api.get('/done'),
				api.get('/member'),
			]);

			setProjects(response[0].data);
			setDones(sliceDones(response[1].data));
			setMembers(shuffle(response[2].data));
		}

		fetchData();
	}, []);

	function sliceDones(dones) {
		const slicedDones = [];

		let cont = 0;
		let buffer = {};
		dones.map((element, index) => {
			if (cont === 0) {
				buffer.title1 = element.title;
				buffer.description1 = element.description;
				cont++;
				if (index + 1 === dones.length) {
					slicedDones.push(buffer);
				}
			} else {
				buffer.title2 = element.title;
				buffer.description2 = element.description;
				slicedDones.push(buffer);
				buffer = {};
				cont = 0;
			}

			return true;
		});

		return slicedDones;
	}

	function sliceChapters() {
		const slicedChapters = [];

		let cont = 0;
		let buffer = {};
		Chapters.map((element, index) => {
			if (cont === 0) {
				buffer.title1 = element.title;
				buffer.description1 = element.description;
				cont++;
				if (index + 1 === Chapters.length) {
					slicedChapters.push(buffer);
				}
			} else {
				buffer.title2 = element.title;
				buffer.description2 = element.description;
				slicedChapters.push(buffer);
				buffer = {};
				cont = 0;
			}

			return true;
		});

		return slicedChapters;
	}

	function arrowCarrousel(next, clickHander) {
		const arrowStyles = {
			position: 'absolute',
			zIndex: 2,
			top: height / 4,
			width: height / 15,
			height: width / 12,
			cursor: 'pointer',
		};

		const leftRight = next ? { right: 15 } : { left: 15 };
		return (
			<input
				className="arrows"
				type="image"
				src={next ? arrowRight : arrowLeft}
				alt="setas"
				style={{ ...arrowStyles, ...leftRight }}
				onClick={clickHander}
			/>
		);
	}

	//const newDones = sliceDones()
	const newChapters = sliceChapters();

	return (
		<div className="container">
			<Header />
			<div className="page">
				<div className="pageFlex">
					<div className="bigCard">
						<img className="bigCardImg" src={IEEEdesc} alt="ieeedesc" />
					</div>
					<div className="smallCardsView">
						<button
							className="btn"
							onClick={() =>
								refProjects.current.scrollIntoView({ behavior: 'smooth' })
							}
						>
							<div className="smallCard">
								{projects.length === 0 ? (
									<HashLoader
										size={height / 12}
										color={'#344ea9'}
										loading={true}
									/>
								) : (
									<React.Fragment>
										<p className="smallCardText">Projetos em</p>
										<p className="smallCardText">andamento</p>
										<p id="smallCardNumber" className="smallCardText">
											{projects.length}
										</p>
									</React.Fragment>
								)}
							</div>
						</button>
						<button
							className="btn"
							onClick={() =>
								refMembers.current.scrollIntoView({ behavior: 'smooth' })
							}
						>
							<div className="smallCard">
								{projects.length === 0 ? (
									<HashLoader
										size={height / 12}
										color={'#344ea9'}
										loading={true}
									/>
								) : (
									<React.Fragment>
										<p className="smallCardText">Membros</p>
										<p id="smallCardNumber" className="smallCardText">
											{members.length}
										</p>
									</React.Fragment>
								)}
							</div>
						</button>
					</div>
				</div>
			</div>

			{projects.length === 0 ? (
				<div
					style={{
						height: (height * 7) / 8 - 200,
						width,
						backgroundColor: '#292e56',
						display: 'flex',
						justifyContent: 'center',
						paddingTop: height * (7 / 16) - height / 14,
					}}
				>
					<DotLoader size={height / 7} color={'#f1f4fd'} loading={true} />
				</div>
			) : (
				<React.Fragment>
					<div className="page">
						<div className="pageProject">
							<div className="projectTopView">
								<p className="doneTitle">FEITOS</p>
							</div>
							<Carousel
								width={width * 0.9}
								height={height * (7 / 8)}
								showStatus={false}
								showThumbs={false}
								showArrows={false}
								renderArrowNext={
									width > 768
										? clickHander => arrowCarrousel(true, clickHander)
										: () => null
								}
								renderArrowPrev={
									width > 768
										? clickHander => arrowCarrousel(false, clickHander)
										: () => null
								}
							>
								{dones.map((element, index) => (
									<React.Fragment>
										<div key={index} className="carouselSlideView">
											<div
												className="blackCard"
												style={{ backgroundColor: '#292E56' }}
												title={element.description1}
											>
												<h1 className="blackCardTitle">{element.title1}</h1>
												<ClampLines
													text={element.description1}
													id="carouselText1"
													lines={'10'}
													ellipsis="..."
													className="blackCardText"
													buttons={false}
												/>
											</div>
											{width > 768 ? (
												<div
													className="blackCard"
													style={{ backgroundColor: '#292E56' }}
													title={element.description2}
												>
													<h1 className="blackCardTitle">{element.title2}</h1>
													<ClampLines
														text={element.description2}
														id="carouselText2"
														lines={'10'}
														ellipsis="..."
														className="blackCardText"
														buttons={false}
													/>
												</div>
											) : null}
										</div>
									</React.Fragment>
								))}
							</Carousel>
						</div>
					</div>

					<ExpansiveCards
						ref={refProjects}
						nameItens="PROJETOS"
						itens={projects}
						expand={expandProject}
						onClick={() => {
							refProjects.current.scrollIntoView({ behavior: 'instant' });
							isExpandProject(!expandProject);
						}}
						itensPerLine={width > 768 ? 3 : 2}
						itensWithoutExpansive={6}
					/>

					<div className="page">
						<div className="pageProject">
							<div
								className="projectTopView"
								style={{ height: height / 12, width: width }}
							>
								<p className="doneTitle">ÁREAS DE ATUAÇÃO</p>
							</div>
							<Carousel
								width={width * 0.9}
								height={height * (7 / 8)}
								showStatus={false}
								showThumbs={false}
								showArrows={false}
								renderArrowNext={
									width > 768
										? clickHander => arrowCarrousel(true, clickHander)
										: () => null
								}
								renderArrowPrev={
									width > 768
										? clickHander => arrowCarrousel(false, clickHander)
										: () => null
								}
							>
								{newChapters.map((element, index) => (
									<React.Fragment>
										<div key={index} className="carouselSlideView">
											<div
												className="blackCard"
												style={{ backgroundColor: '#292E56' }}
											>
												<h1 className="blackCardTitle">{element.title1}</h1>
												<p className="blackCardText">{element.description1}</p>
											</div>
											{width > 768 ? (
												<div
													className="blackCard"
													style={{ backgroundColor: '#292E56' }}
												>
													<h1 className="blackCardTitle">{element.title2}</h1>
													<p className="blackCardText">
														{element.description2}
													</p>
												</div>
											) : null}
										</div>
									</React.Fragment>
								))}
							</Carousel>
						</div>
					</div>

					<ExpansiveCards
						ref={refMembers}
						nameItens="MEMBROS"
						itens={members}
						expand={expandMember}
						onClick={() => {
							refMembers.current.scrollIntoView({ behavior: 'instant' });
							isExpandMember(!expandMember);
						}}
						itensPerLine={width > 768 ? 3 : 2}
						itensWithoutExpansive={6}
					/>
				</React.Fragment>
			)}
			<Footer />
		</div>
	);
}

export default Home;
