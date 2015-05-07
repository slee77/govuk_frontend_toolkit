// files are loaded from the /spec/support folder so paths are relative to that
var manifest = {
  support : [
    '../../node_modules/jquery-browser/lib/jquery.js',
    '../../javascripts/govuk/multivariate-test.js',
    '../../javascripts/govuk/primary-links.js',
    '../../javascripts/govuk/stick-at-top-when-scrolling.js',
    '../../javascripts/govuk/stop-scrolling-at-footer.js',
    '../../javascripts/govuk/selection-buttons.js',
    '../../javascripts/govuk/analytics/google-analytics-classic-tracker.js',
    '../../javascripts/govuk/analytics/google-analytics-universal-tracker.js',
    '../../javascripts/govuk/analytics/tracker.js'

  ],
  test : [
    '../unit/MultivariateTestSpec.js',
    '../unit/PrimaryLinksSpec.js',
    '../unit/StickAtTopWhenScrollingSpec.js',
    '../unit/SelectionButtonSpec.js',
    '../unit/analytics/GoogleAnalyticsClassicTrackerSpec.js',
    '../unit/analytics/GoogleAnalyticsUniversalTrackerSpec.js',
    '../unit/analytics/TrackerSpec.js'
  ]
};
