<?php

/**
 * Example Block template.
 *
 * @param array $block The block settings and attributes.
 */

$bg = get_field('hero_bg_image');
$title = get_field('hero_title');
$link = get_field('hero_button');

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'hero';
if (!empty($block['className'])) {
	$class_name .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
	$class_name .= ' align' . $block['align'];
}
?>

<?php if ($bg || $title || $link) : ?>
	<div class="<?php echo esc_attr($class_name); ?>" style="background-image: url(<?php echo $bg ?>);">
		<div class="container">
			<?php if ($title || $link) : ?>
				<div class="hero-info">
					<?php if ($title) : ?>
						<h3><?php echo escape_string_html($title); ?></h3>
					<?php endif; ?>
					<?php if ($link) echo the_acf_button($link, ['btn', 'btn-green']); ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
<?php endif; ?>