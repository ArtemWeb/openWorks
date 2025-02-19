<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function body_classes(array $classes ): array
{
	
	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'body_classes' );

// custom the_excerpt 
function custom_excerpt($length = 20) {
	$excerpt = get_the_excerpt();
	$excerpt = mb_substr($excerpt, 0, $length);
	if (mb_strlen($excerpt) >= $length) {
			$excerpt .= '...';
	}
	return $excerpt;
}
