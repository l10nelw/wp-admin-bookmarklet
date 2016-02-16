javascript:l=window.location;void(window.open(l.href.split('/').slice(0,3+(l.host=='localhost')).concat('wp-admin').join('/'),'_blank'));

javascript:
l = window.location;
void(window.open(
	l.href
		.split('/')
		.slice(0, 3 + (l.host == 'localhost')) // if localhost, slice 4 to include 1st level directory, else slice 3
		.concat('wp-admin')
		.join('/'),
	'_blank')
);
