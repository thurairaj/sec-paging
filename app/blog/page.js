import React from 'react';
import Link from "next/link";
import Navigation from "@/component/Navigation";

const Blog = () => {
	const items = [1,2,3]
	return (
		<div>
			<Navigation></Navigation>
			<Link href={'/blog/recent'}>Go to recent blog</Link>
			<ul>
			{
				items.map((item) =>
					<li key={item}><Link  href={`/blog/${item}`}>{item} Blog</Link></li>
				)
			}
			</ul>
		</div>
	);
};

export default Blog;