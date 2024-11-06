import { Layout, Typography } from 'antd';

type AppContentProps = {
	collapsed?: boolean;
};

export default function AppContent(props: AppContentProps) {
	return (
		<Layout.Content data-collapsed={props.collapsed}>
			<Typography.Title level={1}>Hello World</Typography.Title>
		</Layout.Content>
	);
}
