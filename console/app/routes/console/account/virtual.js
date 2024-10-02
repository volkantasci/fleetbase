import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ConsoleAccountVirtualRoute extends Route {
    @service universe;

    queryParams = {
        view: {
            refreshModel: true,
        },
    };

    model({ slug }, transition) {
        const view = this.universe.getViewFromTransition(transition);
        return this.universe.lookupMenuItemFromRegistry('console:account', slug, view);
    }
}
