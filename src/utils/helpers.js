export function formatDate(timestamp) {
	const date = new Date(timestamp);
	const t = date.toLocaleTimeString('en-US');

	return t.substr(0, 5) + t.slice(-2) + ' | ' + date.toLocaleDateString();
}
