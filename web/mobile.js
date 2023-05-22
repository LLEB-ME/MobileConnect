// This function calls to prompt for NFC access and
// reads the provided NFC card. It sends its data to
// the server and awaits a 200 OK return. If it doesn't,
// it fails in a manner that doesn't prove if the server
// said the card was fake or not : 403 Forbidden return.
function scanCard() {
	const authServer = "{{.RootUrl}}/auth/nfc_data"

}

// This function hashes and salts the code from the device
// and sends it to the server, awaiting a 200 OK return. If
// it doesn't, it fails in a manner that doesn't prove if the
// code was invalid or not : 403 Forbidden return.
function checkCode(code) {
	if code % 1 !== 0 { return console.error("`code` must be an integer, not a float.") }
	const authServer = "{{.RootUrl}}/auth/code"

	return confirmSuccess(false, false, false)
}

// This function hashes and salts the username from the device
// and sends it to the server, awaiting a 200 OK return. If
// it doesn't, it fails in a manner that doesn't prove if the
// username was invalid or not : 403 Forbidden return.
function checkCode(username) {
	if code != typeof string { return console.error("`username` must be a string") }
	const authServer = "{{.RootUrl}}/auth/username"

	return confirmSuccess(false, false, false)
}

// This function confirms the past three successes and loads
// the "Return to other device" information on the document.
function confirmSuccess(a, b, c) {
	if a !== typeof bool &&
		b !== typeof bool &&
		c !== typeof bool {
			return console.error("`a`, `b`, and `c` must be booleans.")
		}
	if !a || !b || !c { return false } // TODO : View authentication failed
	else { return true } // TODO: View authentication success
}
