<!DOCTYPE html>
<html lang="en">
<head>
	<title>Dillon Simeone</title>
	<link href="./style.css" rel="stylesheet">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head> 
	<body>
        <section>
            <a href="CheckboxHack/index.html"><h1>Checkbox Hack</h1></a>
            <p>My research into how to fake onclick events using only HTML5 and CSS. I wanted to see how easily I could avoid JavaScript.</p>
            <h2>Result:</h2>
            <blockquote>
                <p>
					It's not easy to avoid JavaScript. I wasn't that surpised that I couldn't find a way to make a checkbox to affect elements that isn't a sibling that comes AFTER the checkbox. It's all in the name, Cascading Style Sheets. Cascading. Unless you design your website in a strange way, checkbox hacks are pretty much useless
				</p>
            </blockquote>
            <h2>Ideas:</h2>
            <ul>
                <li>Collect data on load time/CPU useage/whatever difference between website x using Checkbox hack, and website x using JavaScript?</li>
                <li>Further study how the CSS/HTML only games are made.</li>
            </ul>
        </section>
        
        <section>
            <h1>Steam Interface</h1>
            <p>Work in progress. I dislike the Steam interface, so I'm making my own interface that uses Steam's API.</p>
            <h2>Problems:</h2>
            <ul>
                <li>Memory allocated on RIT's server to PHP scripts is too low to handle the flood of data from Steam's servers. (5MB worth of data, text only!)</li>
                <li>Steam APIs disallows requests from the client's browser. Everything must be done client-side.</li>
            </ul>
        </section>
        
        <section>
            <h1>Browser Detector</h1>
            <p>
				I made this prototype a long time ago when someone asked me if I could get more infomation about their vistors without using third-party scripts. It was much easier than I expected. I did it in both PHP and JavaScript. With PHP, it was much easier to extract infomation about visters, and it was easy to set the script to email me asking me to update it when it encounters a new type of browser and devices. (Disabled right now.)</p>
			<ul>
				<li><a href="BrowserDetect/BrowserDetectJavaScript.html">JavaScript Browser Detect</a></li>
				<li><a href="BrowserDetect/BrowserDetectPHP.php">PHP Browser Detect</a></li>
			</ul>
        </section>
		
		<section>
			<h1><a href="">JavaScript Text Adventure</a></h1>
			<p>
				A random idea I came up with for a class project when on the topic of dynamic programming. This short text adventure was made to test how easy it is to implement.
			</p>
			<h2>Result:</h2>
			<blockquote>
				<p>It was nearly effortless! I found that I could do much more with this than expected.</p>
			</blockquote>
			<h2>Ideas:</h2>
				<p>One step closer to <a href="http://www.sbs.com.au/theboat/">mastery</a>. Maybe I can make something similar now?</p>
				<p>More than two Iframes, with PHP codes interacting with eachother somehow to fake an aschyo effect? A step away from JavaScript!</p>
		</section>
		
	</body>
</html>