sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capgrafanaauthors/test/integration/FirstJourney',
		'capgrafanaauthors/test/integration/pages/AuthorsList',
		'capgrafanaauthors/test/integration/pages/AuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capgrafanaauthors') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);