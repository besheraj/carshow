export default function asyncWrapper(fn) {
	return function handler(req, res, next) {
		return Promise.resolve(fn(req, res, next)).catch(next);
	};
}