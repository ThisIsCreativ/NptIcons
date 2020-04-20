function addIcon(iconName) {
    var icon = document.createElement("i");
    icon.className = iconName;
    var iconItem = document.createElement("div");
    iconItem.className = "icon-item";
    iconItem.append(icon);
    var title = document.createElement("div");
    title.className = "icon-title";
    title.innerHTML = "<span>" + iconName + "</span>";
    var div = document.createElement("div");
    div.className = "icon-container";
    div.append(iconItem);
    div.append(title);
    document.body.append(div);
}

function addIcons(icons) {
    for (var i = 0; i < icons.length; ++i) {
        addIcon(icons[i]);
    }
}