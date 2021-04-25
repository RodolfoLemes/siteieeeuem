import React, { useRef, useState, useEffect, useContext } from 'react';

import { Chapters } from '../../constants/constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ExpansiveBlog from '../../components/ExpansiveBlog/ExpansiveBlog';
import DimensionContext from '../../context/dimension';

import './Blog.css';

function Blog() {
	const { width, height } = useContext(DimensionContext);
	const [folder, setFolder] = useState('IEEE');

	const handleScroll = event => {
		const position = window.pageYOffset;
		const scrollHeight = document.getElementsByClassName('Blog')[0]
			.scrollHeight;
		var current = position / scrollHeight;

		if (current < 0.1243801652892562) {
			setFolder('IEEE');
		} else if (current >= 0.1243801652892562 && current < 0.2754132231404959) {
			setFolder('RAS');
		} else if (current >= 0.2754132231404959 && current < 0.42768595041322316) {
			setFolder('PES');
		} else if (current >= 0.42768595041322316 && current < 0.5799586776859504) {
			setFolder('CS');
		} else if (current >= 0.5799586776859504 && current < 0.7456611570247934) {
			setFolder('BIOENG');
		} else {
			setFolder('');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const refIEEE = useRef();
	const refRAS = useRef();
	const refPES = useRef();
	const refCS = useRef();
	const refBIOENG = useRef();

	return (
		<div className="Blog">
			<Header />

			<div className="stickyButtons">
				<button
					onClick={() => {
						refIEEE.current.scrollIntoView({ behavior: 'smooth' });
						setFolder('IEEE');
					}}
					className={
						folder === 'IEEE'
							? 'chapterButtonsSelected'
							: 'chapterButtonsUnselected'
					}
					style={{ backgroundColor: '#344EA9' }}
				>
					IEEE
				</button>
				<button
					onClick={() => {
						refRAS.current.scrollIntoView({ behavior: 'smooth' });
						setFolder('RAS');
					}}
					className={
						folder === 'RAS'
							? 'chapterButtonsSelected'
							: 'chapterButtonsUnselected'
					}
					style={{ backgroundColor: '#F44336' }}
				>
					RAS
				</button>
				<button
					onClick={() => {
						refPES.current.scrollIntoView({ behavior: 'smooth' });
						setFolder('PES');
					}}
					className={
						folder === 'PES'
							? 'chapterButtonsSelected'
							: 'chapterButtonsUnselected'
					}
					style={{ backgroundColor: '#45EA36' }}
				>
					PES
				</button>
				<button
					onClick={() => {
						refCS.current.scrollIntoView({ behavior: 'smooth' });
						setFolder('CS');
					}}
					className={
						folder === 'CS'
							? 'chapterButtonsSelected'
							: 'chapterButtonsUnselected'
					}
					style={{ backgroundColor: '#FFC34E' }}
				>
					CS
				</button>
				<button
					onClick={() => {
						refBIOENG.current.scrollIntoView({ behavior: 'smooth' });
						setFolder('BIOENG');
					}}
					className={
						folder === 'BIOENG'
							? 'chapterButtonsSelected'
							: 'chapterButtonsUnselected'
					}
					style={{ backgroundColor: '#2D3142' }}
				>
					BIOENG
				</button>
			</div>

			<ExpansiveBlog
				ref={refIEEE}
				nameItens="IEEE"
				itens={Chapters}
				itensPerLine={width > 768 ? 2 : 1}
				itensWithoutExpansive={width > 768 ? 4 : 2}
			/>
			<ExpansiveBlog
				ref={refRAS}
				nameItens="RAS"
				itens={Chapters}
				itensPerLine={width > 768 ? 2 : 1}
				itensWithoutExpansive={width > 768 ? 4 : 2}
			/>
			<ExpansiveBlog
				ref={refPES}
				nameItens="PES"
				itens={Chapters}
				itensPerLine={width > 768 ? 2 : 1}
				itensWithoutExpansive={width > 768 ? 4 : 2}
			/>
			<ExpansiveBlog
				ref={refCS}
				nameItens="CS"
				itens={Chapters}
				itensPerLine={width > 768 ? 2 : 1}
				itensWithoutExpansive={width > 768 ? 4 : 2}
			/>
			<ExpansiveBlog
				ref={refBIOENG}
				nameItens="BIOENG"
				itens={Chapters}
				itensPerLine={width > 768 ? 2 : 1}
				itensWithoutExpansive={width > 768 ? 4 : 2}
			/>

			<Footer blogPage={true} />
		</div>
	);
}

export default Blog;
