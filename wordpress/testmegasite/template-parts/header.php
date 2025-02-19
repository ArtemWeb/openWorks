<?php

$logo = get_field("header_logo", "option");
$phone = get_field("header_phone", "option");
$phone_first = get_field("header__phone", "option");
?>

<header class="header <?php if(!is_front_page()) echo "header-shadow"; ?>">
	<div class="container">
		<div class="header-row">
		<button type="button" class="nav-opener" aria-label="<?php esc_html_e( 'Toggle navigation', 'sro' ); ?>"><span></span>
		</button>
			<?php if (has_nav_menu('primary')) {
				wp_nav_menu([
					'container'      => false,
					'theme_location' => 'primary',
					'menu_class'     => 'header-nav',
					'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
				]);
			} ?>

			<?php if ($logo) : ?>
				<a href="<?php echo esc_url(home_url('/')) ?>" class="header-logo">
					<?php echo wp_get_attachment_image($logo, 'full'); ?>
				</a>
			<?php endif; ?>

			<div class="header-row_right">
				<?php if (has_nav_menu("menu-lang"))
					wp_nav_menu(
						array(
							'menu_class' => 'lang',
							'theme_location' => 'menu-lang',
						)
					);
				?>
				<?php if (have_rows("header_phones", "option")) : ?>
					<div class="header-phone">
						<a href="tel:<?php echo clean_phone($phone_first); ?>"><?php echo esc_html($phone_first); ?></a>
						<ul>
							<?php while (have_rows("header_phones", "option")) : the_row();
								$phone = get_sub_field("header_phone", "option");
							?>
								<li><a href="tel:<?php echo clean_phone($phone); ?>"><?php echo esc_html($phone); ?></a></li>
							<?php endwhile; ?>
						</ul>
					</div>
				<?php endif; ?>
			</div>


		</div>
	</div>
</header>