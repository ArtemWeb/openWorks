<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$title = get_field('customers_title');
$map = get_field('customers_map');
$text = get_field('customers_text');
$titletag = str_replace(array("[", "]"), array("<span>", "</span>"), $title);

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'customers';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>


<section class="<?php echo esc_attr($class_name); ?>">
	<div class="container">
		<div class="customers-info">
			<div class="customers-half">
				<div class="customers-map">
					<?php if ($map) echo wp_get_attachment_image($map, 'full'); ?>
				</div>
			</div>
			<div class="customers-half order">

				<?php if ($titletag) : ?>
					<h3><?php echo force_balance_tags($titletag); ?></h3>
				<?php endif; ?>

				<?php if ($text) echo wp_kses_post($text); ?>

				<?php if (have_rows('customers')) : ?>
					<div class="customers-block">
						<div class="customers-slider swiper-container">
							<div class="swiper-wrapper">
								<?php while (have_rows('customers')) : the_row(); ?>
									<div class="customers-grid swiper-slide">
										<?php if (have_rows('customers_slide')) : ?>
											<?php while (have_rows('customers_slide')) : the_row();
												$customers_image = get_sub_field('customers_image');
											?>
												<?php if ($customers_image) : ?>
													<div class="customers-item">
														<?php echo wp_get_attachment_image($customers_image, 'full'); ?>
													</div>
												<?php endif; ?>
											<?php endwhile; ?>
										<?php endif; ?>
									</div>
								<?php endwhile; ?>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				<?php endif; ?>


			</div>
		</div>
	</div>
</section>