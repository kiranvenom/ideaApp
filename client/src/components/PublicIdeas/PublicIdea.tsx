import React from 'react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import Ideas from '../Ideas/Ideas';

type Props = {};

const PublicIdea = (props: Props) => {
	return (
		<>
			<Select>
				<SelectTrigger className='w-[140px]'>
					<SelectValue placeholder='Sort By' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='trending'>Trending</SelectItem>
					<SelectItem value='topVoted'>Top Voted</SelectItem>
					<SelectItem value='mostRecent'>Most Recent</SelectItem>
				</SelectContent>
			</Select>
			<ScrollArea className='h-[60dvh] rounded-md border p-4 mt-2'>
				<div className='grid grid-cols-3 gap-4'>
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
					<Ideas />
				</div>
			</ScrollArea>
		</>
	);
};

export default PublicIdea;
