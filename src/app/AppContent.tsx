import { Layout } from 'antd';
import Analysis from '../page/Analysis';

type AppContentProps = {
	collapsed?: boolean;
};

export default function AppContent(props: AppContentProps) {
	return (
		<Layout.Content data-collapsed={props.collapsed}>
			<Analysis />
		</Layout.Content>
	);
}
