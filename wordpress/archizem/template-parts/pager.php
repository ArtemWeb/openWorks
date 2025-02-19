<?php
/**
 * Pagination template part.
 */

the_posts_pagination( [
	'prev_text' => esc_html__( 'Previous page', 'base' ),
	'next_text' => esc_html__( 'Next page', 'base' ),
] );
