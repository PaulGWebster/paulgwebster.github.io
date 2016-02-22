<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTf-8">
		<title>FreeBSD Handbook V2</title>
		<link rel="stylesheet" type="text/css" href="<?=u('assets/css/screen.css')?>">
		<link rel="stylesheet" type="text/css" href="<?=u('assets/css/icons.css')?>">
	</head>
	<body>
		<div class="overlay"></div>
		<div class="toggle-menu">
			<svg width="65px" viewBox="0 0 24 24">
				<path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
			</svg>
		</div>

		<header>
			<div class="category-title">FreeBSD Handbook
				<span data-chapter="00" data-chapter-title="handbook" data-chapter-page="handbook">One</span>
				<span data-chapter="00" data-chapter-title="preface" data-chapter-page="preface">Two</span>
				<span data-chapter="01" data-chapter-title="introduction" data-chapter-page="00-synopsis">Three</span>
			</div>
		</header>

		<nav>
			<div class="page-title">
				<svg viewBox="0 0 107 105" xmlns="http://www.w3.org/2000/svg">
					<path fill="#f64636" d="M104.974 1.784c5.63 5.628-9.976 30.36-12.614 33-2.638 2.633-9.34.21-14.965-5.42-5.63-5.626-8.054-12.328-5.416-14.966 2.636-2.64 27.366-18.24 32.994-12.614M26.04 7.738c-8.595-4.876-20.823-10.3-24.713-6.41-3.94 3.94 1.68 16.444 6.61 25.053A52.84 52.84 0 0 1 26.038 7.74"/>
					<path fill="#f64636" d="M96.39 32.84c.79 2.685.647 4.903-.635 6.183-2.998 3-11.095-.192-18.394-7.14-.51-.456-1.014-.93-1.51-1.43-2.64-2.638-4.694-5.45-6.007-8.038-2.557-4.585-3.197-8.637-1.264-10.568 1.052-1.053 2.737-1.34 4.792-.97A98.46 98.46 0 0 1 78.03 8.12c-7.055-3.68-15.076-5.76-23.586-5.76-28.218 0-51.096 22.875-51.096 51.096 0 28.22 22.878 51.095 51.096 51.095 28.22 0 51.098-22.875 51.098-51.094a50.84 50.84 0 0 0-6.57-25.068 97.627 97.627 0 0 1-2.583 4.453"/>
				</svg>
			</div>

			<ul>
				<li><a href="#handbook-intro">Handbook</a></li>
				<li><a href="#handbook-preface">Preface</a></li>
				<li><a href="#handbook-getting-started"><span>I. </span>Getting Started</a></li>
				<li class="children"><i><span>1. </span>Introdcution</i>
					<ul>
						<li><a href="#introduction-synopsis"><span>1.1. </span>Synopsis</a></li>
						<li><a href="#introduction-welcome"><span>1.2. </span>Welcome to FreeBSD!</a></li>
						<li><a href="#introduction-about"><span>1.3. </span>About the FreeBSD Project</a></li>
					</ul>
				</li>
				<li class="children"><i><span>2. </span>Installing FreeBSD</i>
					<ul>
						<li><a href="#bsdinstall-synopsis"><span>2.1. </span>Synopsis</a></li>
						<li><a href="#bsdinstall-minimum-hardware"><span>2.2. </span>Minimum Hardware Requirements</a></li>
						<li><a href="#bsdinstall-preinstallation-tasks"><span>2.3. </span>Pre-Installation Tasks</a></li>
						<li><a href="#bsdinstall-starting-installing"><span>2.4. </span>Starting the Installation</a></li>
						<li><a href="#bsdinstall-using-bsdinstall"><span>2.5. </span>Using bsdinstall</a></li>
						<li><a href="#bsdinstall-allocation-disk-space"><span>2.6. </span>Allocating Disk Space</a></li>
						<li><a href="#bsdinstall-committing-to-installtion"><span>2.7. </span>Committing to the Installation</a></li>
						<li><a href="#bsdinstall-post-installation"><span>2.8. </span>Post-Installation</a></li>
						<li><a href="#bsdinstall-troubleshooting"><span>2.9. </span>Troubleshooting</a></li>
						<li><a href="#bsdinstall-using-live-cd"><span>2.10. </span>Using the Live CD</a></li>
					</ul>
				</li>
				<li class="children"><i><span>3. </span>UNIX Basics</i>
					<ul>
						<li><a href="#unix-synopsis"><span>3.1. </span>Synopsis</a></li>
						<li><a href="#unix-virtual-consoles"><span>3.2. </span>Virtual Consoles and Terminals</a></li>
						<li><a href="#unix-user-basic"><span>3.3. </span>Users and Basic Account Management</a></li>
						<li><a href="#unix-permissions"><span>3.4. </span>Permissions</a></li>
						<li><a href="#unix-directory-structure"><span>3.5. </span>Directory Structure</a></li>
						<li><a href="#unix-disk-organization"><span>3.6. </span>Disk Organization</a></li>
						<li><a href="#unix-mounting-unmounting"><span>3.7. </span>Mounting and Unmounting File Systems</a></li>
						<li><a href="#unix-processes-daemons"><span>3.8. </span>Processes and Daemons</a></li>
						<li><a href="#unix-shells"><span>3.9. </span>Shells</a></li>
						<li><a href="#unix-text-editors"><span>3.10. </span>Text Editors</a></li>
						<li><a href="#unix-devices"><span>3.11. </span>Devices and Device Nodes</a></li>
						<li><a href="#unix-manual"><span>3.12. </span>Manual Pages</a></li>
					</ul>
				</li>
				<li class="children"><i><span>4. </span>Installing Applications: <br>Packages and Ports</i>
					<ul>
						<li><a href="#installing-synopsis"><span>4.1. </span>Synopsis</a></li>
						<li><a href="#installing-overview"><span>4.2. </span>Overview of Software Installation</a></li>
						<li><a href="#installing-finding"><span>4.3. </span>Finding Software</a></li>
						<li><a href="#installing-using-pkg"><span>4.4. </span>Using pkg for Binary Package Management</a></li>
						<li><a href="#installing-using-ports"><span>4.5. </span>Using the Ports Collection</a></li>
						<li><a href="#installing-building"><span>4.6. </span>Building Packages with Poudriere</a></li>
						<li><a href="#installing-post-installation"><span>4.7. </span>Post-Installation Considerations</a></li>
						<li><a href="#installing-dealing-with-broken-ports"><span>4.8. </span>Dealing with Broken Ports</a></li>
					</ul>
				</li>

				<li class="children"><i><span>5. </span>The X Window System</i>
					<ul>
						<li><a href="#xwindow-synopsis"><span>5.1. </span>Synopsis</a></li>
						<li><a href="#xwindow-terminology"><span>5.2. </span>Terminology</a></li>
						<li><a href="#xwindow-installing-xorg"><span>5.3. </span>Installing Xorg</a></li>
						<li><a href="#xwindow-xorg-conf"><span>5.4. </span>Xorg Configuration</a></li>
						<li><a href="#xwindow-using-fonts"><span>5.5. </span>Using Fonts in Xorg</a></li>
						<li><a href="#xwindow-xdisplay-manager"><span>5.6. </span>The X Display Manager</a></li>
						<li><a href="#xwindow-desktop-env"><span>5.7. </span>Desktop Environments</a></li>
						<li><a href="#xwindow-installing-compiz"><span>5.8. </span>Installing Compiz Fusion</a></li>
						<li><a href="#xwindow-troubleshooting"><span>5.9. </span>Troubleshooting</a></li>
					</ul>
				</li>
			</ul>

			<div class="footer">
				<p>Design by <a href="https://bratteng.me/">Martin Bratteng</a></p>
			</div>
		</nav>