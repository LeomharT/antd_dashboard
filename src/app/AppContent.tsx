import { Button, Layout } from 'antd';

type AppContentProps = {
	collapsed?: boolean;
};

export default function AppContent(props: AppContentProps) {
	return (
		<Layout.Content data-collapsed={props.collapsed}>
			<Button>Hello World</Button>
			<div style={{ height: '200vh' }}></div>
		</Layout.Content>
	);
}
