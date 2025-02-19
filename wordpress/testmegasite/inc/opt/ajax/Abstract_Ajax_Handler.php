<?php
/**
 * Ajax Handler abstract class.
 * Helps to retrive an ajax request.
 */

/**
 * Class Abstract_Ajax_Handler
 */
abstract class Abstract_Ajax_Handler {

	/**
	 * Nonce constant
	 *
	 * @link https://codex.wordpress.org/WordPress_Nonces
	 */
	const NONCE = 'base_nonce';

	/**
	 * Constructor.
	 * Define some default variables, etc.
	 */
	abstract public function __construct();

	/**
	 * Register ajax hooks.
	 *
	 * @link https://codex.wordpress.org/AJAX_in_Plugins
	 * @return void
	 */
	abstract public function register(): void;

	/**
	 * Html output.
	 *
	 * @return void
	 */
	abstract public function response(): void;

	/**
	 * Generate response string.
	 *
	 * @param array $errors all errors here.
	 * @param string $success_text text for users.
	 * @param string $action action would be done after responce.
	 *
	 * @return json string.
	 */
	public function get_response_object(
		$errors,
		$success_text,
		$action,
		$action_url
	) {
		$status = ( $errors->has_errors() ) ? 'failed' : 'success';
		$return = [
			'status'     => $status,
			'errors'     => $errors->errors,
			'text'       => $success_text,
			'action'     => $action,
			'action_url' => $action_url,
		];

		return wp_json_encode( $return );
	}
}
