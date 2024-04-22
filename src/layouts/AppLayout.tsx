import React, { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex flex-col h-[667px] border rounded-xl overflow-hidden'>
			{children}
		</div>
	);
};

export default AppLayout;
