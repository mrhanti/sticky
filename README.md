#### Setup

In order to run the demo, clone the repo

    git clone http://github.com/mrhanti/sticky

Launch a webserver on the repo

    python -m SimpleHTTPServer

By default this starts the app on port `8000`

On you browser navigate to `http://localhost:8000/example`

#### Usage

Just include your script after jQuery.

Include your scripts

    <script src="/path/to/jquery.js"></script>
    <script src="/path/to/sticky.js"></script>
    <script>
        $('.selector').sticky();
    </script>

Affix toggles between two classes: `.top-fixed`, and `.bottom-fixed`.

You must provide the styles for these classes yourself.

both classes should be position: fixed. When sticked to top, plugin will add `top-fixed` to your element and `bottom-fixed` when sticked to the bottom.

Note that when setting an element's position to fixed it turns it inherits the parents width. Make sure you set a static width, or maybe support this functionality in the plugin itself.

In order to change the classnames selectors, you can specify options

    $('.selector').sticky({
        topClassName: 'top', 
        bottomClassName: 'bottom' 
    });


