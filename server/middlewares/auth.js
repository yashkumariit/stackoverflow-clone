import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		let decodeData = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decodeData?.id;

		next();
	} catch (error) {
		console.log("error in middleware auth at middleware");
		console.log(error);
	}
};

export default auth;
