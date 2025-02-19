<div class="cards-item" <?php post_class() ?>>
	<a href="<?php the_permalink(); ?>" class="cards-image"><?php the_post_thumbnail('full') ?>
		<div class="cards-text">
			<div class="cards-text_short">
				<?php echo custom_excerpt(58); ?>
			</div>
			<?php if ($text = get_field("card_project_text")) :  ?>
				<div class="cards-text_full">
					<?php echo force_balance_tags(wp_kses_post($text)); ?>
				</div>
			<?php endif; ?>
		</div>
	</a>
</div>