import { init } from '@sentry/react-native';
import { Dedupe, ExtraErrorData } from '@sentry/integrations';

const METAMASK_ENVIRONMENT = process.env['METAMASK_ENVIRONMENT']; // eslint-disable-line dot-notation
// const SENTRY_DSN = 'https://ae39e4b08d464bba9fbf121c85ccfca0@sentry.io/2299799'
const TEST_SENTRY_DSN = 'https://1cb0be9b81554de381b65ffa80874924@sentry.io/2453959';

// Setup sentry remote error reporting
export default function setupSentry() {
	let environment = METAMASK_ENVIRONMENT;
	if (__DEV__) {
		environment = 'development';
	}
	init({
		dsn: TEST_SENTRY_DSN,
		debug: __DEV__,
		environment,
		integrations: [new Dedupe(), new ExtraErrorData()]
	});
}
