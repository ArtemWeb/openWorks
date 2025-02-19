<?php

/**
 * Theme custom post types.
 */

add_action('init', function () {
	register_post_type(
		'Projects',
		[
			'labels'      => [
				'name'          => __('Projects', 'base'),
				'singular_name' => __('Projects', 'base'),
			],
			'public'      => true,
			'publicly_queryable' => true,
			'has_archive' => true,
			'publicly_queryable' => true,
			'menu_icon'   => 'dashicons-products',
			'show_in_rest' => true,
			'rewrite'     => ['slug' => 'projects'],
			'supports'    => array('title', 'thumbnail', 'editor', 'excerpt'),
			'taxonomies'  => array('projects-category'),
		]
	);

	$labels = array(
		'name'                       => _x('Projects', 'Taxonomy General Name', 'base'),
		'singular_name'              => _x('Projects', 'Taxonomy Singular Name', 'base'),
		'menu_name'                  => __('Categories', 'base'),
		'all_items'                  => __('All Category', 'base'),
		'parent_item'                => __('Parent Category', 'base'),
		'parent_item_colon'          => __('Parent Category:', 'base'),
		'new_item_name'              => __('New Category Name', 'base'),
		'add_new_item'               => __('Add New Category', 'base'),
		'edit_item'                  => __('Edit Category', 'base'),
		'update_item'                => __('Update Category', 'base'),
		'view_item'                  => __('View Category', 'base'),
		'separate_items_with_commas' => __('Separate Projects with commas', 'base'),
		'add_or_remove_items'        => __('Add or remove Category', 'base'),
		'choose_from_most_used'      => __('Choose from the most used', 'base'),
		'popular_items'              => __('Popular Categories', 'base'),
		'search_items'               => __('Search Category', 'base'),
		'not_found'                  => __('Not Found', 'base'),
		'no_terms'                   => __('No Projects', 'base'),
		'items_list'                 => __('Projects list', 'base'),
		'items_list_navigation'      => __('Projects list navigation', 'base'),
	);

	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true, // Set this to true if you want the taxonomy to be like categories, false for tags
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest' => true, // Make sure this is set to true
	);

	register_taxonomy('projects-category', array('projects'), $args);
});
