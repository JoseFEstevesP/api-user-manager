import httpServer from '#Config/http.js';
import '#Config/env.js';
import connectDB from '#Config/db.js';
console.clear()
const bootstrap = async () => {
	try {
		await connectDB(process.env.MONGODB_URL);
		httpServer.listen(process.env.PORT, () => {
			console.log(`server in port ${process.env.PORT}`);
		});		
	} catch (error) {
		console.error('connection fails', error)
	}
};
bootstrap();
