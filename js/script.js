

alert("HEELLLLLOOOOOO");

function showNav() {
    $('#topnav'.html()
    
    `
<ul>
			<li class= "resources-link"><a href="resources.html">resources</a></li>
			<li class= "favorite-foods-link"><a href="#">favorite-food.html</a>Favorite Foods</li>
			<li class= "apple-link"><a href="#">link</a></li>
		</ul>
`
    );
}

function addActiveClass(){
    if ($('body.favorite-foods)){
       $('.favorite-foods-link').addClass('active');
        }else if ($('body.resources')) {
        
    }else {
        
    }
    
}

function initialize(){
    showNav();
    addActiveClass();
}

$(initialize());

