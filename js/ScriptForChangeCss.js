function getNightTheme() {
    let date = new Date();
    let sysHour = date.getHours();
    if ((sysHour >= 21) || (sysHour <= 6)) {
        document.getElementById('css_path').setAttribute('href', './css/blackstyle.css');
    }
}

getNightTheme();
