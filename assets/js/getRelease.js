function getRelease()
{
    $.getJSON("release.json",{}, function( data ){
        var releaseState = data.release.state;
        var releaseVersion = data.release.version;
        var releaseDl = data.release.can_download;

        var betaVersion = data.beta.version;
        var betaBuild = data.beta.build;
        var betaDl = data.beta.can_download;

        var baseURL = "https://github.com/TheAngelReturns/the-angel-returns/releases/tag/";

        try {
            var dl = document.getElementById('dl-button');
            dl.innerHTML = "Download " + releaseState + " (" + releaseVersion + ")";
            if (releaseDl == "False") {
                $('#dl-button').addClass('is--disabled');
                $('#dl-button').attr('aria-disabled', true);
            } else {
                $('#dl-button').attr('href', baseURL + releaseVersion);
            }
            
        } catch (error) {
            console.error("Couldn't get data.");
        }

        try {
            var beta = document.getElementById('dl-button-beta');
            beta.innerHTML = "Download " + betaVersion + " Beta " + betaBuild;
            if (betaDl == "False") {
                $('#dl-button-beta').hide();
            } else {
                $('#dl-button-beta').attr('href', baseURL + betaVersion + "beta" + betaBuild);
            }
            
        } catch (error) {
            console.error("Couldn't get data.");
        }
    });
}