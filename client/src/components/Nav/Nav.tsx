import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { CiDark } from 'react-icons/ci';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import PopoverContentProfile from './PopoverContentProfile';
import AddIdea from './AddIdea';

type Props = {};

const Nav = (props: Props) => {
	return (
		<>
			<nav className='flex items-center justify-between py-2'>
				<div>
					<h1>💡 Idea</h1>
					<Link
						target='_blank'
						href='https://github.com/kiranvenom'
						className=' text-sm'>
						by <span className='underline'>Kiran</span>
					</Link>
				</div>
				<div className='flex items-center gap-6'>
					<FaRegBell />
					<CiDark />
					<Popover>
						<PopoverTrigger>
							<Avatar>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverContentProfile />
						</PopoverContent>
					</Popover>
				</div>
			</nav>
			<Separator />
			<AddIdea />
		</>
	);
};

export default Nav;
