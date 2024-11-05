import { blue } from '@ant-design/colors';
import { LoginOutlined, MoonOutlined, SunOutlined, UserOutlined } from '@ant-design/icons';
import { useLocalStorage } from '@mantine/hooks';
import { Avatar, Button, Dropdown, Flex, Layout, Typography } from 'antd';
import logoSVG from '/antd.svg';

const { Title } = Typography;

type AppHeaderProps = {
	onToggleTheme: () => void;
};

export default function AppHeader(props: AppHeaderProps) {
	const [algorithm] = useLocalStorage<'light' | 'dark'>({
		key: 'theme',
		defaultValue: 'light',
	});

	return (
		<Layout.Header style={{ background: 'transparent' }}>
			<Flex
				vertical={false}
				justify='space-between'
				style={{ height: '100%', paddingBlock: '12px' }}
			>
				<Flex className='app-logo'>
					<img src={logoSVG} />
					<Title level={5}>Antd Dashboard v1.0</Title>
				</Flex>
				<Flex align='center' gap={16}>
					<Button
						type='text'
						icon={algorithm === 'light' ? <MoonOutlined /> : <SunOutlined />}
						onClick={props.onToggleTheme}
					/>
					<Dropdown
						menu={{
							items: [
								{
									key: 'logout',
									danger: true,
									label: 'Logout',
									icon: <LoginOutlined />,
									onClick: () => {
										localStorage.clear();
										window.location.href = '/';
									},
								},
							],
						}}
					>
						<Button type='text' style={{ height: '100%' }}>
							<Avatar style={{ backgroundColor: blue[4] }}>
								<UserOutlined />
							</Avatar>
							<Typography>Leo</Typography>
						</Button>
					</Dropdown>
				</Flex>
			</Flex>
		</Layout.Header>
	);
}
