<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$title = get_field('services_title');

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'services';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>

<?php if (have_rows("services")) : ?>
	<section class="<?php echo esc_attr($class_name); ?>">
		<!-- <div class="container"> -->
			<?php if ($title) : ?>
				<h3><?php echo force_balance_tags($title); ?></h3>
			<?php endif; ?>
			<div class="services-items item">
				<?php while (have_rows("services")) : the_row();
					$image = get_sub_field('services_image');
					$subtitle = get_sub_field('services_subtitle');
					$icon_video = get_sub_field("services_icon_video");
				?>
					<div class="item-elem <?php if ($icon_video) echo 'item-elem_video' ?>">
						<?php if ($image) : ?>
							<div class="item-elem_image">
								<?php echo wp_get_attachment_image($image, 'full'); ?>
							</div>
						<?php endif; ?>
						<?php if ($subtitle) : ?>
							<h5><?php echo force_balance_tags($subtitle); ?></h5>
						<?php endif; ?>
					</div>
				<?php endwhile; ?>
			</div>
		<!-- </div> -->
	</section>
<?php endif; ?>