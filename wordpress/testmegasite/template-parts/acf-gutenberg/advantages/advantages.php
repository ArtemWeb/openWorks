<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$image = get_field('advantages_image');
$title = get_field('advantages_title');
$titletag = str_replace(array("[", "]"), array("<span>", "</span>"), $title);
$link = get_field('advantages_link');

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'advantages';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>

<?php if ($titletag || have_rows("numbers") || $image || $link) : ?>
	<section class="<?php echo esc_attr($class_name); ?>">
		<div class="container">

			<?php if ($titletag) : ?>
				<h3><?php echo force_balance_tags($titletag); ?></h3>
			<?php endif; ?>

			<?php if (have_rows("numbers") || $link || $image) : ?>
				<div class="advantages-content">
					<?php if ($image) : ?>
						<div class="advantages-image">
							<?php echo wp_get_attachment_image($image, 'full'); ?>
						</div>
					<?php endif; ?>

					<?php if (have_rows("numbers") || $link) : ?>
						<div class="advantages-block block">
							<?php if (have_rows("numbers")) : ?>
								<div class="block-info">
									<?php while (have_rows('numbers')) : the_row();
										$numbers_title = get_sub_field('numbers_title');
										$numbers_subtitle = get_sub_field('numbers_subtitle');
										$numbers_text = get_sub_field('numbers_text');
									?>
										<?php if ($numbers_subtitle || $numbers_text || $numbers_title) : ?>
											<div class="block-item">
												<?php if ($numbers_title) : ?>
													<h2><?php echo force_balance_tags($numbers_title); ?></h2>
												<?php endif; ?>
												<?php if ($numbers_subtitle) : ?>
													<h6><?php echo force_balance_tags($numbers_subtitle); ?></h6>
												<?php endif; ?>
												<?php if ($numbers_text) : ?>
													<?php echo force_balance_tags(wp_kses_post($numbers_text)); ?>
												<?php endif; ?>
											</div>
										<?php endif; ?>
									<?php endwhile; ?>
								</div>
							<?php endif; ?>

							<?php if ($link) : ?>
								<?php echo the_acf_button($link, ['btn', 'btn-line']); ?>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>