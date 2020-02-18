interface IRestError {
    message: string;
    status: number;
    error: string;
}

const BadRequestError = (message: string):IRestError  => {
    return {
		message: message,
		status: 400,
		error: "bad_request",
	}
}

export default BadRequestError;