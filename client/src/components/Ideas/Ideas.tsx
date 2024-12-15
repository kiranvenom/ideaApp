import React from 'react';
import { Badge } from '@/components/ui/badge';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { BsChatRightText } from 'react-icons/bs';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import TruncatedText from '../TruncatedText/TruncatedText';
import { BsGlobeCentralSouthAsia } from 'react-icons/bs';

type Props = {};

const Ideas = (props: Props) => {
	let idea = '234';

	return (
		<div className='rounded-md overflow-hidden border'>
			<div className='p-2 bg-[#E6EED6]'>
				<Badge className='bg-slate-600 mb-2 flex items-center gap-1 w-fit'>
					<BsGlobeCentralSouthAsia />Public
				</Badge>
				<div className='min-h-[100px] max-h-[100px]'>
					<TruncatedText text={idea} />
				</div>
			</div>
			<div className='bg-[#3A3E3B] px-2 text-white flex items-center justify-between'>
				<div className='flex items-center gap-4 py-2'>
					<div className='flex items-center gap-1'>
						<HiArrowNarrowUp />
						<span>20</span>
						<HiArrowNarrowUp className=' rotate-180' />
					</div>
					<div className='flex items-center gap-2'>
						<Sheet>
							<SheetTrigger>
								<BsChatRightText />
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>
										Are you absolutely sure?
									</SheetTitle>
									<SheetDescription>
										This action cannot be undone. This will
										permanently delete your account and
										remove your data from our servers.
									</SheetDescription>
								</SheetHeader>
							</SheetContent>
						</Sheet>
						<span>3</span>
					</div>
					<div className='flex items-center gap-2'>
						<MdOutlineRemoveRedEye />
						<span>2</span>
					</div>
				</div>
				<div>Kiran</div>
			</div>
		</div>
	);
};

export default Ideas;
