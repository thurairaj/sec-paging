"use client"
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navigation = () => {

	const currentPath = usePathname();

	return (
		<div className={"container"}>
			<div >
				<Link href={`/`}>
					<h1>Company Name</h1>
				</Link>
			</div>
			<div className={"sub-container"}>
				<Link href={`/home`}>
					<h2 className={currentPath === "/home" ? "active": ""}>Home</h2>
				</Link>
				<Link href={`/dashboard`}>
					<h2 className={currentPath === "/dashboard" ? "active": ""}>Dashboard</h2>
				</Link>
				<Link href={`/blog`}>
					<h2 className={currentPath === "/blog" ? "active": ""}>Blog</h2>
				</Link>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 5px;
					margin-bottom: 20px;
				}
				
				.sub-container {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding: 5px 10px;
				}
				
				h2 {
					padding: 10px;
				}
				
				h2.active {
					background-color: lightcoral;
				}
				
				h2:hover {
					color:black;
					background-color: white;
					border-radius: 5px;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default Navigation;
