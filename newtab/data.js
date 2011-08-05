/*********************************************
 * Visted LINKS
 ********************************************/

function setNumOfVistedLinks(numlinks)
{
	localStorage["visitedLinks"] = numlinks;
}

function getNumOfVistedLinks()
{
	var returnLinks = "10"; 
	if (localStorage["visitedLinks"] != null) {
		returnLinks = localStorage["visitedLinks"];
	}
	return returnLinks;
}

/*********************************************
 * Recent LINKS
 ********************************************/

function setNumOfRecentLinks(numlinks)
{
	localStorage["recentLinks"] = numlinks;
}

function getNumOfRecentLinks()
{
	var returnLinks = "10"; 
	if (localStorage["recentLinks"] != null) {
		returnLinks = localStorage["recentLinks"];
	}
	return returnLinks;
}

/*********************************************
 * FAVORITE LINKS
 ********************************************/

function setTempNumOfFavoriteLinks(numlinks)
{
	localStorage["tempFavoriteLinks"] = numlinks;
}

function getTempNumOfFavoriteLinks()
{
	var returnLinks = "0";
	if (localStorage["tempFavoriteLinks"] != null) {
		returnLinks = localStorage["tempFavoriteLinks"];
	}
	return returnLinks;
}

function getNumOfFavoriteLinks()
{
  	var favoriteLinks = getFavoriteLinks();
        if ( favoriteLinks.length > 0 ) {
	    return favoriteLinks.length;
        }
        return "0";
}

function getFavoriteLinks() {

	var returnLinks = new Array();
	
	if (localStorage["favoriteLinks"] != null) {
		returnLinks = JSON.parse(localStorage["favoriteLinks"]);
	}
	
	return returnLinks;
}


function setFavoriteLinks(favoriteLinks) {
	localStorage["favoriteLinks"] = JSON.stringify(favoriteLinks);
}

function addFavoriteLink(url) {
	
	var favoriteLinks = getFavoriteLinks();
	if (!favoriteLinkExists(url)) favoriteLinks.push(url);		
	setFavoriteLinks(favoriteLinks);
}


function removeFavoriteLink(url) {
	
	var favoriteLinks = getFavoriteLinks();
	
	for (i = 0; i < favoriteLinks.length; i++) {
		tmpUrl = favoriteLinks[i];
		if (url == tmpUrl) {
			favoriteLinks.splice(i);
			break;
		}
	}

	setFavoriteLinks(favoriteLinks);
}

function favoriteLinkExists(url) {
	
	var exists = false;
	
	var favoriteLinks = getFavoriteLinks();
	
	for (index in favoriteLinks) {
		if (url == favoriteLinks[index]) {
			exists = true;
			break;
		}
	}
	
	return exists;
}



  
