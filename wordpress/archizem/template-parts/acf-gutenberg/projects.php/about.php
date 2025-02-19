<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$image_first = get_field('about_image_first');
$image_second = get_field('about_image_second');
$image = get_field('about_image');
$title = get_field('about_title');
$text = get_field('about_text');
$link = get_field('about_link');

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'about';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>

<?php if ($image_first || $image_second || $title || $image || $link) : ?>
	<section class="<?php echo esc_attr($class_name); ?>">
		<div class="container">
			<div class="about-item item">
				<?php if ($image_first || $image_second) : ?>
					<div class="item-images">
						<?php echo wp_get_attachment_image($image_first, 'full'); ?>
						<?php echo wp_get_attachment_image($image_second, 'full'); ?>
					</div>
				<?php endif; ?>
				<?php if ($title || $image || $link) : ?>
					<div class="item-content">
						<?php if ($title) : ?>
							<h3><?php echo escape_string_html($title); ?></h3>
						<?php endif; ?>
						<div class="item-content_text">
							<?php echo force_balance_tags(wp_kses_post($text)); ?>
						</div>

						<?php if ($link) : ?>
							<div class="item-content_link">
								<?php echo the_acf_button($link, ['btn', 'btn-line']); ?>
							</div>
						<?php endif; ?>

						<?php if ($image) : ?>
							<div class="item-content_text"></div>
							<?php echo wp_get_attachment_image($image, 'full'); ?>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>
<?php endif; ?>