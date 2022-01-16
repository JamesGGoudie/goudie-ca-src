export interface KeyValueBuilderProps {
	keyValuePairs?: Record<string, any>;
	onKeyValuePairsUpdate: (keyValuePairs: Record<string, any>) => void;
}
