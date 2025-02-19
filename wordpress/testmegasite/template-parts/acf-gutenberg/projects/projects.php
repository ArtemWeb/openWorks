<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$title = get_field('projects_title');
$image = get_field('projects_image');
$link = get_field('projects_link');

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'projects';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>

<?php if ($title || $image || $link) : ?>
	<section class="<?php echo esc_attr($class_name); ?>">
		<div class="container">
			<?php if ($title) : ?>
				<h3><?php echo force_balance_tags($title); ?></h3>
			<?php endif; ?>

			<?php if ($image) : ?>
				<div class="projects-image">
					<?php echo wp_get_attachment_image($image, 'full'); ?>
				</div>
			<?php endif; ?>
			<?php if ($link) echo the_acf_button($link, ['btn', 'btn-full']); ?>
		</div>
	</section>
<?php endif; ?>