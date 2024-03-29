import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { Title } from '../ui'
import { StackSlider } from './StackSlider'

export const Stack = () => {
	return (
		<section className='relative w-full pb-[100px] xq:pb-[250px]'>
			<Blink
				color='#211240'
				className='-left-[240px] -top-[140px] opacity-[74%]'
				width='490px'
				height='490px'
			/>
			<Blink
				color='#4D1A65'
				className='-right-[240px] -top-[140px] opacity-[33%]'
				width='490px'
				height='490px'
			/>
			<Container>
				<Title variant='h3' className='mb-[20px] sm:mb-[26px]'>
					Your Future Tech Stack
				</Title>
				<StackSlider />
			</Container>
		</section>
	)
}
