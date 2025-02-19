<?php
/**
 * WordPress Nav Menus.
 *
 */

add_action( 'after_setup_theme', function() {
	register_nav_menus(
		array(
			'primary' => esc_html__( 'Primary Navigation', 'testmegasite' ),
			'footer-menu' => esc_html__( 'Footer Navigation', 'testmegasite' ),
			'footer-copyright' => esc_html__( 'Footer Copyright', 'testmegasite' ),
			'menu-lang' => esc_html__( 'Menu lang', 'testmegasite' ),
		)
	);
} );