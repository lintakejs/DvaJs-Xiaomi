import dva from 'dva';
import { Toast } from 'antd-mobile';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
	onError(e){
		Toast.info(e.message);
	}
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// Moved to router.js
app.model(require("./models/app"));
app.model(require("./models/appView"));
app.model(require("./models/recommend"));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
