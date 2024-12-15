import React from 'react';
import { Button } from '../ui/button';
import { IoMdAdd } from 'react-icons/io';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import AddIdeas from '../AddIdeas/AddIdeas';

type Props = {};

const AddIdea = (props: Props) => {
	return (
		<>
			<div className='flex flex-row-reverse justify-between my-4'>
				<Dialog>
					<DialogTrigger>
						<div className='flex items-center gap-2 bg-black text-white py-2 pl-2 pr-2 rounded-lg'>
							<IoMdAdd />
							Add Idea
						</div>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add New Idea</DialogTitle>
							<AddIdeas />
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
};

export default AddIdea;
