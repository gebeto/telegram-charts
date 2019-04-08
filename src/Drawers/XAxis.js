const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


function memo(fun) {
	const memos = {};
	return function memoized(arg) {
		if (!memos[arg]) {
			memos[arg] = fun(arg);
		}
		return memos[arg];
	}
}

function _dateString(timestamp) {
	const date = new Date(timestamp);
	return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
}

const dateString = memo(_dateString);

export default function XAxis({ control, ctx, normX, normY, colors }) {
	return function drawXAxis(items, x, y, width, height) {
		// const range = Math.round((control.range[1] - control.range[0]) * 10);
		// console.log(range);
		
		ctx.save();

		ctx.fillStyle = '#182D3B';
		ctx.textAlign = 'center';
		ctx.globalAlpha = 0.5;

		for (let i = 1; i < items.length; i+=5) {
			ctx.fillText(dateString(items[i]), x + normX(i) * width, y + height + 14);
		}

		ctx.restore();
	}
}