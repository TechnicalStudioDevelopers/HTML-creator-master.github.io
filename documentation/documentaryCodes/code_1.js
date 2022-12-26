let requestForLastUsedPassword = new Promise(function(TSDGetUserPasswordRequestPassedExecuted, TSDGetUserPasswordRequestRejectedExecuted) {
	TSDJavaScriptAPI.getUserPassword();
	TSDGetUserPasswordRequestPassed = TSDGetUserPasswordRequestPassedExecuted;
	TSDGetUserPasswordRequestRejected = TSDGetUserPasswordRequestRejectedExecuted;
});

function getPasswordFromJava(Password) {
	if (Password == "null") {
		TSDGetUserPasswordRequestRejected(Password);
	} else {
		TSDGetUserPasswordRequestPassed(Password);
	}
}