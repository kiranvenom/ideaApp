import React from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PublicIdea from '@/components/PublicIdeas/PublicIdea';

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<Input placeholder='🔍 Search Idea' />
			<Tabs defaultValue='publicIdeas' className='mt-4'>
				<TabsList>
					<TabsTrigger value='publicIdeas'>Public Ideas</TabsTrigger>
					<TabsTrigger value='myIdeas'>My Ideas</TabsTrigger>
				</TabsList>
				<TabsContent value='publicIdeas'>
					<PublicIdea />
				</TabsContent>
				<TabsContent value='myIdeas'>
					Change your password here.
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default page;
