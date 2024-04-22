import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

type Props = {};

const Setting = ({}: Props) => {
	return (
		<>
			<div className='p-5 hover:cursor-pointer mb-5'>
				<div className='flex justify-between'>
					<div>학습할 그룹</div>
					<div className='flex items-center text-neutral-500'>
						<p>그룹을 선택해 주세요</p>
						<ChevronRight />
					</div>
				</div>
			</div>

			<div className='p-5 hover:cursor-pointer mb-5'>
				<div className='flex justify-between'>
					<div>문제 수</div>
					<div className='flex items-center text-neutral-500'>
						<p>0</p>
						<ChevronRight />
					</div>
				</div>
			</div>

			<div className='p-5 hover:cursor-pointer mb-5'>
				<div className='flex justify-between'>
					<div>제외 레벨</div>
					<div className='flex items-center text-neutral-500'>
						<p>없음</p>
						<ChevronRight />
					</div>
				</div>
			</div>
		</>
	);
};

export default Setting;
