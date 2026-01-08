sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capgrafanabooks/test/integration/FirstJourney',
		'capgrafanabooks/test/integration/pages/BooksList',
		'capgrafanabooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capgrafanabooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);