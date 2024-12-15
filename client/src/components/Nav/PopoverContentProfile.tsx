import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { PiSignIn } from 'react-icons/pi';
import { FiUserPlus } from 'react-icons/fi';

type Props = {};

const PopoverContentProfile = (props: Props) => {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<h2>Guest User</h2>
			</div>
			<Separator />
			<div className='mt-2'>
				<div className='flex items-center p-1 gap-2 hover:bg-slate-200 hover:rounded-md'>
					<PiSignIn />
					Sign In
				</div>
				<div className='flex items-center p-1 gap-2 hover:bg-slate-200 hover:rounded-md'>
					<FiUserPlus />
					Sign Up
				</div>
			</div>
		</div>
	);
};

export default PopoverContentProfile;
