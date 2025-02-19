<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

get_header();
?>
	<div class="container">
		<div class="content 1">
			<header class="page-header">
				<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
				?>
			</header><!-- .page-header -->
			<?php get_template_part( 'template-parts/loop' ); ?>
		</div>
	</div>
<?php
get_footer();
