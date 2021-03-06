/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 * Things like site title, description, and background color changes.
 * 
 * @since   02/10/2012
 */

( function( $ ) {
	var api = wp.customize;
	
	// Site title and description.
	api( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '#header h1 a, #footer a.site-name' ).html( to );
		} );
	} );
	
	api( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '#header p.site-description' ).html( to );
		} );
	} );
	
} )( jQuery );