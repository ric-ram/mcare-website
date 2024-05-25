
export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
	// logEvent(await analytics, 'config', {
	// 	page_path: url,
	// })
	window.gtag("config", GA_MEASUREMENT_ID, {
		page_path: url,
	});
};