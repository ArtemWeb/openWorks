<?php

/**
 * Template Name: Page Projects
 *
 * @package ThemeName
 */


get_header();

$subtitle = get_field("projects_subtitle", 'options');
?>

<div class="title">
	<div class="container">
		<div class="breadcrumbs">
			<?php if (function_exists('bcn_display')) bcn_display(); ?>
		</div>
		<h2><?php echo post_type_archive_title('', false); ?></h2>
		<div class="title-subtitle"><?php echo esc_html($subtitle); ?></div>
	</div>
</div>


<div class="filter">
	<div class="container">

		<nav class="filter-nav">
			<ul class="projects-nav">
				<?php
				$terms = get_terms(
					array(
						'taxonomy'   => 'projects-category',
						'posts_per_page'  => -1,
						'post_status' 		=> 'publish',
						'orderby'         => 'post_date',
					)
				);

				if (!empty($terms) && is_array($terms)) {
					foreach ($terms as $term) { ?>

						<li class="projects-item">
							<button class="projects-item_btn <?php if ($term->slug === 'all') echo 'is-active'; ?>" type="button" data-filter="<?php echo esc_attr($term->slug); ?>">
								<?php echo esc_html($term->name); ?>
							</button>
						</li>

				<?php
					}
				}
				?>
			</ul>
		</nav>
		<div class="cards">
			<div class="cards-items">
				<?php
				$projects_query = new WP_Query(array(
					'post_type' => 'projects',
					'posts_per_page' => -1,
				));

				if ($projects_query->have_posts()) :
					while ($projects_query->have_posts()) : $projects_query->the_post(); ?>
						<?php
						$project_category = get_the_terms(get_the_ID(), 'projects-category');
						$locations = array();

						if (is_array($project_category) && !empty($project_category)) {
							foreach ($project_category as $category) {
								if (is_object($category) && isset($category->slug)) {
									$locations[] = $category->slug;
								}
							}
						}

						$locations = implode(' ', $locations);
						?>
						<div class="cards-item" <?php post_class() ?> data-category="<?php echo esc_attr($locations); ?>">
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
				<?php endwhile;
					wp_reset_postdata();
				else :
					echo '<p>' . __('No projects found') . '</p>';
				endif;
				?>
			</div>
		</div>
	</div>
</div>


<?php
get_footer();
