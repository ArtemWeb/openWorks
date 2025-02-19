<?php
$footer_logo = get_field('footer_logo', 'options');
$copyright   = get_field('copyright', 'options');
$designed    = get_field('designed', 'options');
$logo = get_field("footer_logo", "option");
?>


<footer class="footer">

	<div class="footer-top">
		<div class="container row">
			<?php if ($logo) : ?>
				<a href="<?php echo esc_url(home_url('/')) ?>" class="footer-logo">
					<?php echo wp_get_attachment_image($logo, 'full'); ?>
				</a>
			<?php endif; ?>

			<?php if (has_nav_menu("footer-menu"))
				wp_nav_menu(
					array(
						'container'      => false,
						'menu_class'     => 'footer-nav',
						'theme_location' => 'footer-menu',
					)
				); ?>
			<?php get_template_part('template-parts/social-links') ?>
		</div>
	</div>
	<div class="footer-copyright">
		<div class="container row">
			<span class="copyright"><?php echo esc_html_e("© ") ?><?php echo gmdate('Y'); ?><?php echo esc_html_e(" All rights reserved") ?></span>
			<?php if (has_nav_menu("footer-copyright"))
				wp_nav_menu(
					array(
						'container'      => false,
						'menu_class'     => 'footer-nav',
						'theme_location' => 'footer-copyright',
					)
				); ?>
			<span class="developed"><?php echo esc_html_e(" Website developed:") ?><a href='#!'> TestWork<b>.</b> </a> </span>

		</div>
	</div>
</footer>