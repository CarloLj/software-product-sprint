function LoadAllImages(){
    var Links = [];
    var Names = [];
    var Allimages = firebase.database().ref().child("Pictures");
    Allimages.on("child_added", snap=>{
        var link = snap.child("Link").val();
        var name = snap.child("Name").val();
        Links.push(link);
        Names.push(name)
        var newDiv = document.createElement("div");
        newDiv.className = "portfolio-item-wrapper";
        var innerNewDiv = document.createElement("div");
        innerNewDiv.className = "portfolio-img-background imagenwhatilove backroundhovering";
        innerNewDiv.style = "background-image:url("+link+")";
        newDiv.appendChild(innerNewDiv);
        document.getElementById("imagescontainer").appendChild(newDiv)
    })
}