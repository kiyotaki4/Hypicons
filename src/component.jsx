function Component(){
    return <div>
        {/* ---------header----------- */}
        <div className="header">
            <nav className="headnav">
                <img src="logo.svg" alt="" className="logo" />
                <ul>
                    <li>Intro</li>
                    <li>What Included?</li>
                    <li>Icon Request</li>
                </ul>
                <button>Buy Now</button>
            </nav>
            <div className="top-content">
                <p>Custom icon pack</p>
                <h1>A wildly over the top, neon themed icon pack for your device customisation.</h1>
                <button>Buy now - $14.99</button>
                <div className="row">
                <div className="column">
                    <h3>3D rendered icons</h3>
                    <p>Not a flat vector graphic in sight – this pack has been meticulously crafted in shiny 3D beauty.</p>
                </div>
                <div className="column">
                    <h3>High definition</h3>
                    <p>Each icon has been rendered at 2048px, ludicrously large for an icon but it's just nice to see the details sometimes.</p>
                </div>
                <div className="column">
                    <h3>Over 100 icons included</h3>
                    <p>Included in this pack are over 100 icons of the most commonly used apps and utilities.</p>
                </div>
                </div>
                
            </div>
            
        </div>
        {/* -------content------ */}
        <div className="main-content">
            <div className="leftbar">
                <h2>100+ Unique icons</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos animi fuga voluptates repudiandae iste labore nihil veniam! Culpa, deleniti nulla, molestiae dignissimos consequuntur ad ipsa nostrum voluptatum ex sunt id magni suscipit voluptatibus eveniet fuga voluptate dolor totam. Eos, in?</p>
                <button>Buy now - $14.99</button>
            </div>
            <img src="phone.svg" alt="" />
        </div>
        <div className="icons-container">
            <h2>3D Rendered Icons</h2>
            <img src="icons-container.svg" alt="" />
        </div>
        <div className="company-icons">
            <h2>Big Sur Ready</h2>
            <img src="company-icons.svg" alt="" />
            
        </div>
        <div className="company-text">
            <div className="column">
                <h3>Health&Fitness</h3>
                {["Adidas", "Activity", "Covid-19", "Fitbit", "Nike", "Peloton", "Sleep", "Strava", "MyFitnessPal", "Weights"].map((word, index) => (
        <p key={index}>{word}</p>
    ))}
            </div>
            <div className="column">
                <h3>Social Media</h3>
                {[
        "Behance", "Bumble", "Discord", "Dribbble", "Facebook", "Flickr", "Google Hangouts", 
        "Instagram", "Linkedin", "Meetup", "Messenger", "Pinterest", "Quora", "Reddit", "Skype", 
        "Slack", "Snapchat", "Teams", "Telegram", "TikTok", "Tinder", "Tumblr", "Twitch", "Twitter", 
        "Vimeo", "VK", "Whatsapp", "Youtube", "Zoom"
    ].map((word, index) => (
        <p key={index}>{word}</p>
    ))}
            </div>
            <div className="column">
                <h3>General</h3>
                {[
        "Airbnb", "Cash App", "Chrome", "Deliveroo", "Dropbox", "Ebay", "Figma", "Github",
        "Gmail", "Google Drive", "Google Home", "Gumtree", "Invision", "Lyft", "Monzo",
        "Notion", "Paypal", "Uber", "VSCO"
    ].map((word, index) => (
        <p key={index}>{word}</p>
    ))}
            </div>
            <div className="column">
                <h3>Entertaiment</h3>
                {[
        "Alexa", "Amazon", "Apple (TV)", "Channel 4", "Crunchyroll", "Disney Plus", "Google Photos",
        "Google Play", "Hulu", "Netflix", "Oculus", "Playstation", "Shazam", "Sky",
        "Soundcloud", "Spotify"
    ].map((word, index) => (
        <p key={index}>{word}</p>
    ))}
            </div>
            <div className="column">
                <h3>Apple Utilities</h3>
                {[
        "Calculator", "Calendar", "Camera", "Clock", "Contacts", "Facetime", "Find my phone",
        "Flashlight", "Health", "iMovie", "Keynote", "Mail", "Maps", "Messages", "Music",
        "Numbers", "Pages", "Phone", "Photos", "Podcasts", "Remote", "Safari", "Shortcuts",
        "Stopwatch", "Weather"
    ].map((word, index) => (
        <p key={index}>{word}</p>
    ))}
            </div>
            </div>
    <div className="icon-request">
        <img src="emailsvg.svg" alt="" />
        <div className="rightbar">
            <h2>Icon Request</h2>
            <p>If you find that the pack is missing any icons, feel free to send me a message and I will do my best to create one. Purchasing the pack will give you access to any future updates.</p>
            <button>Get in Touch</button>
        </div>
    </div>
    <div className="footer">
        <h2>Grab the pack</h2>
        <p>By purchasing the pack you will get access to future additions and updates – for life!</p>
        <button>Buy Now - $14.99</button>
    </div>
    <div className="footer-end">
        <img src="logo.svg" alt="" />
        <p>Copyright © 2020. All rights reserved.</p>
    </div>
    </div>
}
export default Component