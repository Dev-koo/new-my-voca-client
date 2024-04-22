import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Setting from '../pages/Setting';
import { useNavigate } from 'react-router-dom';

type Props = {};

const MultipleChoice = ({}: Props) => {
	const navigate = useNavigate();
	// 뒤로가기 버튼을 누르면 이전 페이지로 이동 하는 함수
	const handleClick = () => {
		navigate(-1);
	};

	return (
		<AppLayout>
			<header className='grid grid-cols-3 grid-rows-1 px-5 h-[44px] items-center'>
				<ChevronLeft className='hover:cursor-pointer' onClick={handleClick} />
				<h2 className='text-xl text-center '>사지선다</h2>
				<button className='text-right hover:cursor-pointer'>시작하기</button>
			</header>
			<Setting />
		</AppLayout>
	);
};

export default MultipleChoice;
