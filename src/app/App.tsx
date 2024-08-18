import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { App as AntdApp, ConfigProvider, Layout, theme } from 'antd';
import Login from '../page/Login';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppSider from './AppSider';

export default function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;

	const token = localStorage.getItem('token');

	const [algorithm, setAlgorithm] = useLocalStorage<'light' | 'dark'>({
		key: 'theme',
		defaultValue: 'light',
	});

	const [opened, { toggle }] = useDisclosure();

	if (!token) return <Login />;

	return (
		<AntdApp>
			<ConfigProvider
				theme={{
					cssVar: true,
					algorithm: algorithm === 'light' ? defaultAlgorithm : darkAlgorithm,
				}}
			>
				<Layout>
					<AppHeader
						onToggleTheme={() => {
							setAlgorithm((prev) => (prev === 'dark' ? 'light' : 'dark'));
						}}
					/>
					<Layout hasSider style={{ paddingTop: 64, position: 'relative' }}>
						<AppSider onToggle={toggle} collapsed={opened} />
						<AppContent collapsed={opened} />
					</Layout>
				</Layout>
			</ConfigProvider>
		</AntdApp>
	);
}
