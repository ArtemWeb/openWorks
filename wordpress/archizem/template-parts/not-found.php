<?php
/**
 * Not found template part.
 */

?>
<div class="post">
	<div class="head">
		<h1><?php esc_html_e( 'Not Found', 'base' ); ?></h1>
	</div>
	<div class="content">
		<p><?php esc_html_e( 'Sorry, but you are looking for something that isn\'t here.', 'base' ); ?></p>
		<?php get_search_form(); ?>
	</div>
</div>
