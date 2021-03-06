/*********************************************
 * Visted LINKS
 ********************************************/

function setNumOfVistedLinks(numlinks)
{
	localStorage["visitedLinks"] = numlinks;
}

function getNumOfVistedLinks()
{
	var returnLinks = "0"; 
	if (localStorage["visitedLinks"] != null) {
		returnLinks = localStorage["visitedLinks"];
	}
	return returnLinks;
}

function setShowVistedLinks(show)
{
	localStorage["showVisitedLinks"] = show;
}

function getShowVistedLinks()
{
        var show = 1;
	if (localStorage["showVisitedLinks"] != null) {
		show = localStorage["showVisitedLinks"];
	}
	return show;
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
	var returnLinks = "0"; 
	if (localStorage["recentLinks"] != null) {
		returnLinks = localStorage["recentLinks"];
	}
	return returnLinks;
}

function setShowRecentLinks(show)
{
	localStorage["showRecentLinks"] = show;
}

function getShowRecentLinks()
{
        var show = 1;
	if (localStorage["showRecentLinks"] != null) {
		show = localStorage["showRecentLinks"];
	}
	return show;
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



  
