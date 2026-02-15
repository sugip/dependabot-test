import _ from "lodash";

export const lambdaHandler = async (): Promise<boolean> => {
	try {
		console.log("Hello, World! from sample-function1");
		console.log(`random number: ${_.random()}`);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
