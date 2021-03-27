import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import {
	MenuRounded,
	ShoppingCartRounded,
	AccountCircleRounded,
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from 'react-sidebar';

import DimensionContext from '../../context/dimension';
import './Header.css';

function Header() {
	const { width, height } = useContext(DimensionContext);
	const { pathname } = useLocation();

	const [sidebarOpen, setSidebarOpen] = useState(false);

	function renderSideBar() {
		return (
			<div className="headerButtonsView">
				<Button className="headerBtn" component={Link} to="/">
					<p
						className="textBtn"
						style={{ color: pathname === '/' ? '#292E56' : '#f1f4fd' }}
					>
						HOME
					</p>
				</Button>
				<Button className="headerBtn" component={Link} to="/events">
					<p
						className="textBtn"
						style={{ color: pathname === '/events' ? '#292E56' : '#f1f4fd' }}
					>
						EVENTOS
					</p>
				</Button>
				<Button className="headerBtn" component={Link} to="/store">
					<p
						className="textBtn"
						style={{ color: pathname === '/store' ? '#292E56' : '#f1f4fd' }}
					>
						LOJA
					</p>
				</Button>
				{/* <Button className='headerBtn' component={Link} to='/blog'>
            <p className='textBtn' style={{ color: pathname === '/blog' ? '#292E56' : '#f1f4fd' }}>BLOG</p>
          </Button>
          <Button className='headerBtn' component={Link} to='/archives'>
            <p className='textBtn' style={{ color: pathname === '/archives' ? '#292E56' : '#f1f4fd' }}>ARQUIVOS</p>
          </Button> */}

				<Button className="headerBtn" component={Link} to="/seel">
					<p className="textBtn" style={{ color: '#f1f4fd' }}>
						SEEL
					</p>
				</Button>

				<Button
					className="headerBtn"
					href={
						pathname === '/events' ||
						pathname === '/store' ||
						pathname === '/archives'
							? '/#footer'
							: pathname + '#footer'
					}
				>
					<p className="textBtn"> CONTATO </p>
				</Button>
			</div>
		);
	}

	if (width > 768) {
		return (
			<header className="headerView">
				<div>
					<img
						className="headerImg"
						src={require('../../assets/headerLogo.png')}
						alt="Logo Student Branch IEEE UEM"
					/>
				</div>
				<div className="headerButtonsView">
					<Button className="headerBtn" component={Link} to="/">
						<p
							className="textBtn"
							style={{ color: pathname === '/' ? '#292E56' : '#A0A8B7' }}
						>
							HOME
						</p>
					</Button>
					<Button className="headerBtn" component={Link} to="/events">
						<p
							className="textBtn"
							style={{ color: pathname === '/events' ? '#292E56' : '#A0A8B7' }}
						>
							EVENTOS
						</p>
					</Button>
					<Button className="headerBtn" component={Link} to="/store">
						<p
							className="textBtn"
							style={{ color: pathname === '/store' ? '#292E56' : '#A0A8B7' }}
						>
							LOJA
						</p>
					</Button>
					{/* <Button className='headerBtn' component={Link} to='/blog'>
            <p className='textBtn' style={{ color: pathname === '/blog' ? '#292E56' : '#A0A8B7' }}>BLOG</p>
          </Button>
					<Button className="headerBtn" component={Link} to="/archives">
						<p
							className="textBtn"
							style={{
								color: pathname === '/archives' ? '#292E56' : '#A0A8B7',
							}}
						>
							ARQUIVOS
						</p>
					</Button> */}
					<Button className="headerBtn" component={Link} to="/seel">
						<p className="textBtn" style={{ color: '#A0A8B7' }}>
							SEEL
						</p>
					</Button>
					<Button
						className="headerContactBtn"
						style={{
							borderRadius: height / 20,
							marginLeft: width * 0.03,
							backgroundColor: '#292e56',
						}}
						href={
							pathname === '/events' ||
							pathname === '/store' ||
							pathname === '/archives'
								? '/#footer'
								: pathname + '#footer'
						}
					>
						<p className="textBtn"> CONTATO </p>
					</Button>
				</div>
				<div className="headerCellphoneButtonsView">
					<Button className="headerBtn" component={Link} to="/">
						<p
							className="textBtn"
							style={{ color: pathname === '/' ? '#292E56' : '#A0A8B7' }}
						>
							HOME
						</p>
					</Button>
				</div>
				<div className="headerRight">
					<Button component={Link} to="/store">
						<ShoppingCartRounded
							style={{
								height: height / 25,
								width: height / 25,
								color: '#292E56',
							}}
						/>
					</Button>
					<Button component={Link} to="/">
						<AccountCircleRounded
							style={{
								height: height / 25,
								width: height / 25,
								color: '#292E56',
							}}
						/>
					</Button>
				</div>
			</header>
		);
	} else {
		return (
			<div className="useless">
				<Sidebar
					sidebar={renderSideBar()}
					open={sidebarOpen}
					onSetOpen={open => setSidebarOpen(open)}
					styles={{
						sidebar: { zIndex: 50, position: 'fixed', overflowY: 'hidden' },
						overlay: { backgroundColor: 'rgba(0,0,0,0)', zIndex: 40 },
					}}
					shadow={false}
				>
					<button
						onClick={() => setSidebarOpen(!sidebarOpen)}
						style={{
							position: 'fixed',
							zIndex: 60,
							width: 64,
							height: 64,
							padding: 0,
							backgroundColor: '#344EA9',
							borderWidth: 0,
						}}
					>
						<MenuRounded style={{ height: 32, width: 32, color: '#f1f4fd' }} />
					</button>
				</Sidebar>
				<header className="headerView">
					<div className="headerImgView">
						<img
							className="headerImg"
							src={require('../../assets/longLogo.png')}
							alt="Logo Student Branch IEEE UEM"
						/>
					</div>
					<div className="headerRight">
						<Button component={Link} to="/store">
							<ShoppingCartRounded
								style={{ height: 22, width: 22, color: '#f1f4fd' }}
							/>
						</Button>
						<Button component={Link} to="/">
							<AccountCircleRounded
								style={{ height: 22, width: 22, color: '#f1f4fd' }}
							/>
						</Button>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
