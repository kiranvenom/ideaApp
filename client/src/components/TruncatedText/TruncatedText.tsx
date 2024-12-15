'use client';
import React from 'react';

interface TruncatedTextProps {
	text: string;
	charLimit?: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
	text,
	charLimit = 165,
}) => {
	const isTruncated = text.length > charLimit;

	return (
		<div>
			<p className='break-words text-sm'>
				{isTruncated ? `${text.substring(0, charLimit)}...` : text}
			</p>
			{isTruncated && <span className='text-blue-500'>Show More</span>}
		</div>
	);
};

export default TruncatedText;
