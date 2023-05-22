// This function fetching the locales used on
// the document. This fetches the index of
// languages, which can then be used to
// check if a language can be used without
// making another call to the server.
function fetchLocales() {
	const localeServer = "{{.RootUrl}}/locales/index.json"
}

// This function checks the `Accept-Language`
// from the HTTP client against the locale index,
// then grabs that locale to be used for further
// rendering the document.
function fetchLocale(lang) {
	if lang != typeof string { return console.error("`lang` should be a string.")}

}

// This function renders the text from the locale
// file into the document for the user. It uses the
// locale provided by fetchLocale(lang).
