<?php
/**
 * Single post pagination.
 */

the_post_navigation(
	array(
		'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'base' ) . '</span> <span class="nav-title">%title</span>',
		'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'base' ) . '</span> <span class="nav-title">%title</span>',
	)
);

