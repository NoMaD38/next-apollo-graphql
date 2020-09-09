import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({ children, className, href }) => (
	<Link href={href}>
		<a className={className}>{children}</a>
	</Link>
);

export default function AppNavbar() {
	return (
		<div className="navbar-wrapper">
			<Navbar expand="lg" className="navbar-dark fj-mw9">
					<AppLink className='navbar-brand mr-3 font-weight-bold' href='/'>
            IvanRyzhov
          </AppLink>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="mr-auto">
						<AppLink href="/portfolios" className="nav-link mr-3">
							Portfolio
						</AppLink>
						<AppLink href="/forum/categories" className="nav-link mr-3">
							Forum
						</AppLink>
						<AppLink href="/cv" className="nav-link mr-3">
							CV
						</AppLink>
						<AppLink href="#" className="nav-link mr-3">
							Ask me
						</AppLink>
					</Nav>
					<Nav>
						<AppLink href="/login" className="nav-link mr-3">
							Sign In
						</AppLink>
						<AppLink href="/register" className="nav-link mr-3 btn btn-success bg-green-2 bright">
							Sign Up
						</AppLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
