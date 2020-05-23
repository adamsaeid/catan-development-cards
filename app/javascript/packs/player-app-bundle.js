import ReactOnRails from 'react-on-rails';

import PlayerApp from '../bundles/PlayerApp/components/PlayerApp';

// This is how react_on_rails can see the PlayerApp in the browser.
ReactOnRails.register({
  PlayerApp,
});
