<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */

get_header();

$text = get_field("card_project_text")
?>

<div class="title">
	<div class="container">
		<div class="breadcrumbs">
			<?php if (function_exists('bcn_display')) bcn_display(); ?>
		</div>
		<?php the_title('<h2>', '</h2>') ?>
	</div>
</div>

<div class="post">
	<div class="container">
		<div class="post-content">
			<div class="post-image"><?php the_post_thumbnail(); ?></div>
			<div class="post-text"><?php echo force_balance_tags(wp_kses_post($text)); ?></div>
		</div>
	</div>
</div>

<?php
get_footer();
