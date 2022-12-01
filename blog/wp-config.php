<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db604931327');

/** MySQL database username */
define('DB_USER', 'dbo604931327');

/** MySQL database password */
define('DB_PASSWORD', 'Sj3jpa\'\'aa\'');

/** MySQL hostname */
define('DB_HOST', 'db604931327.db.1and1.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'qTKa04&-,%;r6#Ce)EKyNR)YqIU|[06zWMr22CD^iL?]cEz~eKvRIx/=(hq&I,y2');
define('SECURE_AUTH_KEY',  '76xz|Y<GFRRV+ a%j~hz7W]gc}H7v-#(G}cs_-Gl/.[TIDLd_r-:l%3$38Zx<J.o');
define('LOGGED_IN_KEY',    'n/VQ|/>SfJ .lnFZh4gNxx.7=s7|C|L-<%x,J-jx-|4vW ~-QM!gV)_-ZR2B4TL9');
define('NONCE_KEY',        '?[Rd=rGDyYM>Y*(OdGd3^)JtMUn-[tU7~L<KDKfRT[+gc5):i?yZJ?T-n|<l{jfi');
define('AUTH_SALT',        'J+v{q%Dop^rx+8-])t>[m3{%>F!C./jl|-I_@]g4Jy8coP|x$T%NE!V^UYXET#R`');
define('SECURE_AUTH_SALT', 'J09x?M&!}egI|~6eWGxaNe|bY[V%Nd$D8F:kWyaa$KO?hcUT~T+[gHG4,#8YWyW&');
define('LOGGED_IN_SALT',   ',aP^:>jwoH|TmVebC@_Lh_$;T0Tf|X(2/=(>~+,QPGp/LRKLX~/9(oq4*>nrR/))');
define('NONCE_SALT',       '^Ez?FGz8-a(^HGD/Y{8tZXZ6gSF-u`,j51H5fpV>$2@Q0MJ^x%,T2 lM@PENAIbz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
