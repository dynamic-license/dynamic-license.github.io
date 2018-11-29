$(document).ready ( () => {
	let params = new URL ( window.location.href ).search
		.replace ( /^\?/g, "" )
		.split ("&")
		.filter ( param => param.length > 0 )
		.map ( param => param.split ("=").map ( decodeURI ) )
		.map ( param => {
			let key = param [0]
			let value = param [1]
			$(`code:contains(${key})`).text ( value )
			$(`code:contains(${key.toLowerCase ()})`).text ( value.toLowerCase () )
			$(`code:contains(${key.toUpperCase ()})`).text ( value.toUpperCase () )
		})
	let theme = JSON.parse ( localStorage.getItem ("option-theme") )
	let fullscreen = JSON.parse ( localStorage.getItem ("option-fullscreen") )
	if ( theme ) $("body").addClass ("theme")
	if ( fullscreen ) $("body").addClass ("fullscreen")
	$(document).on ( "click", ".toggle-theme", () => {
		$("body").toggleClass ("theme")
		console.log ( $("body").hasClass ("theme") )
		localStorage.setItem (
			"option-theme",
			$("body").hasClass ("theme")
		)
	})
	$(document).on ( "click", ".toggle-fullscreen", () => {
		$("body").toggleClass ("fullscreen")
		localStorage.setItem (
			"option-fullscreen",
			$("body").hasClass ("fullscreen")
		)
	})
	$(document).on ( "click", ".toggle-github", () => {
		window.open (
			"https://github.com/dynamic-license/dynamic-license.github.io",
			"_blank"
		)
	})
	$(document).on ( "click", ".logo", () => {
		window.location = "/"
	})
})
